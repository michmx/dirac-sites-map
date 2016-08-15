#! /usr/bin/env python

#import sys
#sys.path.insert(0, './js_gen')
#sys.path.insert(0, './dirac_script')

from src.js_gen import *

try:
    from jobsummary.dirac_script import read_site_summary
except ImportError:
    print "Dirac enviroment not ready. Reading CE sites from file."
    Dirac_env = False

# A simple script to generate Javascript file
map = JSgen('web/datagrid.js')

if Dirac_env:
    print "Running with Dirac enviroment"
    # Include computing elements
    ce_obj = read_site_summary()
else:
    #To obtain the info without DIRAC enviroment (to test)
    ce_obj = read_gb2_site_summary("info/gb2_site_summary.txt")

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
                    '&dst_grouping=host&interval=40320',40320)

map.init_map()
map.close()
