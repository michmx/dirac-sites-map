#!/bin/python
from pprint import pprint
import commands

from DIRAC.Core.Base import Script
Script.parseCommandLine()
from DIRAC.Core.DISET.RPCClient import RPCClient
import datetime
service = RPCClient('DistributedDataManagement/StorageElementStatus')

def get_health():
    result = service.getHealthyProductionSEs()
    return result
