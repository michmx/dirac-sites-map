// Sites map v0.2  -- Michel

google.load( 'visualization', '1', { packages:['corechart'] });

// Stores the info from the server
gSiteData = {};

var SEsites = [];
var CEsites = [];
var SELines = [];
var CELines = [];

// To know the status of the sites
var CEvisible = true;
var SEvisible = true;
var SElinesvisible = true;
var CElinesvisible = true;


// Contains the info of the map outside the initialize function
var pointMap;


Ext.define('BelleDIRAC.TransfersMap.classes.TransfersMap', {
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

            me.launcher.title = "Transfers Map";
            me.launcher.maximized = true;

            var oDimensions = GLOBAL.APP.MAIN_VIEW.getViewMainDimensions();
            var iDim = Math.floor(Math.min(oDimensions[0], oDimensions[1]) / 2);
            me.launcher.width = 2 * iDim;
            me.launcher.height = iDim;

            me.launcher.x = 0;
            me.launcher.y = 0;

        }

        if (GLOBAL.VIEW_ID == "tabs") {

            me.launcher.title = "Transfers Map";
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

        me.btnCEMap = Ext.create("Ext.button.Button", {
            text : "Show/Hide CEs",
            handler : function()
            {
                toogleCE();
            },
            iconCls : "dirac-icon-reset"
        });

        me.btnSEMap = Ext.create("Ext.button.Button", {
            text : "Show/Hide SEs",
            handler : function()
            {
                toogleSE();
            },
            iconCls : "dirac-icon-reset"
        });

        me.btnCELinesMap = Ext.create("Ext.button.Button", {
            text : "CE connections",
            handler : function()
            {
                toogleCELines();
            },
            iconCls : "dirac-icon-reset"
        });

        me.btnSELinesMap = Ext.create("Ext.button.Button", {
            text : "SE connections",
            handler : function()
            {
                toogleSELines();
            },
            iconCls : "dirac-icon-reset"
        });


        var mapPanel = Ext.create("Ext.panel.Panel", {
            region : "center",
            layout : 'border',
            header : false,
            bbar : Ext.create("Ext.toolbar.Toolbar", {
                items : [ me.btnRefreshMap, me.btnCEMap, me.btnSEMap, me.btnCELinesMap, me.btnSELinesMap ]
            }),
            items : [ divPanel ]
        });

        me.add([ mapPanel ]);
        Ext.onReady(function() {
            initMap();
            getDataAndDraw();
        });
    }
});


function getDataAndDraw()
{
    var me = this;
    Ext.get("app-dirac-loading").show();
    Ext.Ajax.request({
        url : GLOBAL.BASE_URL + 'TransfersMap/getSitesData',
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
                printGlobal();
            }
        },
        failure : function(response)
        {
            Ext.dirac.system_info.msg("Notification", 'Operation failed due to a network error.<br/> Please try again later !');
        }
    });
}

function initMap() {
    // To modify the style of the map. Check the Google Maps API manual for options.
    var mapStyle =
        [
            {
                "stylers": [
                    "visibility",
                    "off"
                ],
                "elementType": "all",
                "featureType": "all"
            },
            {
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "color": "#fcfcfc"
                    }
                ],
                "elementType": "labels",
                "featureType": "landscape"
            },
            {
                "stylers": [
                    "visibility",
                    "on"
                ],
                "elementType": "geometry",
                "featureType": "landscape"
            },
            {
                "stylers": [
                    "visibility",
                    "off"
                ],
                "elementType": "labels",
                "featureType": "water"
            },
            {
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "hue": "#5f94ff"
                    },
                    {
                        "lightness": 60
                    }
                ],
                "elementType": "geometry",
                "featureType": "water"
            }
        ];

    if (document.getElementById('map_canvas')) {
        gOverInfoWindow = new google.maps.InfoWindow({content: 'contentString'});

        var mapOptions = {
            center: new google.maps.LatLng(30., 0.5463),
            zoom: 2,
            styles: mapStyle,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            mapTypeControl: true,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        }

        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

        var ViewDiv = document.createElement('div');
        var Asia = new ViewControl(ViewDiv, map, 'Asia', [37.6, 110.6], 4);
        var Europe = new ViewControl(ViewDiv, map, 'Europe', [46.0, 14.5], 5);
        var America = new ViewControl(ViewDiv, map, 'America', [ 30.8, -87.6], 4);
        var Oceania = new ViewControl(ViewDiv, map, 'Oceania', [ -30.8, 140.6], 5);
        var Oceania = new ViewControl(ViewDiv, map, 'Global', [ 30., 0.5463], 2);
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(ViewDiv);

        pointMap = map;

    }
}

function printGlobal(){
    global_statistics = gSiteData['Global'];
    var bandwidthDiv = document.createElement('h3');
    bandwidthDiv.style.fontFamily='Helvetica';
    bandwidthDiv.style.fontSize='12px';
    bandwidthDiv.style.color = 'black';
    bandwidthDiv.style.padding = '10px';
    bandwidthDiv.style.margin = '10px';
    bandwidthDiv.style.paddingLeft = '10px';
    bandwidthDiv.style.paddingRight = '10px';
    bandwidthDiv.style.backgroundColor = 'white';
    bandwidthDiv.style.border = "thin solid black";;
    bandwidthDiv.innerHTML = '<b>Total throughput: ' + global_statistics['Throughput'] + ' MB/s</b>';
    bandwidthDiv.innerHTML += '<br /><b>Efficiency: ' + global_statistics['Efficiency'] + '%</b><br />';
    bandwidthDiv.innerHTML += '<br /><b>Compunting sites: '+ global_statistics['CEsites'] +'</b>';
    bandwidthDiv.innerHTML += '<br /><b>Storage element sites: '+ global_statistics['SEsites'] + '</b>';
    bandwidthDiv.innerHTML += '<br /><b>Total connections: '+ global_statistics['Connections'] + '</b>';
    bandwidthDiv.innerHTML += '<br /><br /><b>Accounting time: '+ global_statistics['Accounting_time'] + ' hours' + '</b>';
    bandwidthDiv.innerHTML += '<br /><br /><b>Last updated: <br />'+ global_statistics['Updated'] + '</b>';
    pointMap.controls[google.maps.ControlPosition.TOP_LEFT].push(bandwidthDiv);
}

function drawSites()
{
    map = pointMap;
    // To display multiple markers at the same point
    var oms = new OverlappingMarkerSpiderfier(map,
        {markersWontMove: false, markersWontHide: false, nearbyDistance: 20, circleSpiralSwitchover: Infinity});
    var oms_se = new OverlappingMarkerSpiderfier(map,
        {markersWontMove: false, markersWontHide: false, nearbyDistance: 20, circleSpiralSwitchover: Infinity});

    ce_sites = gSiteData['CEsites'];
    for (ce in ce_sites) {
        var data = google.visualization.arrayToDataTable([['Status', 'No. of jobs'], ['Done', ce_sites[ce]['Done']],
                                                          ['Failed', ce_sites[ce]['Failed']]]);

        var radius = ce_sites[ce]['Radius'];
        var options = {
               title: "No. of jobs",
               legend: 'none',
               width: radius,
               height: radius,
               chartArea: {width: '100%', height: '100%'},
               backgroundColor: 'transparent',
               colors: ['#FF0000', '#04FB03'],
               pieStartAngle: 270,
               pieSliceBorderColor: '#000000',
               pieSliceText: 'none',
               reverseCategories: true

        };


        var chart_div = document.getElementById('piechart');

        var chart = new google.visualization.PieChart(chart_div);
        var path = ''

        google.visualization.events.addListener(chart, 'ready', function() {
            path =  chart.getImageURI();

        });
        chart.draw(data, options);

        var ce_position = {lat: ce_sites[ce]['Coordinates'][0], lng: ce_sites[ce]['Coordinates'][1]};

        var ce_marker = new google.maps.Marker({
            position: ce_position,
            map: map,
            icon: path,
            title: ce,
            //zIndex: ce_site[3],
            html: ce_sites[ce]['Description']
        });

        oms.addMarker(ce_marker);
        CEsites.push(ce_marker);

        // Make the connections
        for(destination in ce_sites[ce]['Destinations']){
            var lineCoordinates = [ce_position, {lat:ce_sites[ce]['Destinations'][destination]['Coordinates'][0], lng: ce_sites[ce]['Destinations'][destination]['Coordinates'][1]}]

            var flightPath = new google.maps.Polyline({
              path: lineCoordinates,
              geodesic: true,
              strokeColor: ce_sites[ce]['Destinations'][destination]['color'],
              strokeOpacity: 0.7,
              strokeWeight: ce_sites[ce]['Destinations'][destination]['stroke'],
              html: ce_sites[ce]['Destinations'][destination]['Description']
            });
            flightPath.setMap(map);
            flightPath.addListener('click',function(e)
            {
              infowindow = new google.maps.InfoWindow({content: "Loading..."});
              infowindow.setContent(this.html);
              infowindow.setPosition(e.latLng);
              infowindow.open(map);

            });
            CELines.push(flightPath);
        }
    }

    oms.addListener('click',function(marker,event){
      infowindow = new google.maps.InfoWindow({content: "Loading..."});
      infowindow.setContent(marker.html);
      infowindow.open(map, marker);
    });

    oms.addListener('spiderfy', function(markers) {
        infowindow.close();
    });

    se_sites = gSiteData['SEsites'];
    for (se in se_sites) {

        var se_position = {lat: se_sites[se]['Coordinates'][0], lng: se_sites[se]['Coordinates'][1]};
        var se_icon = GLOBAL.BASE_URL + "static/BelleDIRAC/SiteMap/images/" + se_sites[se]['Icon']['url'];
        var se_marker = new google.maps.Marker({

            position: se_position,
            map: map,
            icon: {
               url: se_icon,
               origin: new google.maps.Point(0,0),
               anchor: new google.maps.Point(35, 0),
               size: new google.maps.Size(40, 40)
            },
            title: se,
            html: se_sites[se]['Description']
        });

        oms_se.addMarker(se_marker);
        SEsites.push(se_marker);

        // Make the connections
        for(destination in se_sites[se]['Destinations']){
            var lineCoordinates = [se_position, {lat:se_sites[se]['Destinations'][destination]['Coordinates'][0], lng: se_sites[se]['Destinations'][destination]['Coordinates'][1]}]

            var flightPath = new google.maps.Polyline({
              path: lineCoordinates,
              geodesic: true,
              strokeColor: se_sites[se]['Destinations'][destination]['color'],
              strokeOpacity: 0.7,
              strokeWeight: se_sites[se]['Destinations'][destination]['stroke'],
              html: se_sites[se]['Destinations'][destination]['Description']
            });
            flightPath.setMap(map);
            flightPath.addListener('click',function(e)
            {
              infowindow = new google.maps.InfoWindow({content: "Loading..."});
              infowindow.setContent(this.html);
              infowindow.setPosition(e.latLng);
              infowindow.open(map);

            });
            SELines.push(flightPath);
        }

    }

    oms_se.addListener('click',function(marker,event){
      infowindow = new google.maps.InfoWindow({content: "Loading..."});
      infowindow.setContent(marker.html);
      infowindow.open(map, marker);
    });

    oms_se.addListener('spiderfy', function(markers) {
        infowindow.close();
    });

    CEvisible = true;
    CElinesvisible = true;
    SElinesvisible = true;
    SEvisible = true;

    pointMap = map;

}

function removeMarkers(){
    setMapOnAll(CEsites,null);
    CEvisible = false;
    setMapOnAll(CELines,null);
    CElinesvisible = false;
    setMapOnAll(SEsites,null);
    SEvisible = false;
    setMapOnAll(SELines,null);
    SElinesvisible = false;

    SEsites = [];
    CEsites = [];
    SELines = [];
    CELines = [];

}

// Show or hide the sites
function toogleCE(){
  if(CEvisible){
    setMapOnAll(CEsites,null);
    CEvisible = false;
    setMapOnAll(CELines,null);
    CElinesvisible = false;
  }
  else{
   setMapOnAll(CEsites,pointMap);
   CEvisible = true;
  }
}

function toogleSE(){
  if(SEvisible){
    setMapOnAll(SEsites,null);
    SEvisible = false;
    setMapOnAll(SELines,null);
    SElinesvisible = false;
  }
  else{
   setMapOnAll(SEsites,pointMap);
   SEvisible = true;
  }
}

function toogleSELines(){
  if(SElinesvisible){
    setMapOnAll(SELines,null);
    SElinesvisible = false;
  }
  else{
   setMapOnAll(SEsites,pointMap);
   SEvisible = true;
   setMapOnAll(SELines,pointMap);
   SElinesvisible = true;
  }
}

function toogleCELines(){
  if(CElinesvisible){
    setMapOnAll(CELines,null);
    CElinesvisible = false;
  }
  else{
   setMapOnAll(CEsites,pointMap);
   CEvisible = true;
   setMapOnAll(CELines,pointMap);
   CElinesvisible = true;
  }
}



function ViewControl(controlDiv, map, name, latLng, zoom) {
  controlDiv.style.padding = '10px';
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.border='1px solid';
  controlUI.style.padding = '10px';
  controlUI.style.margin = '10px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlDiv.appendChild(controlUI);
  var controlText = document.createElement('div');
  controlText.style.fontFamily='Helvetica';
  controlText.style.fontSize='12px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = '<b>'+name+'<b>'
  controlUI.appendChild(controlText);

  google.maps.event.addDomListener(controlUI, 'click', function() {
    map.setCenter(new google.maps.LatLng(latLng[0], latLng[1]));
    map.setZoom(zoom);
  });
}

// Sets the map on all markers in the array.
function setMapOnAll(sites,map) {
  for (var i = 0; i < sites.length; i++){
    sites[i].setMap(map);
  }
}
