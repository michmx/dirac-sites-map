#! /usr/bin/env python

import matplotlib.pyplot as plt
from lxml import etree
import json, urllib2, math
import os

# Global
se_active = []

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
        self.path = ''
        self.name = ce_name
        self.endpoint = ['', '']
        self.coordinates = [0,0]

    def print_info(self):
        print "Name: " + self.name
        print "Path: " + self.path
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
                se_site[aux].path = data_file[i][j].strip()
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
                se.coordinates[0] = float(line[1])
                se.coordinates[1] = float(line[2])
        if not coincidence:
            print "[WARNING]: No location info for " + se.name
    return se_site


# Pull the information of CE sites from the gb2_site_summary output
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
                ce.coordinates[0] = float(line[1])
                ce.coordinates[1] = float(line[2])
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
def pie_plot(site, path='content/'):
    if not os.path.exists(path):
            os.mkdir(path)
    labels = 'succeeded', 'failed'
    sizes = [site.jobs_done, site.jobs_failed]
    colors = ['#04FB00', 'red']
    # Calculate the size of the pie plot based on running jobs
    dpi=100
    min_jobs = 50
    max_jobs = 5000
    scale = 5.0
    if int(site.jobs_running) > max_jobs:
        radius = math.log10(5000)/scale
    elif int(site.jobs_running) < min_jobs:
        radius = math.log10(50)/scale
    else:
        radius = math.log10(float(site.jobs_running))/scale
    plt.figure(figsize=(radius,radius), dpi=dpi)
    if site.jobs_failed + site.jobs_done != 0:
        plt.pie(sizes, colors=colors, startangle=180, radius=radius)
    else:
        plt.pie([0,100],colors = ['black','white'], startangle = 180,radius = radius)
    plt.axis('equal')
    plt.savefig(path + 'pie_' + site.name + '.png', transparent=True, dpi = dpi, figsize = (radius,radius))
    plt.close()



# Add a style for Computing Element to the KML file
def add_ce_kml_style(name):
    id_text = name + '_style'
    kml_style = etree.Element('Style', id=id_text)
    icon_style = etree.Element('IconStyle')
    etree.SubElement(icon_style,'scale').text = str(1.3)
    etree.SubElement(etree.SubElement(icon_style,'Icon'),'href').text =  \
                            'pie_' + name + '.png'
    kml_style.append(icon_style)
    return kml_style


# Add a style for Storage Element to the KML file
def add_se_kml_style(name):
    id_text = name + '_style'
    kml_style = etree.Element('Style', id=id_text)
    icon_style = etree.Element('IconStyle')
    etree.SubElement(icon_style,'scale').text = str(1.3)
    etree.SubElement(etree.SubElement(icon_style,'Icon'),'href').text =  \
                            'db_blue.png'
    kml_style.append(icon_style)
    return kml_style

# Add a Computing Element placemark in the map
def add_ce_site(ce_site):
    kml_element = etree.Element('Placemark')
    site_name = etree.Element('name')
    site_name.text = ce_site.name
    kml_element.append(site_name)
    # Icon
    site_icon = etree.Element('styleUrl')
    site_icon.text = '#' + ce_site.name + '_style'
    kml_element.append(site_icon)
    # Coordinates
    site_point = etree.Element('Point')
    etree.SubElement(site_point,'coordinates').text = str(ce_site.coordinates[0]) + \
                                                      "," + str(ce_site.coordinates[1])
    kml_element.append(site_point)
    # View
    site_view = etree.Element('LookAt')
    etree.SubElement(site_view,'tilt').text = str(20)
    etree.SubElement(site_view,'altitude').text = str(0)
    etree.SubElement(site_view,'longitude').text = str(ce_site.coordinates[0])
    etree.SubElement(site_view,'range').text = str(1000)
    etree.SubElement(site_view,'latitude').text = str(ce_site.coordinates[1])
    etree.SubElement(site_view,'heading').text = str(0)
    kml_element.append(site_view)
    # Description
    jobs_total = int(ce_site.jobs_done) + int(ce_site.jobs_failed)
    kml_description = etree.Element('description')
    if jobs_total != 0:
        description_text = """
            <font style="font-weight: bold">Job Statistics:</font> </br>
            <div style="padding-left: 5px;">Jobs Succeeded: """ + str(ce_site.jobs_done) + \
            ' (%.1f' % (int(ce_site.jobs_done)/float(jobs_total) *100) + """%) </br>
            Jobs Failed: """ + str(ce_site.jobs_failed) + ' (%.1f' % (int(ce_site.jobs_failed)/float(jobs_total)*100) + \
            """%) </br>
            (Total: """ + str(jobs_total) + """)<br />
            </div><br />     """
    else:
        description_text = """
            <font style="font-weight: bold">Job Statistics:</font> </br>
            <div style="padding-left: 5px;">Jobs Succeeded: """ + str(ce_site.jobs_done) + \
            """ (- %) </br>
            Jobs Failed: """ + str(ce_site.jobs_failed) + """ (- %) </br>
            (Total:""" + str(jobs_total) + """)<br />
            </div><br />
        """
    kml_description.text = (etree.CDATA(description_text))
    kml_element.append(kml_description)
    return kml_element

# Add a Storage Element placemark in the map
def add_se_site(storage_site):
    se_active.append(storage_site)
    kml_element = etree.Element('Placemark')
    site_name = etree.Element('name')
    site_name.text = storage_site.name
    kml_element.append(site_name)
    # Icon
    site_icon = etree.Element('styleUrl')
    site_icon.text = '#' + storage_site.name + '_style'
    kml_element.append(site_icon)
    # Coordinates
    site_point = etree.Element('Point')
    etree.SubElement(site_point,'coordinates').text = str(storage_site.coordinates[0]) + "," + \
                                                      str(storage_site.coordinates[1])
    kml_element.append(site_point)
    # View
    site_view = etree.Element('LookAt')
    etree.SubElement(site_view,'tilt').text = str(20)
    etree.SubElement(site_view,'altitude').text = str(0)
    etree.SubElement(site_view,'longitude').text = str(storage_site.coordinates[0])
    etree.SubElement(site_view,'range').text = str(1000)
    etree.SubElement(site_view,'latitude').text = str(storage_site.coordinates[1])
    etree.SubElement(site_view,'heading').text = str(0)
    kml_element.append(site_view)
    # Description
    kml_description = etree.Element('description')
    description_text = """
        <font style="font-weight: bold">SE info:</font> </br>
        <div style="padding-left: 5px;">Path: """ + storage_site.path + """ </br>
        Endpoint: """ + storage_site.endpoint[0] + """ </br>
        </div><br />
    """
    kml_description.text = (etree.CDATA(description_text))
    kml_element.append(kml_description)
    return kml_element


# Add a style for line in the KML file
def add_line_kml_style(se1, se2):
    id_text = se1.name + se2.name + '_style'
    kml_style = etree.Element('Style', id=id_text)
    icon_style = etree.Element('IconStyle')
    etree.SubElement(icon_style,'scale').text = str(1.3)
    etree.SubElement(etree.SubElement(icon_style,'Icon'),'href').text =  \
                            'db_blue.png'
    kml_style.append(icon_style)
    return kml_style


# Add a connection line
def draw_kml_line(se1, se2, color = '#ff0000', description_text = ''):
    kml_element = etree.Element('Placemark')
    # title
    line_name = etree.Element('name')
    line_name.text = se1.name + ' - ' + se2.name
    kml_element.append(line_name)
    # color
    style = etree.Element('Style')
    line_style = etree.Element('LineStyle')
    etree.SubElement(line_style,'color').text = color
    style.append(line_style)
    kml_element.append(style)
    # Coordinates
    line_string = etree.Element('LineString')
    etree.SubElement(line_string,'tessellate').text = str(1)
    coordinates = etree.Element('coordinates')
    coordinates.text = str(se1.coordinates[0]) + ',' + str(se1.coordinates[1]) + ',0 '
    coordinates.text += str(se2.coordinates[0]) + ',' + str(se2.coordinates[1]) + ',0'
    line_string.append(coordinates)
    kml_element.append(line_string)
    kml_description = etree.Element('description')
    kml_description.text = (etree.CDATA(description_text))
    kml_element.append(kml_description)
    return kml_element

# Return a kml_elements list to include on the kml file
def pull_dashboard(path, hours=720):
    kml_elements = []
    se1 = SE_site()
    se2 = SE_site()
    js_data = urllib2.urlopen(path).read()
    dashboard = json.loads(js_data)
    # For now, we only need the data transfer info
    data_matrix = dashboard['transfers']['rows']
    # Search the pair of SE elements
    for cell in data_matrix:
        for se in se_active:
            if se.endpoint[0] == cell[0]:
                se1 = se;
        for se in se_active:
            if se.endpoint[0] == cell[1]:
                se2 = se;
        #We calculate the speed on kBs
        speed = cell[2]/float(hours * 60 * 60 * 1000)
        efficiency = cell[3] *100 / (cell[3] + cell[4])

        description_text = """<strong>Source = """ + se1.name + """</br>
        Destination = """ + se2.name + """</strong></br><hr>
        <font style="font-weight: bold">Connection info:</font> </br>
        <div style="padding-left: 5px;">Throughput: %0.1f KB/s </br>"""%speed +\
        """Efficiency: %0.0f"""%efficiency +  """% </br>
        Transfer Successes: """ + str(cell[3]) +  """ </br>
        Transfer Failures: """ + str(cell[4]) + """  </br>
        </div><br />"""
        if efficiency < 20:
            color = 'ffff0000'
        elif efficiency >= 20 and efficiency < 60:
            color = 'ffffff00'
        elif efficiency >= 60 and efficiency < 80:
            color = 'ff0033ff'
        else:
            color = 'ff00cc00'
        kml_elements.append(draw_kml_line(se1, se2, color, description_text))
    return kml_elements


