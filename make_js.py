from js_gen import *

test = JSgen('web/b2gridmap.js')
ce_obj = read_gb2_site_summary("info/gb2_site_summary.txt")
for ce in ce_obj:
    test.add_ce_site(ce)
test.init_map()
test.close()
