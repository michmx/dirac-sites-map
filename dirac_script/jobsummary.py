#!/bin/env python
from DIRAC.Core.DISET.RPCClient import RPCClient
from DIRAC import gConfig

import sys
# sys.path.insert(0, '../')
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
        ce = CE_site(site)
        ce.coordinates = [x,y]
        ce.jobs_done = sitesummary[site]['Done']
        ce.jobs_failed = sitesummary[site]['Failed']
        ce.jobs_running = sitesummary[site]['Running']
        ce.jobs_waiting = sitesummary[site]['Waiting']
        ce.jobs_stalled = sitesummary[site]['Stalled']
        ce_site.append(ce)
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
