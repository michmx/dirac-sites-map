#! /usr/bin/env python

from kml_gen import *
from lxml import etree
from shutil import copyfile
import os, zipfile


# Read the location of the sites
data_coordinates = read_data("input/sites.csv", split=',')

# KML structure
kml_file = etree.Element('kml')
kml_document = etree.Element('Document')
kml_file.append(kml_document)

# The 'content' directory will contain the kml and png files
if not os.path.exists('./content/'):
    os.mkdir('./content')
    print "'content' directory created."

# Pull the CE sites summary
ce_sites = read_gb2_site_summary('info/gb2_site_summary.txt')

# Pull the SE sites summary
se_sites = read_gb2_list_se('info/gb2_list_se.txt')

# Include the styles
copyfile('./input/db_blue.png','./content/db_blue.png')
for ce in ce_sites:
    kml_document.append(add_ce_kml_style(ce.name))
for se in se_sites:
    kml_document.append(add_se_kml_style(se.name))

# Include the CE sites
for ce in ce_sites:
    kml_document.append(add_ce_site(ce))
    pie_plot(ce.name, ce.jobs_done, ce.jobs_failed)

# Include the SE sites
for se in se_sites:
    if not 'TMP' in se.name and not 'DATA' in se.name :
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
