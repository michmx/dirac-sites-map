#! /usr/bin/env python

from os import system
from pprint import pprint
#sys.path.insert(0, './js_gen')
#sys.path.insert(0, './dirac_script')

from src.js_gen import JSgen

try:
    from dirac_script.computing_sites import read_site_summary
    from dirac_script.storage_sites import get_se_sites
    from dirac_script.connections import find_destinations
    Dirac_env = True
except ImportError:
    print "Dirac enviroment not ready. Reading sites from file."
    from src.js_gen_noDirac import *
    Dirac_env = False

# A simple script to generate Javascript file
map = JSgen('web/datagrid.js',Dirac_env)

if Dirac_env:
    print "Running with Dirac enviroment"
    # Include computing elements
    ce_sites = read_site_summary()
    se_sites = get_se_sites()
    # Find the destinations of each site
    
else:
    #To obtain the info without DIRAC enviroment (to test)
    ce_sites = read_gb2_site_summary("info/gb2_site_summary.txt")
    se_sites = read_gb2_list_se("info/gb2_list_se.txt")

for ce in ce_sites:
    map.add_ce_site(ce,ce_sites[ce])

for se in se_sites:
    map.add_se_site(se,se_sites[se])

#
# # Open the dashboard info
# map.pull_dashboard('http://dashb-fts-transfers.cern.ch/' + \
#                     'dashboard/request.py/transfer-matrix.json?' + \
#                     'vo=belle&server=b2fts3.cc.kek.jp&src_grouping=host'+ \
#                     '&dst_grouping=host&interval=50000',50000)
#
map.make_map()
map.close()
