#!/bin/env python
from DIRAC.Core.DISET.RPCClient import RPCClient
from DIRAC import gConfig
from pprint import pprint

import sys

import datetime
import sys
def getSiteList():
    from DIRAC.Interfaces.API.DiracAdmin import DiracAdmin
    result = DiracAdmin().getSiteMask()
    if not result['OK']:
        return []
    return result['Value']

def read_site_summary():
    active_sites = {}
    from DIRAC.Core.Base import Script
    Script.initialize( False, False, False, False )

    JobMonitoring = RPCClient('WorkloadManagement/JobMonitoring', timeout=600)
    result = JobMonitoring.getSiteSummary()
    if not result['OK']:
        sys.exit("Failed to get SiteSummary: %s" % str(result['Message']))
    sitesummary=result['Value']
    #return sitesummary
    #print sitesummary
    sitelists = getSiteList()
    # Write the coordinates in a temporal file
    coord_file = open('sites.tmp','w')
    coord_file.write("Sites,x,y")
    # For now, for sites without coordinates info in DIRAC
    coord_file.write("\nAdelaide,-34.910836,138.57121")
    coord_file.write("\nIPHC,48.6056,7.7095")
    coord_file.write("\nKEK2,36.06,140.2303")

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
        active_sites[site] = sitesummary[site]
        x='0'
        y='0'
        if 'Coordinates' in optionsdict:
            [y,x] = optionsdict['Coordinates'].split(':')
            if x.replace('-','').replace('.','').isdigit() and y.replace('-','').replace('.','').isdigit():
                active_sites[site]['Coordinates'] = [float(x),float(y)]
            coord_file.write('\n'+ site.split('.')[1]+','+ str(x) + ',' + str(y))
        else:
            print "[WARNING:] No location info for",site
            
    coord_file.close()
    return active_sites


if __name__ == "__main__":
    pprint(read_site_summary())
