#! /usr/bin/env python

import simplejson
from js_gen import *
from kml_gen import read_gb2_site_summary, read_gb2_list_se

# A simple script to generate Javascript file
map = JSgen('web/b2gridmap.js')
# Include computing elements
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
                    '&dst_grouping=host&interval=720')

map.init_map()
map.close()
