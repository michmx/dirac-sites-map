from WebAppDIRAC.Lib.WebHandler import WebHandler, WErr, WOK, asyncGen
from DIRAC import gConfig, S_OK, S_ERROR, gLogger
from DIRAC.Core.DISET.RPCClient import RPCClient
# from DIRAC.FrameworkSystem.Client.SiteMapClient import SiteMapClient


class CloudMapHandler(WebHandler):

    AUTH_PROPS = "authenticated"

    # @asyncGen
    def web_getSitesData(self):
        # gLogger.info("Fetching sites data...")
        sitesData = self.getSiteList()
        self.sitesData = self.updateSiteMask(sitesData)
        self.updateRunningInstances()
        self.updateJobsStatus()
        # self.updateAllSitesLoad()
        # gLogger.info(self.sitesData)
        self.write({"success": "true", "result": self.sitesData})

    def getSiteList(self):
        csEndpointSection = "/Resources/VirtualMachines/CloudEndpoints"
        csPodSection = "/Resources/VirtualMachines/RunningPods"
        csImageSection = "/Resources/VirtualMachines/Images"
        sitesData = {}
        ceSection = "/Resources/Sites"
        gridsToMap = self._getCSValue(ceSection, "GridsToMap", ["CLOUD"])
        for grid in gridsToMap:
            gridSection = "%s/%s" % (ceSection, grid)
            result = gConfig.getSections(gridSection)
            if not result['OK']:
                gLogger.error(
                    "Cannot get a list of sites for grid", "%s :%s" %
                    (grid, result['Message']))
                continue
            for site in result['Value']:
                coords = gConfig.getValue(
                    "%s/%s/Coordinates" %
                    (gridSection, site), "")
                try:
                    coords = [
                        float(
                            "%.4f" %
                            float(
                                c.strip())) for c in coords.split(":") if c.strip()]
                except Exception as e:
                    print e
                    gLogger.warn(
                        "Site %s has coordinates incorrectly defined: %s" %
                        (site, coords))
                    continue
                if not coords or len(coords) != 2:
                    gLogger.warn(
                        "Site %s has coordinates incorrectly defined: %s" %
                        (site, coords))
                    continue
                name = gConfig.getValue("%s/%s/Name" % (gridSection, site), "")
                if not name:
                    gLogger.warn("Site %s no name defined" % site)
                    continue
                tier = gConfig.getValue(
                    "%s/%s/MoUTierLevel" %
                    (gridSection, site), "")
                if not tier or tier.lower() == "none":
                    tier = 2
                imageName = ''
                siteData = {'longlat': coords,
                            'name': name,
                            'imageName': imageName,
                            'tier': tier}
                sitesData[site] = siteData

        runningPods = []
        diracSetup = self.getUserSetup()
        if not diracSetup:
            diracEnvironment = 'Production'
        else:
            diracEnvironment = gConfig.getValue(
                '/DIRAC/Setups/%s/WorkloadManagement' %
                diracSetup)
        submitPool = gConfig.getValue(
            '/Systems/WorkloadManagement/%s/Agents/VirtualMachineScheduler/DefaultSubmitPools' %
            diracEnvironment)
        if not submitPool:
            gLogger.error(
                'DefaultSubmitPools param is not defined for %s VirtualMachineScheduler agent' %
                diracEnvironment)
        runningPods = gConfig.getValue(
            '/Systems/WorkloadManagement/%s/Agents/VirtualMachineScheduler/%s/RunningPods' %
            (diracEnvironment, submitPool)).replace(
            ',', ' ').split()
        for runningPodName in runningPods:
            endpointName = gConfig.getValue(
                "%s/%s/%s" %
                (csPodSection, runningPodName, 'CloudEndpoints'))
            imageName = gConfig.getValue(
                "%s/%s/%s" %
                (csPodSection, runningPodName, 'Image'))
            if not imageName:
                gLogger.error(
                    'Image param is not defined for %s runningPod' %
                    runningPodName)
                continue
            siteName = gConfig.getValue(
                "%s/%s/%s" %
                (csEndpointSection, endpointName, 'siteName'))
            if not siteName:
                gLogger.error(
                    'siteName param is not defined for %s endpoint' %
                    endpointName)
                continue
            VMsMaxPod = gConfig.getValue(
                "%s/%s/%s" %
                (csPodSection, runningPodName, 'MaxInstances'))
            if not VMsMaxPod:
                gLogger.error(
                    'MaxInstances param is not defined for %s runningPod' %
                    runningPodName)
            VMsMaxEndpoint = gConfig.getValue(
                "%s/%s/%s" %
                (csEndpointSection, endpointName, 'maxEndpointInstances'))
            if not VMsMaxEndpoint:
                gLogger.error(
                    'maxEndpointInstances param is not defined for %s endpoint' %
                    endpointName)
            maxAllowedPrice = gConfig.getValue(
                "%s/%s/%s" %
                (csImageSection, imageName, 'MaxAllowedPrice'), '0')
            cvmfsValue = gConfig.getValue(
                "%s/%s/%s" %
                (csEndpointSection, endpointName, 'cvmfs_http_proxy'))
            if not cvmfsValue:
                gLogger.error(
                    'cvmfs_http_proxy param is not defined for %s endpoint' %
                    endpointName)
            cvmfsStatus = 'Disabled'
            if cvmfsValue and cvmfsValue.find('http') == 0:
                cvmfsStatus = 'Enabled'
            sitesData[siteName]['imageName'] = imageName
            sitesData[siteName]['VMsMax'] = min(
                int(VMsMaxPod),
                int(VMsMaxEndpoint))
            sitesData[siteName]['cvmfsStatus'] = cvmfsStatus
            sitesData[siteName]['MaxAllowedPrice'] = maxAllowedPrice
            sitesData[siteName]['VMsRunning'] = 0
        return sitesData

    def updateRunningInstances(self):
        rpcClient = RPCClient("WorkloadManagement/VirtualMachineManager")
        result = rpcClient.getInstancesByStatus('Running')
        if not result['OK']:
            callback = {"success": "false", "error": result['Message']}
            return self.write(callback)
        for site in self.sitesData:
            imageName = self.sitesData[site]['imageName']
            if imageName in result['Value']:
                runningVMs = result['Value'][imageName]
                self.sitesData[site]['VMsRunning'] = len(runningVMs)
        return True

    def updateJobsStatus(self):
        rpcClient = RPCClient("WorkloadManagement/JobMonitoring")
        for siteName in self.sitesData:
            if self.sitesData[siteName]['siteMaskStatus'] == 'Banned':
                continue
            result = rpcClient.getJobStats('Status', {'site': siteName})
            if not result['OK']:
                gLogger.error(result)
                callback = {"success": "false", "error": result['Message']}
                return self.write(callback)

            processingJobs = 0
            if 'Running' in result['Value']:
                processingJobs = int(result['Value']['Running'])
            if 'Matched' in result['Value']:
                processingJobs += int(result['Value']['Matched'])

            pendingJobs = 0
            if 'Waiting' in result['Value']:
                pendingJobs = int(result['Value']['Waiting'])
            if 'Checking' in result['Value']:
                pendingJobs += int(result['Value']['Checking'])
            if 'Received' in result['Value']:
                pendingJobs += int(result['Value']['Received'])

            self.sitesData[siteName]['JobsProcessing'] = processingJobs
            self.sitesData[siteName]['JobsPending'] = pendingJobs
        return True

    # This will give us average Load for all clouds
    # def updateAllSitesLoad(self):
    #   siteName = 'CLOUD.CC1_Krakow.pl'
    #   rpcClient = RPCClient( "WorkloadManagement/VirtualMachineManager" )
    #   result = rpcClient.getHistoryValues(3600, {}, ['Load'], 3600)
    #   if not result[ 'OK' ]:
    #     gLogger.error( "Cannot get the site mask", result['Message'] )
    #     return result
    #   Load = result['Value']['Records'][-1][1]
    #   self.sitesData[siteName]['Load'] = Load
    #   gLogger.error(result)
    #   gLogger.error(Load)
    #   return True

    def updateSiteMask(self, sitesData):
        result = RPCClient("WorkloadManagement/WMSAdministrator").getSiteMask()
        if not result['OK']:
            gLogger.error("Cannot get the site mask", result['Message'])
            return result
        siteMask = result['Value']
        siteMaskStatus = dict(sitesData)
        for site in siteMaskStatus:
            if site in siteMask:
                siteMaskStatus[site]['siteMaskStatus'] = 'Allowed'
            else:
                siteMaskStatus[site]['siteMaskStatus'] = 'Banned'
            sitesData[site]['siteMaskStatus'] = siteMaskStatus[
                site]['siteMaskStatus']

        return sitesData

    def _getCSValue(self, csSection, option, defVal=None):
        return gConfig.getValue("%s/%s" % (csSection, option), defVal)
