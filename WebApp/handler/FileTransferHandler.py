from WebAppDIRAC.Lib.WebHandler import WebHandler, WErr, WOK, asyncGen
from DIRAC import gConfig, S_OK, S_ERROR, gLogger
from DIRAC.Core.DISET.RPCClient import RPCClient
from DIRAC.Resources.Catalog.FileCatalog import FileCatalog
from DIRAC.ConfigurationSystem.Client.Helpers.Registry import getVOForGroup

import pprint

class FileTransferHandler(WebHandler):

    AUTH_PROPS = "authenticated"

    @asyncGen
    def web_getSEList(self):
        values = []
        group = self.getSessionData()['user'].get( 'group', '' )
        if group == "dirac_admin":# change this so does something better than just sending message as SE
            values.append({ "StorageElement" : "Error: Do not use the dirac-admin group to transfer files, please change group on the bottom toolbar)."})
            self.write({"success": "true", "result": values})
            self.finish()
        storageElementService = RPCClient('DistributedDataManagement/StorageElementStatus')
        allStorageElementStatus = storageElementService.getAllStorageElementStatus()
        if allStorageElementStatus['OK']:
            allSEElementsDict = allStorageElementStatus['Value']
            if group == "belle":
                for se, infoDict in sorted(allSEElementsDict.iteritems()):
                    if "TMP-SE" in str(se):
                        if infoDict['isHealthy']==1:
                            values.append({ "StorageElement" : str(se)})
                        else:
                            values.append({ "StorageElement" : str(se)+": Unhealthy - Please use a different SE or try again later"})
                self.write({"success": "true", "result": values})
                self.finish()
            elif group == "belle_mcprod" or group == "belle2_dms":
                for se, infoDict in sorted(allSEElementsDict.iteritems()):
                    if infoDict['isHealthy']==1:
                        values.append({ "StorageElement" : str(se)})
                    else:
                        values.append({ "StorageElement" : str(se)+": Unhealthy - Please use a different SE or try again later"})
                self.write({"success": "true", "result": values})
                self.finish()
        else:
            values.append({ "StorageElement" : "Error: Error when retrieving storage elements with getAllStorageElementStatus()" })
            self.write({"success": "true", "result": values})
            self.finish()

    @asyncGen
    def web_setLFNFromText(self):
        partialLPNFromText = self.request.arguments["partialLPNFromText"][0]
        fc = FileCatalog()
        if partialLPNFromText[0]!="/":
            partialLPNFromText = "/"+partialLPNFromText

        doubleSlashI = partialLPNFromText.find("//")
        while partialLPNFromText.find("//") != -1:
            partialLPNFromText = partialLPNFromText[:doubleSlashI] + partialLPNFromText[doubleSlashI+1:]
            doubleSlashI = partialLPNFromText.find("//")

        if partialLPNFromText[-1]=="/" and (len(partialLPNFromText) > 1):
            partialLPNFromText = partialLPNFromText[:-1]
        if fc.isDirectory(partialLPNFromText)['Value']['Successful'][partialLPNFromText]:#is directory?
            self.write({"success": "isDirectory"})
            self.finish()
        elif not fc.isFile(partialLPNFromText)['Value']['Successful'][partialLPNFromText]:#is not directory or file?
            self.write({"success": "noExist"})
            self.finish()
        else:
            self.write({"success": "isFile"})   ############################for dataset code will need an option for "isDatset" aswell when dataset stuff is implemented in DDM
            self.finish()

    @asyncGen
    def web_transferFile(self):
        destinationSE = self.request.arguments["valueSE"][0]
        if str(destinationSE)[-3:]=="-SE":
            fileLFN = self.request.arguments["valueLFN"][0]
            arrayLPN = fileLFN.split('/')
            lpn = "/"
            for lpnElement in arrayLPN[:-1]:
                if len(lpnElement)==0:
                    continue
                lpn += lpnElement
                lpn += "/"
            lpn += arrayLPN[-1]
            fc = FileCatalog()
            if fc.isFile(lpn)['Value']['Successful'][lpn] == lpn:
                fileSize = int(fc.getFileSize(lpn)['Value']['Successful'][lpn])
                print fileSize
                transferService = RPCClient('DistributedDataManagement/TransferRequest')
                trID = transferService.transferRequest(lpn,fileSize,destinationSE)
                returnMessage = ''
                if trID['OK']:
                    files = []
                    files.append(fileLFN)
                    addFile = transferService.addFiles(trID['Value'],files)
                    if addFile['OK']:
                        completeTRequest = transferService.completeTransferRequest(trID['Value'],files)
                        pp = pprint.PrettyPrinter(indent=4)
                        pp.pprint(completeTRequest)
                        if completeTRequest['OK']:
                          returnMessage += "Transfer Request Successfully Submitted"
                        else:
                          returnMessage += "Error in finalising the transfer request. \n Error Message : " +str(completeTRequest['Message'])
                    else:
                        returnMessage += "Error in Adding Files to the Transfer Request. \n Error Message : " +str(addFile['Message'])
                else:
                    returnMessage += "Error in Opening the Transfer Request. \n Error Message : " + str(trID['Message'])
                self.write({"returnMessage": returnMessage})
                self.finish()
            else:
                self.write({"returnMessage": "Error:  The Specified File Does Not Exist"})
                self.finish()
        else:
            self.write({"returnMessage": destinationSE})
            self.finish()

    @asyncGen
    def web_transferDataset(self):
        self.write({"returnMessage": "Functionality to transfer datasets is not yet implemented."})
        self.finish()

    @asyncGen
    def web_getBrowserSubnodeFiles( self ):
      path = self.request.arguments["path"][0]
      fc = FileCatalog()
      result = yield self.threadTask( fc.listDirectory, path, False)
      if not result[ "OK" ] :
        gLogger.error( "submit: %s" % result[ "Message" ] )
        self.finish({ "success" : "false" , "error" : result[ "Message" ] })
        return
      filesData = result["Value"]["Successful"][path]["Files"]
      dirData = result["Value"]["Successful"][path]["SubDirs"]
      retData = []
      for entryName in dirData:
        nodeDef = { 'text' : entryName.split("/")[-1] }
        nodeDef[ 'leaf' ] = False
        nodeDef[ 'expanded' ] = False
        retData.append(nodeDef)
      for entryName in filesData:
        nodeDef = { 'text' : entryName.split("/")[-1] }
        nodeDef[ 'leaf' ] = True
        retData.append(nodeDef)
      retData = sorted(retData, key=lambda node: node['text'].upper())
      self.finish({"success" : "true", "nodes":retData})

    @asyncGen
    def web_showTransferRequest(self):
        values = []
        transferService = RPCClient('DistributedDataManagement/TransferRequest')


        pp = pprint.PrettyPrinter(indent=4)
        pp.pprint(transferService.getScheduledLFNS())

        transferRequestInfo = yield self.threadTask( transferService.getAllTransferRequestInfo )
        if transferRequestInfo['OK']:
            userDN = self.getSessionData()['user'].get( 'DN', '' )
            for i in transferRequestInfo['Value']:
                if str(transferRequestInfo['Value'][i]['OwnerDN']) == str(userDN):
                    if transferRequestInfo['Value'][i]['LFNS_SUBMITTED']>0:
                      transferRequestInfo['Value'][i]['LFNS_DONE_Percent']=100.0*transferRequestInfo['Value'][i]['LFNS_COMPLETED']/transferRequestInfo['Value'][i]['LFNS_SUBMITTED']
                      transferRequestInfo['Value'][i]['LFNS_FAILED_Percent']=100.0*transferRequestInfo['Value'][i]['LFNS_FAILED']/transferRequestInfo['Value'][i]['LFNS_SUBMITTED']
                    values.append(transferRequestInfo['Value'][i])
            callback = {"success": "true", "result": values}
            self.finish(callback)
        else:
            self.finish({"success" : "false"})

    @asyncGen
    def web_cancelTransferRequest(self):
        transferService = RPCClient('DistributedDataManagement/TransferRequest')
        trID = self.request.arguments["trIDToCancel"][0]
        returnMessage = transferService.cancelTransferRequest(int(trID));
        # pp = pprint.PrettyPrinter(indent=4)
        # pp.pprint(returnMessage)
        if returnMessage['OK']:
            self.write({"success": "true", "returnMessage": returnMessage['Value']})
            self.finish()
        else:
            self.write({"success": "false", "returnMessage": returnMessage['Message']})
            self.finish()
