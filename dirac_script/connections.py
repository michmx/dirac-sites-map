#!/usr/bin/env python
from pprint import pprint

from DIRAC.Core.Base import Script
Script.parseCommandLine()
from DIRAC.Core.DISET.RPCClient import RPCClient
from utils.manager import Manager
from controllers.utilCLController import listSE
from DIRAC import gConfig
from DIRAC.AccountingSystem.Client.ReportsClient                import ReportsClient
from datetime import date, time, datetime, timedelta
import math


# Find the transfers between source and its destinations (since last hours)
def find_destinations(source, hours = 720):
    # Read the data from CSV file and returns dictionary
    coordinates_data = {}
    try:
        csv_file = open('sites.tmp', "r")
        lines = csv_file.read().split("\n")
        for row in lines:
            if row != "":
                site = row.split(',')
                if site[1].replace('.','',1).replace('-','',1).isdigit() and \
                site[2].replace('.','',1).replace('-','',1).isdigit():
                    coordinates_data[site[0]] = [float(site[1]),float(site[2])]      
    except IOError:
        print "[WARNING]: There are no coordinates info for SE. Get first the computing sites with get_ce_sites()"

    destinations = {}

    fromD = datetime.utcnow() - timedelta(hours = hours)
    toD   = datetime.utcnow()
    service = RPCClient('Accounting/ReportGenerator')
    for status in ['Successful','Failed','Finished']:
        result = service.getReport({'typeName':'DataOperation','reportName':'Pie chart of transferred data','startTime':fromD,'endTime':toD,'condDict':{'Source':source,'FinalStatus':status},'grouping':'Destination'})

        if not result['OK'] or not 'Value' in result or not 'data' in result['Value']:
            return {}

        result = result['Value']['data']
        for dest in result:
            if not dest in destinations:
                destinations[dest] = {}
            destinations[dest][status] = result[dest]
    
    if len(destinations.keys()) == 0:
        return {}
    destinations_active = {}
    for dest in destinations:
        if dest == '':
            continue
        #We calculate the speed on kBs
        total = 0
        if not 'Failed' in destinations[dest]:
            destinations[dest]['Failed'] = 0
        for status in destinations[dest]:
            total += destinations[dest][status]
        if total == 0:
            continue
        # In KB/s
        speed = total/float(hours * 60 * 60 * 1000)
        if total != 0:
            efficiency =  (total - destinations[dest]['Failed'])*100/ float(total)
        else:
            efficiency = 0

        description_text = """<strong>Source = """ + source + """</br>
        Destination = """ + dest + """</strong></br><hr>
        <font style="font-weight: bold">Connection info:</font> </br>
        <div style="padding-left: 5px;">Throughput: %0.1f KB/s </br>"""%speed +\
        """Efficiency: %.1f"""%efficiency +  """%""" + \
        "</br>Successful: %.1f MB</br>"%(float(total - destinations[dest]['Failed'])/float(1000000.0)) + \
        "Failed: %0.1f MB"%float(destinations[dest]['Failed']/float(1000000.0))  + """  </br>
        </div><br />"""
        # The color depends of the efficiency
        if efficiency < 20:
            color = '#FF0000'
        elif efficiency >= 20 and efficiency < 60:
            color = '#FFFF00'
        elif efficiency >= 60 and efficiency < 80:
            color = '#0033FF'
        else:
            color = '#00CC00'
        # The stroke weight of the line depends of the throughput.
        destinations[dest]['color'] = color
        if speed < 1:
            destinations[dest]['stroke'] = 1
        else:
            tmp_stroke = 1 + math.log(speed,2)
            if tmp_stroke > 8:
                destinations[dest]['stroke'] = 8
            else:    
                destinations[dest]['stroke'] = tmp_stroke

        destinations[dest]['Description'] = description_text
        destinations[dest]['efficiency'] = efficiency
        destinations[dest]['speed'] = speed
        if dest.split('-')[0] in coordinates_data:
            destinations[dest]['Coordinates'] = coordinates_data[dest.split('-')[0]]
        else:
            print "[WARNING]: No coordinates info for destination", dest

        destinations_active[dest] = destinations[dest]

    return destinations_active

if __name__ == "__main__":
    pprint(find_destinations('DIRAC.CINVESTAV.mx','b',720))
