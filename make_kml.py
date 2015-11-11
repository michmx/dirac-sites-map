#! /usr/bin/env python

from kml_gen import *
from lxml import etree
from shutil import copyfile
import os, zipfile


# Read the location of the sites
data_coordinates = read_data("input/sites.csv", split = ',')

# KML structure
kml_file = etree.Element('kml')
kml_document = etree.Element('Document')
kml_file.append(kml_document)

# The 'content' directory will contain the kml and png files
if not os.path.exists('./content/'):
    os.mkdir('./content')
    print "'content' directory created."

# Pull the CE sites summary
data_summary = read_data("info/site-summary.csv", split = ',')

# Pull the SE sites summary
se_sites = read_se_sites('info/gb2_list_se.txt')

# Include the styles
copyfile('./input/db_blue.png','./content/db_blue.png')
for line in data_summary:
    if line[0] != 'Site':
        kml_document.append(add_ce_kml_style(line[0]))
for se in se_sites:
    kml_document.append(add_se_kml_style(se.name))

# Include the CE sites
i = 0
for line in data_summary:
    j = 0; coincidence = False
    if i != 0:
        # Verify that the name in data_site and data_summary coincides
        for place in data_coordinates:
            if data_coordinates[j][0] in data_summary[i][0]:
                coincidence = True
                kml_document.append(add_ce_site(data_summary[i][0],data_coordinates[j][1],data_coordinates[j][2], \
                                    int(data_summary[i][1]),int(data_summary[i][2])))
                pie_plot(data_summary[i][0], int(data_summary[i][1]), int(data_summary[i][2]))
            j += 1
        if not coincidence:
            print "[WARNING] No location info for " + data_summary[i][0]
    i += 1

# Include the SE sites
for se in se_sites:
    kml_document.append(add_se_site(se))

kml_writer = open("content/KMLGen.kml","w")
kml_writer.write(etree.tostring(kml_file, doctype='<?xml version="1.0" encoding="UTF-8"?>', pretty_print=True))
kml_writer.close()
print "KML File generated"

# Make kmz file
print "Generating KMZ file..."
if not os.path.exists('./output/'):
    os.mkdir('./output')
    print "'output' directory created."
zp = zipfile.ZipFile('output/GridMap.kmz','w')
os.chdir("content")
for file in os.listdir("."):
    zp.write(os.path.join(file))
zp.close()
print "KMZ file generated."
