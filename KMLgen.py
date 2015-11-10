#! /usr/bin/env python

import csv
from lxml import etree, html
import matplotlib.pyplot as plt


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
    plt.savefig('output/pie_' + site + '.png', transparent=True, dpi = 100, figsize = (0.5,0.5))



# KML file
kml_file = etree.Element('kml')
kml_document = etree.Element('Document')
kml_file.append(kml_document)


# Read the data from CSV file
def read_csv(file):
    data = []
    csv_file = open(file, "r")
    line = csv_file.read().split("\n")
    for row in line:
        if row != "":
            data.append(row.split(","))
    return data


# Add a style to the KML file
def add_kml_style(name):
    id_text = name + '_style'
    kml_style = etree.Element('Style', id=id_text)
    icon_style = etree.Element('IconStyle')
    etree.SubElement(icon_style,'scale').text = str(1.3)
    etree.SubElement(etree.SubElement(icon_style,'Icon'),'href').text =  \
                            'pie_' + name + '.png'
    #                        'http://jaguar.fis.cinvestav.mx/testing/gridmap/images/' + \
    #                        'pie_' + name + '.png'
    kml_style.append(icon_style)
    return kml_style

# Add a Placemark site in the map
def add_kml_site(name, coor1, coor2, jobs_succeeded = 0, jobs_failed = 0):
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

# Write the KML file
data_sites = read_csv("sites.csv")

#Include the styles
i = 0
for line in data_sites:
    if i != 0:
        kml_document.append(add_kml_style(data_sites[i][0]))
        pie_plot(data_sites[i][0], int(data_sites[i][3]), int(data_sites[i][4]))
    i += 1

# Include the sites
i = 0
for line in data_sites:
    if i != 0:
        kml_document.append(add_kml_site(data_sites[i][0],data_sites[i][1],data_sites[i][2], \
                            int(data_sites[i][3]),int(data_sites[i][4])))
        pie_plot(data_sites[i][0], int(data_sites[i][3]), int(data_sites[i][4]))
    i += 1
kml_gen = open("output/KMLGen.kml","w")
kml_gen.write(etree.tostring(kml_file, doctype='<?xml version="1.0" encoding="UTF-8"?>', pretty_print=True))
kml_gen.close()
print "KML File generated"

