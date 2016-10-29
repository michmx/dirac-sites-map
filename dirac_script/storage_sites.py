#!/bin/python
from pprint import pprint

from DIRAC.Core.Base import Script
from DIRAC.Core.DISET.RPCClient import RPCClient
from utils.manager import Manager
#from controllers.utilCLController import listSE
from DIRAC import gConfig

Script.parseCommandLine()
service = RPCClient('DistributedDataManagement/StorageElementStatus')

def get_se_sites():
     
    # Read the data from CSV file and returns dictionary
    coordinates_data = {}
    try:
        csv_file = open('sites.tmp', "r")
    except IOError:
        sys.exit("There are no coordinates info for SE. Get first the computing sites with get_ce_sites()")
    lines = csv_file.read().split("\n")
    for row in lines:
        if row != "":
            site = row.split(',')
            if site[1].replace('.','',1).replace('-','',1).isdigit() and \
            site[2].replace('.','',1).replace('-','',1).isdigit():
                coordinates_data[site[0]] = [float(site[1]),float(site[2])]      
    se_sites = {}
    manager = Manager()
    se_result = manager.listSEs()['Value']
    se_health = service.getHealthyProductionSEs()
    #se_health = service.getAllStorageElementStatus()
    if not se_health['OK']: 
        print "[WARNING]: No health info for SE sites"
    for se in sorted(se_result['Active']):
        se_site = {}
        result = gConfig.getOptionsDict('/Resources/StorageElements/' + se)
        result2 = gConfig.getOptionsDict('/Resources/StorageElements/' + se \
                                        + '/AccessProtocol.1')
        if result['OK'] and result2['OK']:
            result = result['Value']
            result2 = result2['Value']
            se_site = result2
            se_site['Read'] = result['ReadAccess']
            se_site['Write'] = result['WriteAccess']

            if se.split('-')[0] in coordinates_data:
                se_site['Coordinates'] = coordinates_data[se.split('-')[0]]
            else:
                print "[WARNING]: No location info for " + se
            se_sites[se] = se_site

            if se_health['OK'] and se in se_health['Value']:
                se_site['Health'] = se_health['Value'][se][0]


    return se_sites

def get_health():
    #result = service.getAllStorageElementStatus()
    result = service.getHealthyProductionSEs()
    return result

if __name__ == "__main__":
    result = get_se_sites()
    pprint(result)
    #get_se_list()
