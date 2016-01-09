#! /usr/bin/env python

import sys
sys.path.insert(0, './js_gen')
sys.path.insert(0, './dirac_script')

from js_gen import *
#from jobsummary import read_site_summary

# A simple script to generate Javascript file
map = JSgen('web/datagrid.js')
# Include computing elements
ce_obj = read_site_summary()
#To obtain the info without DIRAC enviroment (to test)
#ce_obj = read_gb2_site_summary("info/gb2_site_summary.txt")
for ce in ce_obj:
    map.add_ce_site(ce)

# Include storage elements too
se_obj = read_gb2_list_se("info/gb2_list_se.txt")
for se in se_obj:
    map.add_se_site(se)

# Open the dashboard info
map.pull_dashboard('http://dashb-fts-transfers.cern.ch/' + \
                    'dashboard/request.py/transfer-matrix.json?' + \
                    'vo=belle&server=b2fts3.cc.kek.jp&src_grouping=host'+ \
                    '&dst_grouping=host&interval=720',720)

map.init_map()
map.close()
