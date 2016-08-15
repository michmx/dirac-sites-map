#! /usr/bin/env python
import sys
# sys.path.insert(0, './kml_gen')
# sys.path.insert(0, './js_gen')
#sys.path.insert(0, './dirac_script')

#from jobsummary import read_site_summary

from src.kml_gen import *
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
#ce_sites = read_site_summary()
#To obtain the info without DIRAC enviroment (to test)
ce_sites = read_gb2_site_summary('info/gb2_site_summary.txt')

# Pull the SE sites summary
se_sites = read_gb2_list_se('info/gb2_list_se.txt')

# Include the styles
copyfile('./input/db_blue.png','./content/db_blue.png')
copyfile('./input/db_unknown.png','./content/db_unknown.png')
copyfile('./input/db_error.png','./content/db_error.png')
copyfile('./input/db_99y.png','./content/db_99y.png')
copyfile('./input/db_66y.png','./content/db_66y.png')
copyfile('./input/db_33y.png','./content/db_33y.png')
copyfile('./input/db_0y.png','./content/db_0y.png')


for ce in ce_sites:
    kml_document.append(add_ce_kml_style(ce.name))
for se in se_sites:
    kml_document.append(add_se_kml_style(se.name))

# Include the CE sites
for ce in ce_sites:
    kml_document.append(add_ce_site(ce))
    pie_plot(ce)

# Include the SE sites
for se in se_sites:
    if 'TMP' in se.name or 'DATA' in se.name :
        kml_document.append(add_se_site(se))

kml_lines = pull_dashboard('http://dashb-fts-transfers.cern.ch/' + \
                    'dashboard/request.py/transfer-matrix.json?' + \
                    'vo=belle&server=b2fts3.cc.kek.jp&src_grouping=host'+ \
                    '&dst_grouping=host&interval=40320',40320)

for line in kml_lines:
    kml_document.append(line)


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
