#! /usr/bin/env python

import matplotlib.pyplot as plt
from lxml import etree

import json

class SE_site:
    def __init__(self, se_name = 'SE'):
        self.read = ''
        self.write = ''
        self.path = ''
        self.name = se_name
        self.endpoint = ['', '']
        self.coordinates = [0,0]

    def print_info(self):
        print "Name: " + self.name
        print "Path: " + self.path
        print "Endpoint: " + self.endpoint[0] + " : " + self.endpoint[1]
        print "Read/Write: " + self.read + "/" + self.write
        print "Coordinates: " + str(self.coordinates[0]) + "," + str(self.coordinates[1])


# #### Functions #### #

# Draw a pie plot for each site
def pie_plot(site, jobs_succeeded, jobs_failed):
    labels = 'succeeded', 'failed'
    sizes = [jobs_succeeded, jobs_failed]
    colors = ['#04FB00', 'red']
    plt.figure(figsize=(0.5, 0.5), dpi=100)
    if jobs_failed + jobs_succeeded != 0:
        plt.pie(sizes, colors=colors, startangle=180, radius=0.8)
    else:
        plt.pie([0,100],colors = ['black','white'], startangle = 180,radius = 0.8)
    plt.axis('equal')
    plt.savefig('content/pie_' + site + '.png', transparent=True, dpi = 100, figsize = (0.5,0.5))
    plt.close()


# Read the data from CSV file
def read_data(file,split):
    data = []
    csv_file = open(file, "r")
    line = csv_file.read().split("\n")
    for row in line:
        if row != "":
            data.append(row.split(split))
    return data


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
def add_ce_site(name, coor1, coor2, jobs_succeeded = 0, jobs_failed = 0):
    kml_element = etree.Element('Placemark')
    site_name = etree.Element('name')
    site_name.text = name
    kml_element.append(site_name)
    # Icon
    site_icon = etree.Element('styleUrl')
    site_icon.text = '#' + name + '_style'
    kml_element.append(site_icon)
    # Coordinates
    site_point = etree.Element('Point')
    etree.SubElement(site_point,'coordinates').text = str(coor1) + "," + str(coor2)
    kml_element.append(site_point)
    # View
    site_view = etree.Element('LookAt')
    etree.SubElement(site_view,'tilt').text = str(20)
    etree.SubElement(site_view,'altitude').text = str(0)
    etree.SubElement(site_view,'longitude').text = str(coor1)
    etree.SubElement(site_view,'range').text = str(1000)
    etree.SubElement(site_view,'latitude').text = str(coor2)
    etree.SubElement(site_view,'heading').text = str(0)
    kml_element.append(site_view)
    # Description
    jobs_total = jobs_succeeded + jobs_failed
    kml_description = etree.Element('description')
    if jobs_total != 0:
        description_text = """
            <font style="font-weight: bold">Job Statistics:</font> </br>
            <div style="padding-left: 5px;">Jobs Succeeded: """ + str(jobs_succeeded) + \
            ' (%.1f' % (jobs_succeeded/float(jobs_total) *100) + """%) </br>
            Jobs Failed: """ + str(jobs_failed) + ' (%.1f' % (jobs_failed/float(jobs_total)*100) + \
            """%) </br>
            (Total: """ + str(jobs_total) + """)<br />
            </div><br />
        """
    else:
        description_text = """
            <font style="font-weight: bold">Job Statistics:</font> </br>
            <div style="padding-left: 5px;">Jobs Succeeded: """ + str(jobs_succeeded) + \
            """ (- %) </br>
            Jobs Failed: """ + str(jobs_failed) + """ (- %) </br>
            (Total:""" + str(jobs_total) + """)<br />
            </div><br />
        """
    kml_description.text = (etree.CDATA(description_text))
    kml_element.append(kml_description)
    return kml_element

# Add a Storage Element placemark in the map
def add_se_site(storage_site):
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

# Pull the information of SE sites from the gb2_list_se output
def read_se_sites(file_path):
    se_site = []
    data = []
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
                se.coordinates[0] = line[1]
                se.coordinates[1] = line[2]
        if not coincidence:
            print "[WARNING]: No location info for " + se.name

    return se_site


