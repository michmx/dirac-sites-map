#! /usr/bin/env python

import json, os, urllib2, math, time, pickle, sys
from shutil import copyfile
from datetime import datetime as dt

from pprint import pprint



# Used to export Javascript objects
def js_icon(url, anchorx = 0, anchory = 0, size=40):
    icon = {}
    t = time.strftime("%Y/%m/%d:%H:%M", time.gmtime())
    icon['url'] = url + "?t=" + t
    icon['size'] = size
    icon['anchor'] = [anchorx,anchory]
    return icon

# This encapsulates all the functions to generate Javascript file
class JSgen:
    def __init__(self, path, hours, Dirac_proxy = False):
        self.js_writer = open(path,"w")
        self.ce_sites = {}
        self.se_sites = {}
        self.images_list = []
        self.Dirac_env = Dirac_proxy
        self.hours = hours

        # Images of the SE sites
        if not os.path.exists('./web/images/'):
            os.mkdir('./web/images')
        copyfile('input/db_blue.png','./web/images/db_blue.png')
        copyfile('input/db_yellow.png','./web/images/db_yellow.png')
        copyfile('input/db_red.png','./web/images/db_red.png')
        copyfile('input/db_green.png','./web/images/db_green.png')
        copyfile('input/db_unknown.png','./web/images/db_unknown.png')
        copyfile('input/db_error.png','./web/images/db_error.png')
        copyfile('input/db_66y.png','./web/images/db_66y.png')
        copyfile('input/db_99y.png','./web/images/db_99y.png')
        copyfile('input/db_33y.png','./web/images/db_33y.png')
        copyfile('input/db_0y.png','./web/images/db_0y.png')
        

    # Include a computing element in the map
    def add_ce_site(self, key, ce):
        # Calculate the size of the pie plot based on total jobs
        min_jobs = 1000
        max_jobs = 1000000
        scale = 9.0
        if int(ce['Done']) > max_jobs:
            radius = math.log10(max_jobs)/scale
        elif int(ce['Done']) < min_jobs:
            radius = math.log10(min_jobs)/scale
        else:
            radius = math.log10(float(ce['Done']))/scale

        if not os.path.exists('./web/images/'):
            os.mkdir('./web/images')
        copyfile('input/cloud.png','./web/images/cloud.png')
        self.ce_sites[key] = ce

        self.ce_sites[key]['Radius'] = radius * 70

        jobs_total = int(ce['Done']) + int(ce['Failed'])
        if jobs_total != 0:
            description_text = '<strong>'+ key + '</strong>' + \
            """</br><hr>
            <font style="font-weight: bold">Job Statistics:</font> </br>
            <div style="padding-left: 5px;">Jobs Succeeded: """ + str(ce['Done']) + \
            ' (%.1f' % (int(ce['Done'])/float(jobs_total) *100) + """%) </br>
            Jobs Failed: """ + str(ce['Failed']) + ' (%.1f' % (int(ce['Failed'])/float(jobs_total)*100) + \
            """%) </br>
            (Total: """ + str(jobs_total) + """)<br /><br />
            Jobs Running: """+str(ce['Running'])+ """
            </div><br />     """
        else:
            description_text = '<strong>'+ key + '</strong>' + \
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
        # Obtains SE health info
        def pull_se_health(se_name = ''):
            if not self.Dirac_env:
                #To work for now without Dirac enviroment
                js_se_health = open('input/healty.dat','r')
                se_health = pickle.load(js_se_health)['Value']
                js_se_health.close()

            if se_name in se_health:
                return se_health[se_name]
            else:
                return 0
        # Take the health info of the SE sites
        if not self.Dirac_env:
            health = pull_se_health(key)
            if health != 0:
                se['Health'] = health[0]
                se['Health'].pop('HealthUpdateTime',None)
            else:
                se['Health'] = ''

        if not 'Token' in se:
            se['Token'] = ''

        if 'Health' in se and 'HealthUpdateTime' in se['Health']:
            se['Health'].pop('HealthUpdateTime',None)
        # To avoid duplicate sites (XXX-*-SE)
        included = False
        for se_included in self.se_sites:
            if se['Host'] == self.se_sites[se_included]['Host'] and se['Token'] == self.se_sites[se_included]['Token']:
                included = True
        if not included:
            self.se_sites[key] = se
            self.se_sites[key]['Endpoints'] = [key]

            description_text = '<strong>'+ se['Host'] + '</strong></br><hr>'

            # The color depends of the health
            if not 'Health' in se or se['Health'] == '':
                self.se_sites[key]['Icon'] = js_icon("images/db_unknown.png",35,0)
                description_text += """<strong>Free space: """ + \
                                        'unknown' + " </strong></br><!--abs--></br> "
            else:
                if se['Health']['isHealthy'] != 1:
                    self.se_sites[key]['Icon'] = js_icon("images/db_error.png",35,0)
                    description_text += """<strong>Free space: """ + \
                                              'unknown' + " </strong></br><!--abs--></br> "

                elif se['Health']['GuaranteedSizeBYTE'] == 0:
                    self.se_sites[key]['Icon'] = js_icon("images/db_unknown.png",35,0)
                    description_text += """<strong>Free space: """ + \
                                                        'unknown' + " </strong></br><!--abs--></br> "
                else:
                    free_absolute = se['Health']['UnusedSizeBYTE']
                    size_absolute = se['Health']['GuaranteedSizeBYTE']
                    free_space = free_absolute/float(size_absolute)
                    # In Terabytes
                    free_absolute = free_absolute/1000000000000.0
                    size_absolute = size_absolute/1000000000000.0
                    if free_space > 0.66:
                        self.se_sites[key]['Icon'] = js_icon("images/db_99y.png",35,0)
                    elif free_space <= 0.66 and free_space > 0.33:
                        self.se_sites[key]['Icon'] = js_icon("images/db_66y.png",35,0)
                    elif free_space < 0.33 and free_space > 0.05:
                        self.se_sites[key]['Icon'] = js_icon("images/db_33y.png",35,0)
                    else:
                        self.se_sites[key]['Icon'] = js_icon("images/db_0y.png",35,0)

                    description_text += """<strong>Free space: """ + \
                                        str(format(free_space*100,'.2f')) + "% </strong></br>"
                    description_text += "<strong>("+str(format(free_absolute,'.1f')) + " TB of " +\
                                        str(format(size_absolute,'.1f'))+ " TB)</strong> </br></br>"

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
                            self.se_sites[included]['Icon'] = js_icon("images/db_error.png",35,0)
                        elif se['Health']['GuaranteedSizeBYTE'] != 0:
                            free_absolute = se['Health']['UnusedSizeBYTE']
                            size_absolute = se['Health']['GuaranteedSizeBYTE']
                            free_space = free_absolute/float(size_absolute)
                            # In Terabytes
                            free_absolute = free_absolute/1000000000000.0
                            size_absolute = size_absolute/1000000000000.0

                            if free_space > 0.66:
                                self.se_sites[included]['Icon'] = js_icon("images/db_99y.png",35,0)
                            elif free_space <= 0.66 and free_space > 0.33:
                                self.se_sites[included]['Icon'] = js_icon("images/db_66y.png",35,0)
                            elif free_space < 0.33 and free_space > 0.05:
                                self.se_sites[included]['Icon'] = js_icon("images/db_33y.png",35,0)
                            else:
                                self.se_sites[included]['Icon'] = js_icon("images/db_0y.png",35,0)
                            space = str(format(free_space*100,'.2f')) + "%"
                            space_abs = "<strong>("+str(format(free_absolute,'.1f')) + \
                                        " TB of " + str(format(size_absolute,'.1f'))+ " TB)</strong> </br>"
                            self.se_sites[included]['Description'] = \
                                self.se_sites[included]['Description'].replace('unknown',space)
                            self.se_sites[included]['Description'] = \
                                self.se_sites[included]['Description'].replace('<!--abs-->',space_abs)




    # Pull data from Dashboard JSON file
    def pull_dashboard(self, path, hours = 720):

        minutes = hours * 60
        js_data = urllib2.urlopen(path).read()

        # Testing locally
        #js_data = open('/Users/michmx/Dashboard.js','r').read()
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

            if site1 == "" or site2 == "":
                continue

            #We calculate the speed on kBs
            speed = cell[2]/float(minutes * 60 * 1000)
            efficiency = cell[3] *100 / (cell[3] + cell[4])
            
            description_text = """<strong>Source = """ + self.se_sites[site1]['Host'] + """</br>
            Destination = """ + self.se_sites[site2]['Host'] + """</strong></br><hr>
            <font style="font-weight: bold">Connection info:</font> </br>
            <div style="padding-left: 5px;">Throughput: %0.1f KB/s </br>"""%speed +\
            """Efficiency: %0.0f"""%efficiency +  """% </br>
            Transfer Successes: """ + str(cell[3]) +  """ </br>
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
            elif speed > 1000:
                stroke = 7
            else:
                stroke = 1 + math.log(speed,10)
            
            if not 'Destinations' in self.se_sites[site1]:
                self.se_sites[site1]['Destinations'] = {}
            self.se_sites[site1]['Destinations'].update({site2:{'Description':description_text, 'efficiency':efficiency, 'stroke': stroke, \
                    'speed':speed, 'color':color, 'Successful':cell[3], 'Failed':cell[4], 'Coordinates':self.se_sites[site2]['Coordinates']}})




    # Finishes the Javascript code
    def push_map(self):
        # Write the sites
        self.js_writer.write("\nvar ce_sites = \n" + json.dumps(self.ce_sites,indent = 2))
        self.js_writer.write("\nvar se_sites = \n" + json.dumps(self.se_sites,indent = 2))
        # Write statistics
        global_statistics = {}

        
        total_speed = 0.0
        total_eff = 0.0
        num_lines = 0
        for sites in [self.se_sites,self.ce_sites]:
            for site in sites:
                if 'Destinations' in sites[site]:
                    num_lines += len(sites[site]['Destinations'].keys())
                    for key in sites[site]['Destinations']:
                        total_speed += sites[site]['Destinations'][key]['speed']
                        total_eff += sites[site]['Destinations'][key]['efficiency']

        global_statistics['Throughput'] = round(total_speed/1000,1)
        if num_lines != 0:
            global_statistics['Efficiency'] = round(total_eff/num_lines,1)
        else:
            global_statistics['Efficiency'] = '-'
        
        global_statistics['CEsites'] = len(self.ce_sites)
        global_statistics['SEsites'] = len(self.se_sites)

        global_statistics['Connections'] = num_lines
        # Get the date of the update
        now = dt.utcnow().strftime("%Y-%m-%d %H:%M") + ' UTC'
        if not self.Dirac_env:
            now += '</br></br> Debug mode. No real data.'
        global_statistics['Updated'] = now
        global_statistics['Accounting_time'] = self.hours
        self.js_writer.write("\nvar global_statistics = \n" + json.dumps(global_statistics,indent = 2))
        self.js_writer.close()
