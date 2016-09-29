from WebAppDIRAC.Lib.WebHandler import WebHandler, WErr, WOK, asyncGen
from DIRAC import gConfig, S_OK, S_ERROR, gLogger
from DIRAC.Core.DISET.RPCClient import RPCClient
from DIRAC.Interfaces.API.DiracAdmin import DiracAdmin
# from DIRAC.FrameworkSystem.Client.SiteMapClient import SiteMapClient
import datetime


class SiteMapHandler(WebHandler):

    AUTH_PROPS = "authenticated"

    # @asyncGen
    def web_getSitesData(self):
        # gLogger.info("Fetching sites data...")
        result = self.read_site_summary()
        if result['OK']:
            self.sitesData = result['Value']
        else:
            self.sitesData = {}
#        gLogger.debug("siteData : %s" % str(self.sitesData))
        self.write({"success": "true", "result": self.sitesData})

    def getSiteList(self):
        result = DiracAdmin().getSiteMask()
        if not result['OK']:
            return []
        return result['Value']

    def read_site_summary(self):
        time_max = datetime.datetime.utcnow()
        td1h = datetime.timedelta(hours=1)
        time_min = time_max - td1h
        ce_site = {}
        sitesummary = {}
        if 'mode' in self.request.arguments and self.request.arguments['mode'][0] == '1':
            JobMonitoring = RPCClient('WorkloadManagement/JobMonitoring', timeout=600)
            result = JobMonitoring.getSiteSummary()
            if not result['OK']:
                return result
            sitesummary = result['Value']
        elif 'mode' in self.request.arguments and self.request.arguments['mode'][0] == '2':
            PilotMonitoring = RPCClient('WorkloadManagement/WMSAdministrator', timeout=600)
            result = PilotMonitoring.getPilotSummary(time_min, time_max)
            if not result['OK']:
                return result
            cesummary = result['Value']
#            gLogger.debug("cesummary : %s" % str(cesummary))

            result = self._getCESiteDict()
            if not result['OK']:
                return result
            cetosite = result['Value']['CEtoSite']
            sitetoce = result['Value']['SitetoCE']
            for ce in sorted(cesummary):
                if ce not in cetosite:
                    continue
                if cetosite[ce] not in sitesummary:
                    sitesummary[cetosite[ce]] = {'CEList': [ce]}
                    if 'Running' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Running'] = cesummary[ce]['Running']
                    else:
                        sitesummary[cetosite[ce]]['Running'] = 0
                    if 'Done' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Done'] = cesummary[ce]['Done']
                    else:
                        sitesummary[cetosite[ce]]['Done'] = 0
                    if 'Failed' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Failed'] = cesummary[ce]['Failed']
                    else:
                        sitesummary[cetosite[ce]]['Failed'] = 0
                    if 'Waiting' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Waiting'] = cesummary[ce]['Waiting']
                    else:
                        sitesummary[cetosite[ce]]['Waiting'] = 0
                    if 'Aborted' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Aborted'] = cesummary[ce]['Aborted']
                    else:
                        sitesummary[cetosite[ce]]['Aborted'] = 0
                    if 'Submitted' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Submitted'] = cesummary[ce]['Submitted']
                    else:
                        sitesummary[cetosite[ce]]['Submitted'] = 0
                    if 'Scheduled' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Scheduled'] = cesummary[ce]['Scheduled']
                    else:
                        sitesummary[cetosite[ce]]['Scheduled'] = 0

                else:
                    sitesummary[cetosite[ce]]['CEList'].append(ce)
                    if 'Running' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Running'] += cesummary[ce]['Running']
                    if 'Done' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Done'] += cesummary[ce]['Done']
                    if 'Failed' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Failed'] += cesummary[ce]['Failed']
                    if 'Waiting' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Waiting'] += cesummary[ce]['Waiting']
                    if 'Aborted' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Aborted'] += cesummary[ce]['Aborted']
                    if 'Submitted' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Submitted'] += cesummary[ce]['Submitted']
                    if 'Scheduled' in cesummary[ce]:
                        sitesummary[cetosite[ce]]['Scheduled'] += cesummary[ce]['Scheduled']
#            gLogger.debug("sitesummary : %s" % str(sitesummary))
        else:
            result = self._getCESiteDict()
            if not result['OK']:
                return result
            cetosite = result['Value']['CEtoSite']
            sitetoce = result['Value']['SitetoCE']
            for site in sitetoce:
                if site in sitetoce:
                    sitesummary[site] = {'CEList': sorted(sitetoce[site].keys())}
                    sitesummary[site]['NoOfCEs'] = len(sitetoce[site].keys())
                else:
                    sitesummary[site] = {'CEList': []}
                    sitesummary[site]['NoOfCEs'] = 0

        sitelists = self.getSiteList()
        for site in sorted(sitelists):

            ele = site.split('.')
            result = gConfig.getOptionsDict('Resources/Sites/%s/%s' % (ele[0], site))
            if not result['OK']:
                continue
            optionsdict = result['Value']
            status = "production"
            if 'Status' in optionsdict:
                status = optionsdict['Status']
            if status not in ['production', 'commissioning']:
                continue
            if 'mode' in self.request.arguments and self.request.arguments['mode'][0] == '1' and site not in sitesummary:
                continue
            x = '0'
            y = '0'
            if 'Coordinates' in optionsdict:
                [x, y] = optionsdict['Coordinates'].split(':')
            ce_site[site] = {'longlat': [float("%.4f" % float(x)), float("%.4f" % float(y))]}
            if 'mode' in self.request.arguments and self.request.arguments['mode'][0] == '1':
                ce_site[site]['Done'] = sitesummary[site]['Done']
                ce_site[site]['Failed'] = sitesummary[site]['Failed']
                ce_site[site]['Running'] = sitesummary[site]['Running']
                ce_site[site]['Waiting'] = sitesummary[site]['Waiting']
                ce_site[site]['Stalled'] = sitesummary[site]['Stalled']
            elif 'mode' in self.request.arguments and self.request.arguments['mode'][0] == '2' and site in sitesummary:
                ce_site[site]['Done'] = sitesummary[site]['Done']
                ce_site[site]['Failed'] = sitesummary[site]['Failed'] + sitesummary[site]['Aborted']
                ce_site[site]['Running'] = sitesummary[site]['Running']
                ce_site[site]['Waiting'] = sitesummary[site]['Waiting'] + sitesummary[site]['Scheduled']
            else:
                if site in sitesummary and 'NoOfCEs' in sitesummary[site]:
                    ce_site[site]['NoOfCEs'] = sitesummary[site]['NoOfCEs']
                else:
                    ce_site[site]['NoOfCEs'] = 0
                if site in sitesummary and 'CEList' in sitesummary[site]:
                    ce_site[site]['CEList'] = sitesummary[site]['CEList']
                else:
                    ce_site[site]['CEList'] = []

            ce_site[site]['tier'] = 0
            ce_site[site]['siteMaskStatus'] = 'Allowed'
            ce_site[site]['siteStatus'] = status

        return S_OK(ce_site)

    def _getCESiteDict(self):
        ret = {'CEtoSite': {}, 'SitetoCE': {}}
        result = gConfig.getSections('Resources/Sites')
        if not result['OK']:
            return result
        cmptypes = result['Value']
        for cmptype in cmptypes:
            result = gConfig.getSections('Resources/Sites/%s' % str(cmptype))
            if not result['OK']:
                continue
            sites = result['Value']
            for site in sites:
                result = gConfig.getSections('Resources/Sites/%s/%s/CEs' % (str(cmptype), str(site)))
                if not result['OK']:
                    continue
                ces = result['Value']
                for ce in ces:
                    result = gConfig.getSections('Resources/Sites/%s/%s/CEs/%s/Queues' % (str(cmptype), str(site), str(ce)))
                    if not result['OK']:
                        continue
                    queues = result['Value']
                    if site in ret['SitetoCE']:
                        ret['SitetoCE'][site][ce] = ", ".join(sorted(queues))
                    else:
                        ret['SitetoCE'][site] = {ce: ", ".join(sorted(queues))}
                    ret['CEtoSite'][ce] = site
        return S_OK(ret)
