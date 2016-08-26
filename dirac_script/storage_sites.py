#!/bin/python
from pprint import pprint

from DIRAC.Core.Base import Script
Script.parseCommandLine()
from DIRAC.Core.DISET.RPCClient import RPCClient
from utils.manager import Manager
from controllers.utilCLController import listSE
from DIRAC import gConfig

from src.js_gen import SE_site

service = RPCClient('DistributedDataManagement/StorageElementStatus')

def get_se_list():
     
    # Read the data from CSV file and returns dictionary
    coordinates_data = {}
    csv_file = open('input/sites.tmp', "r")
    lines = csv_file.read().split("\n")
    for row in lines:
        if row != "":
            site = row.split(',')
            coordinates_data[site[0]] = [site[1],site[2]]      

    se_list = []
    manager = Manager()
    se_result = manager.listSEs()['Value']
    se_health = service.getHealthyProductionSEs()
    #se_health = service.getAllStorageElementStatus()
    if not se_health['OK']: 
        print "[WARNING]: No health info for SE sites"
    for se in sorted(se_result['Active']):
        result = gConfig.getOptionsDict('/Resources/StorageElements/' + se)
        result2 = gConfig.getOptionsDict('/Resources/StorageElements/' + se \
                                        + '/AccessProtocol.1')
        if result['OK'] and result2['OK']:
            result = result['Value']
            result2 = result2['Value']
            se_site = SE_site(se)
            se_site.host = [result2['Host'],result2['Port'],result2['WSUrl']]
            if 'SpaceToken' in result2:
                se_site.token = result2['SpaceToken']
            se_site.path = result2['Path']
            se_site.read = result['ReadAccess']
            se_site.write = result['WriteAccess']

            if se_site.name.split('-')[0] in coordinates_data:
                se_site.coordinates = coordinates_data[se_site.name.split('-')[0]]
            else:
                print "[WARNING]: No location info for " + se_site.name
            se_list.append(se_site)

            if se_health['OK'] and se_site.name in se_health['Value']:
                se_site.health = se_health['Value'][se_site.name] 


    return se_list

def get_health():
    #result = service.getAllStorageElementStatus()
    result = service.getHealthyProductionSEs()
    return result

if __name__ == "__main__":
    result = get_health()
    pprint(result)
    #get_se_list()
