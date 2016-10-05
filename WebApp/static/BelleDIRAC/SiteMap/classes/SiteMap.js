var gMarkedSites = [];
var gMarkers = {};
var gAllowActions = false;
var mode = 0;

Ext.define('BelleDIRAC.SiteMap.classes.SiteMap', {
                                                  extend : 'Ext.dirac.core.Module',
                                                  requires : [ 'Ext.util.*', 'Ext.panel.Panel', "Ext.form.field.Text", "Ext.button.Button", "Ext.menu.Menu", "Ext.form.field.ComboBox", "Ext.layout.*", "Ext.form.field.Date", "Ext.form.field.TextArea", "Ext.form.field.Checkbox", "Ext.form.FieldSet", "Ext.Button", "Ext.dirac.utils.DiracMultiSelect", "Ext.util.*", "Ext.toolbar.Toolbar", "Ext.data.Record" ],
                                                  loadState : function(oData)
  {

    var me = this;

  },


initComponent : function()
  {
    var me = this;

    if (GLOBAL.VIEW_ID == "desktop") {

      me.launcher.title = "Site Map";
      me.launcher.maximized = true;

      var oDimensions = GLOBAL.APP.MAIN_VIEW.getViewMainDimensions();
      var iDim = Math.floor(Math.min(oDimensions[0], oDimensions[1]) / 2);
      me.launcher.width = 2 * iDim;
      me.launcher.height = iDim;

      me.launcher.x = 0;
      me.launcher.y = 0;

    }

    if (GLOBAL.VIEW_ID == "tabs") {

      me.launcher.title = "Site Map";
      me.launcher.maximized = true;

      var oDimensions = GLOBAL.APP.MAIN_VIEW.getViewMainDimensions();
      var iDim = Math.floor(Math.min(oDimensions[0], oDimensions[1]) / 2);
      me.launcher.width = 2 * iDim;
      me.launcher.height = iDim;

      me.launcher.x = 0;
      me.launcher.y = 0;

    }

    Ext.apply(me, {
                   layout : 'border',
                   bodyBorder : false,
                   defaults : {
                               collapsible : true,
                               split : false
                              }
                  });

    me.callParent(arguments);

  },

buildUI : function()
  {

    var me = this;

    var divPanel = new Ext.Panel({
                                  region : 'center',
                                  html : '<div id="map_canvas" style="height:100%" />'
    });

    me.btnRefreshMap = Ext.create("Ext.button.Button", {
                                                        text : "Refresh data",
                                                        handler : function()
                                                                  {
                                                                   removeMarkers();
                                                                   getDataAndDraw();
                                                                  },
                                                        iconCls : "dirac-icon-refresh"
                                                       });

    me.btnSiteMap = Ext.create("Ext.button.Button", {
                                                     text : "Site info.",
                                                     handler : function()
                                                               {
                                                                mode = 0;
                                                                removeMarkers();
                                                                getDataAndDraw();
                                                                addLe:!d();
                                                               },
                                                     iconCls : "dirac-icon-refresh"
                                                    });

    me.btnJobMap = Ext.create("Ext.button.Button", {
                                                    text : "Job info.",
                                                    handler : function()
                                                              {
                                                               mode = 1;
                                                               removeMarkers();
                                                               getDataAndDraw();
                                                               addLegend();
                                                              },
                                                    iconCls : "dirac-icon-refresh"
                                                   });

    me.btnPilotMap = Ext.create("Ext.button.Button", {
                                                      text : "Pilot info.",
                                                      handler : function()
                                                                {
                                                                 mode = 2;
                                                                 removeMarkers();
                                                                 getDataAndDraw();
                                                                 addLegend();
                                                                },
                                                      iconCls : "dirac-icon-refresh"
                                                     });


    var mapPanel = Ext.create("Ext.panel.Panel", {
                                                  region : "center",
                                                  layout : 'border',
                                                  header : false,
                                                  bbar : Ext.create("Ext.toolbar.Toolbar", {
                                                                                            items : [ me.btnRefreshMap, me.btnSiteMap, me.btnJobMap, me.btnPilotMap ]
                                                                                           }),
                                                  items : [ divPanel ]
                                                 });

    me.add([ mapPanel ]);
    Ext.onReady(function() {
                            initMap();
                            getDataAndDraw();
                            addLegend();
    });
  }
});

function addLegend()
{
  var bandwidthDiv = document.createElement('h3');
  bandwidthDiv.style.fontFamily = 'Helvetica';
  bandwidthDiv.style.fontSize = '12px';
  bandwidthDiv.style.color = 'black';
  bandwidthDiv.style.padding = '10px';
  bandwidthDiv.style.margin = '10px';
  bandwidthDiv.style.paddingLeft = '10px';
  bandwidthDiv.style.paddingRight = '10px';
  bandwidthDiv.style.backgroundColor = 'gray';
  bandwidthDiv.style.border = "thin solid black";;
  bandwidthDiv.innerHTML = '<b>Legend</b>';
  if (mode == 1 || mode == 2) {
    bandwidthDiv.innerHTML += '<br /><font color="#0000FF"> &#9632;: Done</font>';
    bandwidthDiv.innerHTML += '<br /><font color="#FF0000"> &#9632;: Failed</font>';
    bandwidthDiv.innerHTML += '<br /><font color="#FFA500"> &#9632;: Waiting</font>';
    if (gMap.controls[google.maps.ControlPosition.LEFT_BOTTOM].getLength() > 0) {
      gMap.controls[google.maps.ControlPosition.LEFT_BOTTOM].pop();
    }
    gMap.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(bandwidthDiv);
  } else {
    bandwidthDiv.innerHTML += '<br /><font color="#00FF00"> &#9679;: In production</font>';
    bandwidthDiv.innerHTML += '<br /><font color="#FFFF00"> &#9679;: Commissioning</font>';
    if (gMap.controls[google.maps.ControlPosition.LEFT_BOTTOM].getLength() > 0) {
      gMap.controls[google.maps.ControlPosition.LEFT_BOTTOM].pop();
    }
    gMap.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(bandwidthDiv);
  }

}

function getDataAndDraw()
{
  var me = this;
  Ext.get("app-dirac-loading").show();
  Ext.Ajax.request({
                    url : GLOBAL.BASE_URL + 'SiteMap/getSitesData',
                    params : {
                              mode : mode
                             },
                    scope : me,
                    success : function(response)
                              {
                               Ext.get("app-dirac-loading").hide();
                               var response = Ext.JSON.decode(response.responseText);
                               if (response.success == "true") {
                                     gSiteData = response.result;
                                     drawSites();
                               }
                              },
                    failure : function(response)
                              {
                               Ext.dirac.system_info.msg("Notification", 'Operation failed due to a network error.<br/> Please try again later !');
                              }
                   });
}

function initMap()
{
  if (document.getElementById('map_canvas')) {
    gOverInfoWindow = new google.maps.InfoWindow({content: 'contentString'});
    gAsiaLatLong = new google.maps.LatLng(11.456950, 100.0);
    var mapOptions = {
                      zoom: 3,
                      center: gAsiaLatLong,
                      mapTypeId: google.maps.MapTypeId.SATELLITE
                     };
    gMap = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  }
}

function drawSites()
{
  for (var siteName in gSiteData) {
    var siteData = gSiteData[ siteName ];
    if (! siteData.siteMaskStatus)
      continue
    var activity = 'static';
    var extension = 'png';
    var siteType = 'normal';
    var status = 'green';
    if (gSiteData[ siteName ].siteStatus == "commissioning") {
      status = 'yellow';
    }
    var icon = GLOBAL.BASE_URL + "static/BelleDIRAC/SiteMap/images/" + siteType + "_" + status + "_" + activity + "." + extension;
    var gIconCache = {};
    if (! gIconCache.siteStatus)
      gIconCache.siteStatus = {};
    if (! gIconCache.siteStatus[ icon ]) {
      gIconCache.siteStatus[ icon ] = new google.maps.MarkerImage(icon,
                                                                  new google.maps.Size(22, 22),
                                                                  new google.maps.Point(0, 0),
                                                                  new google.maps.Point(11, 11));
    }
    addMarker(siteName, siteData, gIconCache.siteStatus[ icon ]);
  }
}

function addMarker(siteName, siteData, icon)
{
  if (! siteData.longlat)
    return
    if (! gMarkers[ siteName ]) {
      var longlat = siteData.longlat;
      var zind = 10000;
      if (siteData.Running) {
        zind = 10000 - siteData.Running;
        if (zind < 0) { zind = 0; }
      }
      var markerOps = {
                       position:  new google.maps.LatLng(parseFloat(longlat[1]), parseFloat(longlat[0])),
                       title: siteName,
                       map : gMap,
                       tierLevel : siteData.tier,
                       icon : icon,
                       zIndex : zind
                      }
      var marker = new google.maps.Marker(markerOps);
      attachInfoWindow(marker, siteName, siteData);
      gMarkers[ siteName ] = marker;
      if (siteData.siteMaskStatus == "Allowed") {
        showSiteStatusInfo(marker, siteName, siteData);
        if (siteData.infoWindow) {
          siteData.infoWindow.close();
          if (siteData.ImageURI) {
            gMarkers[ siteName ].setIcon(siteData.ImageURI);
          }
        }
      }
    } else {
      gMarkers[ siteName ].setIcon(icon);
      gMarkers[ siteName ].setMap(gMap);
    }
  gMarkedSites.push(siteName);
}

function removeMarkers()
{
  for (siteName in gMarkers) {
    gMarkers[ siteName ].setMap(null);
  }
  gMarkers = {};
  gMarkedSites = [];
}

function attachInfoWindow(marker, siteName, siteData)
{
  marker.siteListener = google.maps.event.addListener(marker, 'click', function() {
    gOverInfoWindow.close();
    showSiteStatusInfo(marker, siteName, siteData);
  });
}

function showSiteStatusInfo(marker, site, siteData)
{
  if (! siteData.infoWindow) {
    var contentString = '<div style="width:100%">' +
                        getSiteDescriptionHTML(site, siteData) +
                        '</div>' +
                        '</div>';

    siteData.infoWindow = new google.maps.InfoWindow({ content : contentString });
  }
  siteData.infoWindow.open(gMap, marker);
  if (mode == 1) {
    var data = google.visualization.arrayToDataTable([['Status', 'No. of jobs', { role: 'style' }], ['Done', siteData.Done,
                                                      'green'], ['Failed', siteData.Failed, 'red'], ['Waiting', siteData.Waiting, 'orange']]);
    var radius = 20;
    if (siteData.Running > 8) {
      radius = parseInt(10.*Math.log(siteData.Running));
    }
    var options = {
                   title: "No. of jobs",
                   legend: 'none',
                   width: radius,
                   height: radius,
                   chartArea: {width: '100%', height: '100%'},
                   backgroundColor: 'transparent',
                  };

    var chart_div = document.getElementById('bodyContent' + site);
    var chart = new google.visualization.PieChart(chart_div);
    google.visualization.events.addListener(chart, 'ready', function() {
      siteData.ImageURI =  chart.getImageURI();
    });
    chart.draw(data, options);
  } else if (mode == 2) {
    var data = google.visualization.arrayToDataTable([['Status', 'No. of pilots', { role: 'style' }], ['Done', siteData.Done,
                                                      'green'], ['Failed', siteData.Failed, 'red'], ['Waiting', siteData.Waiting, 'orange']]);
    var radius = 20;
    if (siteData.Running > 8) {
      radius = parseInt(10.*Math.log(siteData.Running));
    }
    var options = {
                   title: "No. of pilots",
                   legend: 'none',
                   width: radius,
                   height: radius,
                   chartArea: {width: '100%', height: '100%'},
                   backgroundColor: 'transparent',
                  };

    var chart_div = document.getElementById('bodyContent' + site);
    var chart = new google.visualization.PieChart(chart_div);
    google.visualization.events.addListener(chart, 'ready', function() {
      siteData.ImageURI =  chart.getImageURI();
    });
    chart.draw(data, options);
  }
}

function getSiteDescriptionHTML(siteName, siteData, extended)
{
  var desc  = '<h2 style="border-bottom:1px solid;width:100%">' + siteName + '</h2>';
  desc += '<div id="bodyContent">';
  desc += '<table>';
  desc += '<tr><td>Site status:</td><td>' + siteData.siteStatus + '</td></tr>';
  lon = parseFloat(siteData.longlat[0]).toFixed(3);
  lat  = parseFloat(siteData.longlat[1]).toFixed(3);
  desc += '<tr><td>Geo:</td><td> ' + lon + 'º E, ' + lat + 'º N</td></tr>';
  if (mode == 1) {
    desc += '<tr><td>Running jobs:</td><td>' + siteData.Running + '</td></tr>';
    desc += '<tr><td>Done jobs:</td><td>' + siteData.Done + '</td></tr>';
    desc += '<tr><td>Failed jobs:</td><td>' + siteData.Failed + '</td></tr>';
    desc += '<tr><td>Waiting jobs:</td><td>' + siteData.Waiting + '</td></tr>';
  } else if (mode == 2) {
    desc += '<tr><td>Running pilots:</td><td>' + siteData.Running + '</td></tr>';
    desc += '<tr><td>Done pilots:</td><td>' + siteData.Done + '</td></tr>';
    desc += '<tr><td>Failed pilots:</td><td>' + siteData.Failed + '</td></tr>';
    desc += '<tr><td>Waiting pilots:</td><td>' + siteData.Waiting + '</td></tr>';
  } else {
    if (siteData.NoOfCEs > 0) {
      desc += ' <tr><td> CE: </td><td>' + siteData.CEList[0] + '</td></tr>';
      for (var i = 1 ; i < siteData.NoOfCEs ; i++) {
        desc += ' <tr><td>  </td><td>' + siteData.CEList[i] + '</td></tr>';
      }
    }
  }
  desc += '</table>';
  desc += '<div id="bodyContent' + siteName + '" style="width: 50px; height: 50px;"></div>';


  return desc;
}
