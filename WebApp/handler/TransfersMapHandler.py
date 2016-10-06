from WebAppDIRAC.Lib.WebHandler import WebHandler, WErr, WOK, asyncGen
from DIRAC import gConfig, gLogger
from DIRAC.Core.DISET.RPCClient import RPCClient
from DIRAC.Interfaces.API.DiracAdmin import DiracAdmin
from BelleDIRAC.gbasf2.lib.utils.manager import Manager

from DIRAC.Core.Base import Script
#from controllers.utilCLController import listSE
#from DIRAC.AccountingSystem.Client.ReportsClient import ReportsClient

#Script.parseCommandLine()

import json, urllib2, math, time
from datetime import datetime as dt
from datetime import timedelta

class TransfersMapHandler(WebHandler):

    AUTH_PROPS = "authenticated"

    # Accounting time in hours
    hours = 720

    # Coordinates info to be shared with storage Elements
    coord_info = {}
    # Service to obtain info from SE
    service = RPCClient('DistributedDataManagement/StorageElementStatus')


    # @asyncGen
    def web_getSitesData(self):
        # Accounting time in hours
        hours = 720
        # A simple script to obtain the info for the map
        site_map = JSgen(hours)
        ce_sites = self.read_site_summary()
        se_sites = self.get_se_sites()

        for ce in ce_sites:
            # Find destinations of each computing site
            ce_sites[ce]['Destinations'] = self.find_destinations(ce, hours)
            site_map.add_ce_site(ce, ce_sites[ce])

        for se in se_sites:
            site_map.add_se_site(se, se_sites[se])

        # Find the connections between SEs with dashboard
        site_map.pull_dashboard('http://dashb-fts-transfers.cern.ch/' + \
                           'dashboard/request.py/transfer-matrix.json?' + \
                           'vo=belle&server=b2fts3.cc.kek.jp&src_grouping=host' + \
                           '&dst_grouping=host&interval=' + str(hours * 60), hours)

        # Send to the client {'CEsites':{...},'SEsites':{...},'Global':{...}}
        self.write({"success": "true", "result": site_map.push_map()})


    def getSiteList(self):
        result = DiracAdmin().getSiteMask()
        if not result['OK']:
            return []
        return result['Value']

    def read_site_summary(self):
        active_sites = {}

        Script.initialize(False, False, False, False)

        JobMonitoring = RPCClient('WorkloadManagement/JobMonitoring', timeout=600)
        result = JobMonitoring.getSiteSummary()
        if not result['OK']:
            # sys.exit("Failed to get SiteSummary: %s" % str(result['Message']))
            pass
        sitesummary = result['Value']

        sitelists = self.getSiteList()

        # For now, for sites without coordinates info in DIRAC
        self.coord_info['Aledaide'] = [-34.910836, 138.57121]
        self.coord_info['IPHC'] = [48.6056, 7.7095]
        self.coord_info['KEK'] = [36.06, 140.2303]

        for site in sorted(sitelists):

            ele = site.split('.')
            result = gConfig.getOptionsDict('Resources/Sites/%s/%s' % (ele[0], site))
            if not result['OK']:
                continue
            optionsdict = result['Value']
            status = "production"
            if 'Status' in optionsdict:
                status = optionsdict['Status']
            if status not in ['production', 'commissioning']:
                continue
            if site not in sitesummary:
                continue
            active_sites[site] = sitesummary[site]
            x = '0'
            y = '0'
            if 'Coordinates' in optionsdict:
                [y, x] = optionsdict['Coordinates'].split(':')
                if x.replace('-', '').replace('.', '').isdigit() and y.replace('-', '').replace('.', '').isdigit():
                    active_sites[site]['Coordinates'] = [float(x), float(y)]
                    self.coord_info[site.split('.')[1]] = [float(x), float(y)]

        return active_sites


    def get_se_sites(self):

        # Read the data from CSV file and returns dictionary

        coordinates_data = self.coord_info
        se_sites = {}
        manager = Manager()
        se_result = manager.listSEs()['Value']
        se_health = self.service.getHealthyProductionSEs()
        # se_health = service.getAllStorageElementStatus()
        if not se_health['OK']:
            # print "[WARNING]: No health info for SE sites"
            pass
        for se in sorted(se_result['Active']):
            se_site = {}
            result = gConfig.getOptionsDict('/Resources/StorageElements/' + se)
            result2 = gConfig.getOptionsDict('/Resources/StorageElements/' + se \
                                             + '/AccessProtocol.1')
            if result['OK'] and result2['OK']:
                result = result['Value']
                result2 = result2['Value']
                se_site = result2
                se_site['Read'] = result['ReadAccess']
                se_site['Write'] = result['WriteAccess']

                if se.split('-')[0] in coordinates_data:
                    se_site['Coordinates'] = coordinates_data[se.split('-')[0]]
                else:
                    # print "[WARNING]: No location info for " + se
                    pass
                se_sites[se] = se_site

                if se_health['OK'] and se in se_health['Value']:
                    se_site['Health'] = se_health['Value'][se][0]

        return se_sites

    # Find the transfers between source and its destinations (since last hours)
    def find_destinations(self, source, hours=720):
        # Read the data from CSV file and returns dictionary
        coordinates_data = self.coord_info
        destinations = {}
        fromD = dt.utcnow() - timedelta(hours=hours)
        toD = dt.utcnow()
        service = RPCClient('Accounting/ReportGenerator')
        for status in ['Successful', 'Failed', 'Finished']:
            result = service.getReport(
                {'typeName': 'DataOperation', 'reportName': 'Pie chart of transferred data', 'startTime': fromD,
                 'endTime': toD, 'condDict': {'Source': source, 'FinalStatus': status}, 'grouping': 'Destination'})

            if not result['OK'] or not 'Value' in result or not 'data' in result['Value']:
                return {}

            result = result['Value']['data']
            for dest in result:
                if not dest in destinations:
                    destinations[dest] = {}
                destinations[dest][status] = result[dest]

        if len(destinations.keys()) == 0:
            return {}
        destinations_active = {}
        for dest in destinations:
            if dest == '':
                continue
            # We calculate the speed on kBs
            total = 0
            if not 'Failed' in destinations[dest]:
                destinations[dest]['Failed'] = 0
            for status in destinations[dest]:
                total += destinations[dest][status]
            if total == 0:
                continue
            # In KB/s
            speed = total / float(hours * 60 * 60 * 1000)
            if total != 0:
                efficiency = (total - destinations[dest]['Failed']) * 100 / float(total)
            else:
                efficiency = 0

            description_text = """<strong>Source = """ + source + """</br>
            Destination = """ + dest + """</strong></br><hr>
            <font style="font-weight: bold">Connection info:</font> </br>
            <div style="padding-left: 5px;">Throughput: %0.1f KB/s </br>""" % speed + \
                               """Efficiency: %.1f""" % efficiency + """%""" + \
                               "</br>Successful: %.1f MB</br>" % (
                               float(total - destinations[dest]['Failed']) / float(1000000.0)) + \
                               "Failed: %0.1f MB" % float(destinations[dest]['Failed'] / float(1000000.0)) + """  </br>
            </div><br />"""
            # The color depends of the efficiency
            if efficiency < 20:
                color = '#FF0000'
            elif efficiency >= 20 and efficiency < 60:
                color = '#FFFF00'
            elif efficiency >= 60 and efficiency < 80:
                color = '#0033FF'
            else:
                color = '#00CC00'
            # The stroke weight of the line depends of the throughput.
            destinations[dest]['color'] = color
            if speed < 1:
                destinations[dest]['stroke'] = 1
            else:
                destinations[dest]['stroke'] = 1 + math.log(speed, 2)

            destinations[dest]['Description'] = description_text
            destinations[dest]['efficiency'] = efficiency
            destinations[dest]['speed'] = speed
            if dest.split('-')[0] in coordinates_data:
                destinations[dest]['Coordinates'] = coordinates_data[dest.split('-')[0]]
            else:
                # print "[WARNING]: No coordinates info for destination", dest
                pass

            destinations_active[dest] = destinations[dest]

        return destinations_active


# Used to export Javascript objects
def js_icon(url, anchorx=0, anchory=0, size=40):
    icon = {}
    t = time.strftime("%Y/%m/%d:%H:%M", time.gmtime())
    icon['url'] = url + "?t=" + t
    icon['size'] = size
    icon['anchor'] = [anchorx, anchory]
    return icon


# This encapsulates all the functions to generate Javascript file
class JSgen:
    def __init__(self, hours):
        self.js_writer = {}
        self.ce_sites = {}
        self.se_sites = {}
        self.hours = hours


    # Include a computing element in the map
    def add_ce_site(self, key, ce):
        # Calculate the size of the pie plot based on total jobs
        min_jobs = 1000
        max_jobs = 1000000
        scale = 9.0
        if int(ce['Done']) > max_jobs:
            radius = math.log10(max_jobs) / scale
        elif int(ce['Done']) < min_jobs:
            radius = math.log10(min_jobs) / scale
        else:
            radius = math.log10(float(ce['Done'])) / scale

        self.ce_sites[key] = ce

        self.ce_sites[key]['Radius'] = radius * 70

        jobs_total = int(ce['Done']) + int(ce['Failed'])
        if jobs_total != 0:
            description_text = '<strong>' + key + '</strong>' + \
                               """</br><hr>
                               <font style="font-weight: bold">Job Statistics:</font> </br>
                               <div style="padding-left: 5px;">Jobs Succeeded: """ + str(ce['Done']) + \
                               ' (%.1f' % (int(ce['Done']) / float(jobs_total) * 100) + """%) </br>
            Jobs Failed: """ + str(ce['Failed']) + ' (%.1f' % (int(ce['Failed']) / float(jobs_total) * 100) + \
                               """%) </br>
                               (Total: """ + str(jobs_total) + """)<br /><br />
            Jobs Running: """ + str(ce['Running']) + """
            </div><br />     """
        else:
            description_text = '<strong>' + key + '</strong>' + \
                               """</br><hr>
                               <font style="font-weight: bold">Job Statistics:</font> </br>
                               <div style="padding-left: 5px;">Jobs Succeeded: """ + str(ce['Done']) + \
                               """ (- %) </br>
                               Jobs Failed: """ + str(ce['Failed']) + """ (- %) </br>
            (Total:""" + str(jobs_total) + """)<br />
            </div><br />
            """
        self.ce_sites[key]['Description'] = description_text

    # Include a storage element in the map
    def add_se_site(self, key, se):

        if not 'Token' in se:
            se['Token'] = ''

        if 'Health' in se and 'HealthUpdateTime' in se['Health']:
            se['Health'].pop('HealthUpdateTime', None)
        # To avoid duplicate sites (XXX-*-SE)
        included = False
        for se_included in self.se_sites:
            if se['Host'] == self.se_sites[se_included]['Host'] and se['Token'] == self.se_sites[se_included]['Token']:
                included = True
        if not included:
            self.se_sites[key] = se
            self.se_sites[key]['Endpoints'] = [key]

            description_text = '<strong>' + se['Host'] + '</strong></br><hr>'

            # The color depends of the health
            if not 'Health' in se or se['Health'] == '':
                self.se_sites[key]['Icon'] = js_icon("db_unknown.png", 35, 0)
                description_text += """<strong>Free space: """ + \
                                    'unknown' + " </strong></br><!--abs--></br> "
            else:
                if se['Health']['isHealthy'] != 1:
                    self.se_sites[key]['Icon'] = js_icon("db_error.png", 35, 0)
                    description_text += """<strong>Free space: """ + \
                                        'unknown' + " </strong></br><!--abs--></br> "

                elif se['Health']['GuaranteedSizeBYTE'] == 0:
                    self.se_sites[key]['Icon'] = js_icon("db_unknown.png", 35, 0)
                    description_text += """<strong>Free space: """ + \
                                        'unknown' + " </strong></br><!--abs--></br> "
                else:
                    free_absolute = se['Health']['UnusedSizeBYTE']
                    size_absolute = se['Health']['GuaranteedSizeBYTE']
                    free_space = free_absolute / float(size_absolute)
                    # In Terabytes
                    free_absolute = free_absolute / 1000000000000.0
                    size_absolute = size_absolute / 1000000000000.0
                    if free_space > 0.66:
                        self.se_sites[key]['Icon'] = js_icon("db_99y.png", 35, 0)
                    elif free_space <= 0.66 and free_space > 0.33:
                        self.se_sites[key]['Icon'] = js_icon("db_66y.png", 35, 0)
                    elif free_space < 0.33 and free_space > 0.05:
                        self.se_sites[key]['Icon'] = js_icon("db_33y.png", 35, 0)
                    else:
                        self.se_sites[key]['Icon'] = js_icon("db_0y.png", 35, 0)

                    description_text += """<strong>Free space: """ + \
                                        str(format(free_space * 100, '.2f')) + "% </strong></br>"
                    description_text += "<strong>(" + str(format(free_absolute, '.1f')) + " TB of " + \
                                        str(format(size_absolute, '.1f')) + " TB)</strong> </br></br>"

            description_text += """<font style="font-weight: bold">Endpoints:</font> </br>"""
            description_text += """<div style="padding-left: 5px;">Endpoint: """ + key + """ </br>
            Path: """ + se['Path'] + " </br> "
            if se['Token'] != '':
                description_text += "SpaceToken: " + se['Token'] + " </br> "
            description_text += "</div>"

            self.se_sites[key]['Description'] = description_text

        else:
            for included in self.se_sites:
                if se['Host'] == self.se_sites[included]['Host'] and se['Token'] == self.se_sites[included]['Token']:
                    self.se_sites[included]['Endpoints'].append(key)
                    self.se_sites[included]['Description'] += """----- </br>
                    <div style="padding-left: 5px;">Endpoint: """ + key + """ </br>
                    Path: """ + se['Path'] + "</br>"
                    if se['Token'] != '':
                        self.se_sites[included]['Description'] += "SpaceToken: " + se.token + "</br>"
                    self.se_sites[included]['Description'] += "</div>"

                    # The color depends of the health
                    if 'Health' in se and se['Health'] != '':
                        if se['Health']['isHealthy'] != 1:
                            self.se_sites[included]['Icon'] = js_icon("db_error.png", 35, 0)
                        elif se['Health']['GuaranteedSizeBYTE'] != 0:
                            free_absolute = se['Health']['UnusedSizeBYTE']
                            size_absolute = se['Health']['GuaranteedSizeBYTE']
                            free_space = free_absolute / float(size_absolute)
                            # In Terabytes
                            free_absolute = free_absolute / 1000000000000.0
                            size_absolute = size_absolute / 1000000000000.0

                            if free_space > 0.66:
                                self.se_sites[included]['Icon'] = js_icon("db_99y.png", 35, 0)
                            elif free_space <= 0.66 and free_space > 0.33:
                                self.se_sites[included]['Icon'] = js_icon("db_66y.png", 35, 0)
                            elif free_space < 0.33 and free_space > 0.05:
                                self.se_sites[included]['Icon'] = js_icon("db_33y.png", 35, 0)
                            else:
                                self.se_sites[included]['Icon'] = js_icon("db_0y.png", 35, 0)
                            space = str(format(free_space * 100, '.2f')) + "%"
                            space_abs = "<strong>(" + str(format(free_absolute, '.1f')) + \
                                        " TB of " + str(format(size_absolute, '.1f')) + " TB)</strong> </br>"
                            self.se_sites[included]['Description'] = \
                                self.se_sites[included]['Description'].replace('unknown', space)
                            self.se_sites[included]['Description'] = \
                                self.se_sites[included]['Description'].replace('<!--abs-->', space_abs)

    # Pull data from Dashboard JSON file
    def pull_dashboard(self, path, hours=720):

        minutes = hours * 60
        js_data = urllib2.urlopen(path).read()
        dashboard = json.loads(js_data)

        site1 = ''
        site2 = ''
        # For now, we only need the data transfer info
        data_matrix = dashboard['transfers']['rows']
        # Search the pair of SE elements
        for cell in data_matrix:
            for se in self.se_sites:
                if self.se_sites[se]['Host'] == cell[0]:
                    site1 = se
                if self.se_sites[se]['Host'] == cell[1]:
                    site2 = se
            # We calculate the speed on kBs
            speed = cell[2] / float(minutes * 60 * 1000)
            efficiency = cell[3] * 100 / (cell[3] + cell[4])

            description_text = """<strong>Source = """ + self.se_sites[site1]['Host'] + """</br>
            Destination = """ + self.se_sites[site2]['Host'] + """</strong></br><hr>
            <font style="font-weight: bold">Connection info:</font> </br>
            <div style="padding-left: 5px;">Throughput: %0.1f KB/s </br>""" % speed + \
                               """Efficiency: %0.0f""" % efficiency + """% </br>
            Transfer Successes: """ + str(cell[3]) + """ </br>
            Transfer Failures: """ + str(cell[4]) + """  </br>
            </div><br />"""
            # The color depends of the efficiency
            if efficiency < 20:
                color = '#FF0000'
            elif efficiency >= 20 and efficiency < 60:
                color = '#FFFF00'
            elif efficiency >= 60 and efficiency < 80:
                color = '#0033FF'
            else:
                color = '#00CC00'
            # The stroke weight of the line depends of the throughput.
            if speed < 1:
                stroke = 1
            else:
                stroke = 1 + math.log(speed, 2)

            if not 'Destinations' in self.se_sites[site1]:
                self.se_sites[site1]['Destinations'] = {}
            self.se_sites[site1]['Destinations'].update(
                {site2: {'Description': description_text, 'efficiency': efficiency, 'stroke': stroke, \
                         'speed': speed, 'color': color, 'Successful': cell[3], 'Failed': cell[4],
                         'Coordinates': self.se_sites[site2]['Coordinates']}})

    # Finishes the map. Returns {'CEsites':{...},'SEsites':{...},'Global':{...}}
    def push_map(self):
        # Write the sites
        self.js_writer['CEsites'] = self.ce_sites
        self.js_writer['SEsites'] = self.se_sites

        # Write statistics
        global_statistics = {}

        total_speed = 0.0
        total_eff = 0.0
        num_lines = 0
        for sites in [self.se_sites, self.ce_sites]:
            for site in sites:
                if 'Destinations' in sites[site]:
                    num_lines += len(sites[site]['Destinations'].keys())
                    for key in sites[site]['Destinations']:
                        total_speed += sites[site]['Destinations'][key]['speed']
                        total_eff += sites[site]['Destinations'][key]['efficiency']

        global_statistics['Throughput'] = round(total_speed / 1000, 1)
        if num_lines != 0:
            global_statistics['Efficiency'] = round(total_eff / num_lines, 1)
        else:
            global_statistics['Efficiency'] = '-'

        global_statistics['CEsites'] = len(self.ce_sites)
        global_statistics['SEsites'] = len(self.se_sites)

        global_statistics['Connections'] = num_lines
        # Get the date of the update
        now = dt.utcnow().strftime("%Y-%m-%d %H:%M") + ' UTC'

        global_statistics['Updated'] = now
        global_statistics['Accounting_time'] = self.hours
        self.js_writer['Global'] = global_statistics

        return self.js_writer
