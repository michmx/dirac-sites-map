#!/bin/env python
from DIRAC.Core.DISET.RPCClient import RPCClient
from DIRAC import gConfig

import sys
from src.js_gen import CE_site

import datetime
import sys
def getSiteList():
    from DIRAC.Interfaces.API.DiracAdmin import DiracAdmin
    result = DiracAdmin().getSiteMask()
    if not result['OK']:
        return []
    return result['Value']

def read_site_summary():
    ce_site = []
    from DIRAC.Core.Base import Script
    Script.initialize( False, False, False, False )

    JobMonitoring = RPCClient('WorkloadManagement/JobMonitoring', timeout=600)
    result = JobMonitoring.getSiteSummary()
    if not result['OK']:
        sys.exit("Failed to get SiteSummary: %s" % str(result['Message']))
    sitesummary=result['Value']

    sitelists = getSiteList()
    # Write the coordinates in a temporal file
    coord_file = open('input/sites.tmp','w')
    coord_file.write("Sites,x,y")
    # For now, for sites without coordinates info in DIRAC
    coord_file.write("\nAdelaide,138.57121,-34.910836")
    coord_file.write("\nIPHC,7.7095,48.6056")
    coord_file.write("\nKEK,140.2303,36.06")

    for site in sorted(sitelists):

        ele = site.split('.')
        result = gConfig.getOptionsDict('Resources/Sites/%s/%s' % ( ele[0], site ))
        if not result['OK']:
            continue
        optionsdict=result['Value']
        status = "production"
        if 'Status' in optionsdict:
            status = optionsdict['Status']
        if status not in ['production', 'commissioning']:
            continue
        if site not in sitesummary:
            continue
        x='0'
        y='0'
        if 'Coordinates' in optionsdict:
            [x,y] = optionsdict['Coordinates'].split(':')
            coord_file.write('\n'+ site.split('.')[1]+','+ str(x) + ',' + str(y))
        else:
            print "[WARNING:] No location info for",site
            
        ce = CE_site(site)
        ce.coordinates = [x,y]
        ce.jobs_done = sitesummary[site]['Done']
        ce.jobs_failed = sitesummary[site]['Failed']
        ce.jobs_running = sitesummary[site]['Running']
        ce.jobs_waiting = sitesummary[site]['Waiting']
        ce.jobs_stalled = sitesummary[site]['Stalled']
        ce_site.append(ce)
    coord_file.close()
    return ce_site


if __name__ == "__main__":
    from DIRAC.Core.Base import Script
    Script.initialize( False, False, False, False )

    JobMonitoring = RPCClient('WorkloadManagement/JobMonitoring', timeout=600)
    result = JobMonitoring.getSiteSummary()
    if not result['OK']:
        sys.exit("Failed to get SiteSummary: %s" % str(result['Message']))
    sitesummary=result['Value']

    sitelists = getSiteList()
    for site in sorted(sitelists):
        ele = site.split('.')
        result = gConfig.getOptionsDict('Resources/Sites/%s/%s' % ( ele[0], site ))
        if not result['OK']:
            continue
        optionsdict=result['Value']
        status = "production"
        if 'Status' in optionsdict:
            status = optionsdict['Status']
        if status not in ['production', 'commissioning']:
            continue
        if site not in sitesummary:
            continue
        x='0'
        y='0'
        if 'Coordinates' in optionsdict:
            [x,y] = optionsdict['Coordinates'].split(':')
        mes1='%s, %s, %s, ' % ( site, x, y )
        mes2='%(Done)d, %(Failed)d, %(Running)d, %(Stalled)d, %(Waiting)d' % sitesummary[site]
        mes = mes1 + mes2
        print mes
