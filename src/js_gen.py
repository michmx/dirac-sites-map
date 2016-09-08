#! /usr/bin/env python

import json, os, urllib2, math, time, pickle, sys
from shutil import copyfile
from datetime import datetime as dt

from pprint import pprint

#To use matplotlib without graphic enviroment
try:
    import matplotlib as mpl
    mpl.use('Agg')
    import matplotlib.pyplot as plt
except ImportError:
    sys.exit("Error: Matplotlib package not found. Please install running 'pip install matplotlib'.")


# #### Functions #### #
# Read the data from CSV file and returns dictionary
def read_coordinates(file):
    data = {}
    csv_file = open(file, "r")
    lines = csv_file.read().split("\n")
    for row in lines:
        if row != "":
            site = row.split(',')
            data[site[0]] = [site[1],site[2]]
    return data


# Draw a pie plot for each CE site
def pie_plot(site, jobs_succeeded, jobs_failed, path = 'content/', dpi = 100, size = (0.5,0.5)):
    if not os.path.exists(path):
            os.mkdir(path)
    labels = 'succeeded', 'failed'
    sizes = [jobs_succeeded, jobs_failed]
    colors = ['#04FB00', 'red']
    plt.figure(figsize=size, dpi=dpi)
    if jobs_failed + jobs_succeeded != 0:
        plt.pie(sizes, colors=colors, startangle=180, radius=0.8)
    else:
        plt.pie([0,100],colors = ['black','white'], startangle = 180,radius = 0.8)
    plt.axis('equal')
    plt.savefig(path + 'pie_' + site + '.png', transparent=True, dpi = dpi, figsize = size)
    plt.close()


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
    def __init__(self, path, Dirac_proxy = False):
        self.js_writer = open(path,"w")
        self.ce_sites = {}
        self.se_sites = {}

        self.images_list = []

        self.lines_list = []
        self.lines_colors = []
        self.lines_description = []
        self.lines_stroke = []
        self.total_speed = 0
        self.total_eff = 0
        self.Dirac_env = Dirac_proxy

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
        
        if os.path.exists('input/health.tmp'):
            os.remove('input/health.tmp')

    # Loads map style
    def init_map(self):
        map_style = []
        map_style.append(dict(featureType = 'all',elementType = 'all', stylers = ['visibility','off']))
        map_style.append(dict(featureType = 'landscape',elementType = 'labels', \
                              stylers = [dict(visibility = 'off'),dict(color = '#fcfcfc')]))
        map_style.append(dict(featureType = 'landscape',elementType = 'geometry', stylers = ['visibility','on']))
        map_style.append(dict(featureType = 'water',elementType = 'labels', stylers = ['visibility','off']))
        map_style.append(dict(featureType = 'water',elementType = 'geometry', \
                              stylers = [dict(visibility = 'on'),dict(hue = '#5f94ff'),dict(lightness = 60)]))
        self.js_writer.write('var mapStyle = \n')
        self.js_writer.write(json.dumps(map_style,indent=2))
        self.js_writer.write(';\n')

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

        #### To remove
        pie_plot(key, int(ce['Done']), int(ce['Failed']), 'web/images/', size=(radius, radius))
        if 'CLOUD' in key:
            self.images_list.append(js_icon("images/cloud.png",0,0))
        else:
            self.images_list.append(js_icon("images/pie_" + key + ".png",0,0,radius*100))
        ####

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
        # Take the health info of the SE sites
        if not self.Dirac_env:
            health = self.pull_se_health(key)
            if health != 0:
                se['Health'] = health[0]
                se['Health'].pop('HealthUpdateTime',None)
            else:
                se['Health'] = ''

        if not 'Token' in se:
            se['Token'] = ''

        # To avoid duplicate sites (XXX-*-SE)
        included = False
        for se_included in self.se_sites:
            if se['Host'] == self.se_sites[se_included]['Host'] and se['Token'] == self.se_sites[se_included]['Token']:
                included = True
        if not included:
            self.se_sites[key] = se

            description_text = '<strong>'+ se['Host'] + '</strong></br><hr>'

            # The color depends of the health
            if se['Health'] == '':
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
                    self.se_sites[included]['Description'] += """----- </br>
                    <div style="padding-left: 5px;">Endpoint: """ + key + """ </br>
                    Path: """ + se['Path'] + "</br>"
                    if se['Token'] != '':
                        self.se_sites[included]['Description'] += "SpaceToken: " + se.token + "</br>"
                    self.se_sites[included]['Description'] += "</div>"

                    # The color depends of the health
                    if se['Health'] != '':
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





    # Draw a line on the map
    def draw_line(self, se1, se2, color='#FF0000',strokeWeight = 3):
        line_coordinates = []
        line_coordinates.append(dict(lat = float(se1.coordinates[1]), lng = float(se1.coordinates[0])))
        line_coordinates.append(dict(lat = float(se2.coordinates[1]), lng = float(se2.coordinates[0])))
        self.lines_list.append(line_coordinates)
        self.lines_colors.append(color)
        self.lines_stroke.append(strokeWeight)


    # Pull data from Dashboard JSON file
    def pull_dashboard(self, path, hours=720):
        se1 = SE_site()
        se2 = SE_site()

        js_data = urllib2.urlopen(path).read()
        # Testing locally
        #js_data = open('/Users/michmx/Dashboard.js','r').read()

        dashboard = json.loads(js_data)
        # For now, we only need the data transfer info
        data_matrix = dashboard['transfers']['rows']
        # Search the pair of SE elements
        for cell in data_matrix:
            for se in self.se_sites:
                if se.host[0] == cell[0]:
                    se1 = se;
            for se in self.se_sites:
                if se.host[0] == cell[1]:
                    se2 = se;
            #We calculate the speed on kBs
            speed = cell[2]/float(hours * 60 * 1000)
            self.total_speed += speed
            efficiency = cell[3] *100 / (cell[3] + cell[4])
            self.total_eff += efficiency

            description_text = """<strong>Source = """ + se1.host[0] + """</br>
            Destination = """ + se2.host[0] + """</strong></br><hr>
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
                self.draw_line(se1, se2, color, 1)
            else:
                self.draw_line(se1, se2, color, 1 + math.log(speed,2))

            self.lines_description.append(description_text)


    # Obtains SE health info
    def pull_se_health(self, se_name = ''):
        if not self.Dirac_env:
            #To work for now without Dirac enviroment
            js_se_health = open('input/healty.dat','r')
            se_health = pickle.load(js_se_health)['Value']
            js_se_health.close()

        if se_name in se_health:
            return se_health[se_name]
        else:
            return 0

    # Finishes the Javascript code
    def close(self):
        # Write the sites
        self.js_writer.write("\nvar ce_sites = \n" + json.dumps(self.ce_sites,indent = 2))

        self.js_writer.write("\nvar se_sites = \n" + json.dumps(self.se_sites,indent = 2))

        #self.js_writer.write("\nvar se_contentString = \n" + json.dumps(self.se_description_list,indent = 2))
        self.js_writer.write("\n\nvar images = \n" + json.dumps(self.images_list,indent = 2))
        #self.js_writer.write("\n\nvar images_se = \n" + json.dumps(self.se_images_list,indent = 2).replace('"',''))
        # Write the lines
        #self.js_writer.write("\n\nvar lineCoordinates = \n" + \
        #                     json.dumps(self.lines_list,indent = 2).replace('"',''))
        #self.js_writer.write("\nvar linesColors = \n" + json.dumps(self.lines_colors,indent = 2))
        #self.js_writer.write("\nvar linesDescription = \n" + json.dumps(self.lines_description,indent = 2))
        #self.js_writer.write("\nvar linesStroke = \n" + json.dumps(self.lines_stroke,indent = 2))
        # Write statistics
        global_statistics = []
        global_statistics.append(round(self.total_speed/1000,1))
        if len(self.lines_list) != 0:
            global_statistics.append(round(self.total_eff/len(self.lines_list),1))
        else:
            global_statistics.append('-')
        global_statistics.append(len(self.ce_sites))
        global_statistics.append(len(self.se_sites))
        global_statistics.append(len(self.lines_list))
        # Get the date of the update
        now = dt.utcnow().strftime("%Y-%m-%d %H:%M") + ' UTC'
        if not self.Dirac_env:
            now += '</br></br> Debug mode. No real data.'
        global_statistics.append(now)
        self.js_writer.write("\nvar global_statistics = \n" + json.dumps(global_statistics,indent = 2))
        self.js_writer.close()
        if os.path.exists('input/health.tmp'):
            os.remove('input/health.tmp')
