#! /usr/bin/env python

import matplotlib.pyplot as plt
import json, os, urllib2, math, time, pickle
from shutil import copyfile
from datetime import datetime

try:
    from dirac_script.health_sites import *
    Dirac_env = True
except ImportError:
    print "Dirac enviroment not ready. Reading SE health from file."
    Dirac_env = False


class CE_site:
    def __init__(self, se_name = 'CE'):
        self.name = se_name
        self.jobs_done = 0
        self.jobs_failed = 0
        self.jobs_running = 0
        self.jobs_waiting = 0
        self.jobs_stalled = 0
        self.coordinates = [0,0]

    def print_info(self):
        print "Name: " + self.name
        print "Jobs_succeeded: " + str(self.jobs_done)
        print "Jobs_failed: " + str(self.jobs_failed)
        print "Coordinates: " + str(self.coordinates[0]) + "," + str(self.coordinates[1])

class SE_site:
    def __init__(self, ce_name = 'SE'):
        self.read = ''
        self.write = ''
        self.host = ''
        self.name = ce_name
        self.endpoint = ['', '']
        self.coordinates = [0,0]
        self.health = ''

    def print_info(self):
        print "Name: " + self.name
        print "Host: " + self.host
        print "Endpoint: " + self.endpoint[0] + " : " + self.endpoint[1]
        print "Read/Write: " + self.read + "/" + self.write
        print "Coordinates: " + str(self.coordinates[0]) + "," + str(self.coordinates[1])

# #### Functions #### #

# Pull the information of SE sites from the gb2_list_se output
def read_gb2_list_se(file_path):
    se_site = []
    data_file = []
    se_file = open(file_path, 'r')
    line = se_file.read().split("\n")
    for row in line:
        if row != "":
            data_file.append(row.split(':'))
    # Organize the information
    counter = 0.
    aux = -1
    for i in range(0, len(data_file)):
        for j in range(0, len(data_file[i])):
            if counter%10. == 0:
                aux += 1
                se_site.append(SE_site(data_file[i][j].strip()))
            if counter%10. == 2:
                se_site[aux].endpoint[0] = data_file[i][j].strip()
            if counter%10. == 3:
                se_site[aux].endpoint[1] = data_file[i][j].strip()
            if counter%10. == 5:
                se_site[aux].host = data_file[i][j].strip()
            if counter%10. == 7:
                se_site[aux].read = data_file[i][j].strip()
            if counter%10. == 9:
                se_site[aux].write = data_file[i][j].strip()
            counter += 1

    # Add coordinates
    data_site = read_data("input/sites.csv", split = ',')
    for se in se_site:
        coincidence = False
        for line in data_site:
            if line[0] in se.name:
                coincidence = True
                se.coordinates[0] = line[1]
                se.coordinates[1] = line[2]
        if not coincidence:
            print "[WARNING]: No location info for " + se.name
    return se_site


# Pull the information of CE sites from the gb2_site_summary output (to use without DIRAC enviroment)
def read_gb2_site_summary(file_path):
    ce_site = []
    data_file = []
    se_file = open(file_path, 'r')
    line = se_file.read().split("\n")
    for row in line:
        if row != "":
            data_file.append(filter(None,row.split(' ')))
    data_file.pop(0)
    data_file.pop()
    data_file.pop()
    for cell in data_file:
        ce = CE_site(cell[0])
        ce.jobs_done = cell[1]
        ce.jobs_failed = cell[2]
        ce.jobs_running = cell[3]
        ce.jobs_stalled = cell[4]
        ce.jobs_waiting = cell[5]
        ce_site.append(ce)

    # Add coordinates
    data_site = read_data("input/sites.csv", split = ',')
    for ce in ce_site:
        coincidence = False
        for line in data_site:
            if line[0] in ce.name:
                coincidence = True
                ce.coordinates[0] = line[1]
                ce.coordinates[1] = line[2]
        if not coincidence:
            print "[WARNING]: No location info for " + ce.name
    return ce_site


# Read the data from CSV file
def read_data(file,split):
    data = []
    csv_file = open(file, "r")
    line = csv_file.read().split("\n")
    for row in line:
        if row != "":
            data.append(row.split(split))
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
class js_image:
    def __init__(self, url, anchorx = 0, anchory = 0, size=40):
        t = time.strftime("%Y/%m/%d:%H:%M", time.gmtime())
        self.url = "'" + url + "?t="+ t + "'"
        self.size = 'new google.maps.Size('+str(size)+', '+str(size)+')'
        self.origin = 'new google.maps.Point(0,0)'
        self.anchor = 'new google.maps.Point('+str(anchorx)+', '+str(anchory)+')'


# This encapsulates all the functions to generate Javascript file
class JSgen:
    def __init__(self, path):
        self.js_writer = open(path,"w")
        self.function_list = []
        self.ce_list = []
        self.se_active = []
        self.se_list = []
        self.images_list = []
        self.se_images_list = []
        self.ce_description_list = []
        self.se_description_list = []
        self.lines_list = []
        self.lines_colors = []
        self.lines_description = []
        self.lines_stroke = []
        self.total_speed = 0
        self.total_eff = 0
        self.Dirac_env = Dirac_env
        
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
        js_file = json.dumps(map_style,indent=2)
        self.js_writer.write(js_file)
        self.js_writer.write(';\n')

    # Include a computing element in the map
    def add_ce_site(self, ce):
        # Calculate the size of the pie plot based on total jobs
        min_jobs = 1000
        max_jobs = 1000000
        scale = 9.0
        if int(ce.jobs_done) > max_jobs:
            radius = math.log10(max_jobs)/scale
        elif int(ce.jobs_done) < min_jobs:
            radius = math.log10(min_jobs)/scale
        else:
            radius = math.log10(float(ce.jobs_done))/scale

        if not os.path.exists('./web/images/'):
            os.mkdir('./web/images')
        copyfile('input/cloud.png','./web/images/cloud.png')
        self.ce_list.append([ce.name, float(ce.coordinates[1]),float(ce.coordinates[0])])
        pie_plot(ce.name, int(ce.jobs_done), int(ce.jobs_failed), 'web/images/', size=(radius, radius))
        if 'CLOUD' in ce.name:
            self.images_list.append(js_image("images/cloud.png",0,0).__dict__)
        else:
            self.images_list.append(js_image("images/pie_" + ce.name + ".png",0,0,radius*100).__dict__)
        jobs_total = int(ce.jobs_done) + int(ce.jobs_failed)
        if jobs_total != 0:
            description_text = '<strong>'+ ce.name + '</strong>' + \
            """</br><hr>
            <font style="font-weight: bold">Job Statistics:</font> </br>
            <div style="padding-left: 5px;">Jobs Succeeded: """ + str(ce.jobs_done) + \
            ' (%.1f' % (int(ce.jobs_done)/float(jobs_total) *100) + """%) </br>
            Jobs Failed: """ + str(ce.jobs_failed) + ' (%.1f' % (int(ce.jobs_failed)/float(jobs_total)*100) + \
            """%) </br>
            (Total: """ + str(jobs_total) + """)<br /><br />
            Jobs Running: """+str(ce.jobs_running)+ """
            </div><br />     """
        else:
            description_text = '<strong>'+ ce.name + '</strong>' + \
            """</br><hr>
            <font style="font-weight: bold">Job Statistics:</font> </br>
            <div style="padding-left: 5px;">Jobs Succeeded: """ + str(ce.jobs_done) + \
            """ (- %) </br>
            Jobs Failed: """ + str(ce.jobs_failed) + """ (- %) </br>
            (Total:""" + str(jobs_total) + """)<br />
            </div><br />
            """
        self.ce_description_list.append(description_text)


    # Include a computing element in the map
    def add_se_site(self, se):
        # Take the health info of the SE sites
        health = self.pull_se_health(se.name.replace('DATA','TMP'))
        if health != 0:
            se.health = health

        self.se_active.append(se)

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

        # To avoid duplicate sites (XXX-*-SE)
        included = False
        for se_included in self.se_list:
            if se.name.split('-')[0] in se_included[0]:
                included = True
        if not included:
            self.se_list.append([se.name, float(se.coordinates[1]),float(se.coordinates[0])])
            description_text = '<strong>'+ se.name + '</strong>' + \
            """</br><hr><font style="font-weight: bold">SE info:</font> </br>
            <div style="padding-left: 5px;">Host: """ + se.host + """ </br>
            Endpoint: """ + se.endpoint[0] + """ </br>
            </div><br />
            """
            # The color depends of the health
            if se.health == '':
                self.se_images_list.append(js_image("images/db_unknown.png",35,0).__dict__)
                description_text += """</br><div style="padding-left: 5px;">Free space: """ + \
                                        'unknown' + " </div>"
            else:
                if se.health['isHealthy'] != 1:
                    self.se_images_list.append(js_image("images/db_error.png",35,0).__dict__)

                else:
                    free_space = se.health['UnusedSizeBYTE']/float(se.health['GuaranteedSizeBYTE'])
                    if free_space > 0.66:
                        self.se_images_list.append(js_image("images/db_99y.png",35,0).__dict__)
                    elif free_space <= 0.66 and free_space > 0.33:
                        self.se_images_list.append(js_image("images/db_66y.png",35,0).__dict__)
                    elif free_space < 0.33 and free_space > 0.05:
                        self.se_images_list.append(js_image("images/db_33y.png",35,0).__dict__)
                    else:
                        self.se_images_list.append(js_image("images/db_0y.png",35,0).__dict__)
                    description_text += """</br><div style="padding-left: 5px;">Free space: """ + \
                                        str(format(free_space*100,'.2f')) + "% </div>"

            self.se_description_list.append(description_text)

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
            for se in self.se_active:
                if se.endpoint[0] == cell[0]:
                    se1 = se;
            for se in self.se_active:
                if se.endpoint[0] == cell[1]:
                    se2 = se;
            #We calculate the speed on kBs
            speed = cell[2]/float(hours * 60 * 1000)
            self.total_speed += speed
            efficiency = cell[3] *100 / (cell[3] + cell[4])
            self.total_eff += efficiency

            description_text = """<strong>Source = """ + se1.name + """</br>
            Destination = """ + se2.name + """</strong></br><hr>
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
        if self.Dirac_env:
            if not os.path.exists('input/health.tmp'):
                result = get_health()
                file_name = 'input/health.tmp'
                file_obj = open(file_name,'wb')
                pickle.dump(result,file_obj)
                file_obj.close()
                se_health = result
            else:
                js_se_health = open('input/health.tmp','r')
                se_health = pickle.load(js_se_health)['Value']
                js_se_health.close()
        else:
            #To work for now without Dirac enviroment
            js_se_health = open('input/healty.dat','r')
            se_health = pickle.load(js_se_health)['Value']
            js_se_health.close()

        if se_name in se_health:
            return se_health[se_name][0]
        else:
            return 0

    # Finishes the Javascript code
    def close(self):
        # Write the sites
        self.js_writer.write("\nvar ce_sites = \n" + json.dumps(self.ce_list,indent = 2))
        self.js_writer.write("\nvar se_sites = \n" + json.dumps(self.se_list,indent = 2))
        self.js_writer.write("\nvar contentString = \n" + json.dumps(self.ce_description_list,indent = 2))
        self.js_writer.write("\nvar se_contentString = \n" + json.dumps(self.se_description_list,indent = 2))
        self.js_writer.write("\n\nvar images = \n" + json.dumps(self.images_list,indent = 2).replace('"',''))
        self.js_writer.write("\n\nvar images_se = \n" + json.dumps(self.se_images_list,indent = 2).replace('"',''))
        # Write the lines
        self.js_writer.write("\n\nvar lineCoordinates = \n" + \
                             json.dumps(self.lines_list,indent = 2).replace('"',''))
        self.js_writer.write("\nvar linesColors = \n" + json.dumps(self.lines_colors,indent = 2))
        self.js_writer.write("\nvar linesDescription = \n" + json.dumps(self.lines_description,indent = 2))
        self.js_writer.write("\nvar linesStroke = \n" + json.dumps(self.lines_stroke,indent = 2))
        # Write statistics
        global_statistics = []
        global_statistics.append(round(self.total_speed/1000,1))
        if len(self.lines_list) != 0:
            global_statistics.append(round(self.total_eff/len(self.lines_list),1))
        else:
            global_statistics.append('-')
        global_statistics.append(len(self.ce_list))
        global_statistics.append(len(self.se_list))
        global_statistics.append(len(self.lines_list))
        # Get the date of the update
        now = datetime.utcnow().strftime("%Y-%m-%d %H:%M")
        global_statistics.append(now+' UTC')
        self.js_writer.write("\nvar global_statistics = \n" + json.dumps(global_statistics,indent = 2))
        self.js_writer.close()
        if os.path.exists('input/health.tmp'):
            os.remove('input/health.tmp')









