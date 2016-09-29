var gMarkedSites = [];
var gMarkers = {};
var gAllowActions = false;

Ext.define('BelleDIRAC.CloudMap.classes.CloudMap', {
	extend : 'Ext.dirac.core.Module',
	requires : [ 'Ext.util.*', 'Ext.panel.Panel', "Ext.form.field.Text", "Ext.button.Button", "Ext.menu.Menu", "Ext.form.field.ComboBox", "Ext.layout.*", "Ext.form.field.Date", "Ext.form.field.TextArea", "Ext.form.field.Checkbox", "Ext.form.FieldSet", "Ext.Button", "Ext.dirac.utils.DiracMultiSelect", "Ext.util.*", "Ext.toolbar.Toolbar", "Ext.data.Record" ],

	loadState : function(oData) {

		var me = this;

	},


	initComponent : function() {
		var me = this;

		if (GLOBAL.VIEW_ID == "desktop") {

			me.launcher.title = "Cloud Map";
			me.launcher.maximized = true;

			var oDimensions = GLOBAL.APP.MAIN_VIEW.getViewMainDimensions();
			var iDim = Math.floor(Math.min(oDimensions[0], oDimensions[1]) / 2);
			me.launcher.width = 2 * iDim;
			me.launcher.height = iDim;

			me.launcher.x = 0;
			me.launcher.y = 0;

		}

		if (GLOBAL.VIEW_ID == "tabs") {

			me.launcher.title = "Cloud Map";
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

	buildUI : function() {

		var me = this;

		var divPanel = new Ext.Panel({ 
									region : 'center', 
									html : '<div id="map_canvas" style="height:100%" />'
		});

		me.btnRefreshMap = Ext.create("Ext.button.Button", {
			text : "Refresh data",
			handler : function() {
				removeMarkers();
				getDataAndDraw();
			},
			iconCls : "dirac-icon-refresh"

		});

		var mapPanel = Ext.create("Ext.panel.Panel", {
			region : "center",
			layout : 'border',
			header : false,
			bbar : Ext.create("Ext.toolbar.Toolbar", {
				items : [ me.btnRefreshMap ]
			}),
			items : [ divPanel ]
		});

		me.add([ mapPanel ]);
		Ext.onReady(function(){
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
			url : GLOBAL.BASE_URL + 'CloudMap/getSitesData',
			params : {
				siteName : 'CLOUD.CC1_Krakow.pl'
			},
			scope : me,
			success : function(response) {
				Ext.get("app-dirac-loading").hide();
				var response = Ext.JSON.decode(response.responseText);
				if (response.success == "true") {
					gSiteData = response.result;
					drawSites();
				}
			},
			failure : function(response) {

				Ext.dirac.system_info.msg("Notification", 'Operation failed due to a network error.<br/> Please try again later !');
			}
		});
}

function initMap()
{
	if( document.getElementById( 'map_canvas' ) )
	{
		gOverInfoWindow = new google.maps.InfoWindow({content: 'contentString'});
		gAsiaLatLong = new google.maps.LatLng( 11.456950, 100.0 );
		var mapOptions = {
			      zoom: 3,
			      center: gAsiaLatLong,
			      mapTypeId: google.maps.MapTypeId.SATELLITE
			    };
		gMap = new google.maps.Map( document.getElementById("map_canvas"), mapOptions );	
	}
}

function drawSites()
{
	for( var siteName in gSiteData )
	{
		var siteData = gSiteData[ siteName ];
		if( ! siteData.siteMaskStatus )
			continue
		var activity = 'static';
		var extension = 'png';
		if( siteData.tier < 2 )
			var siteType = 'highlight';
		else
			var siteType = 'normal';
		if( siteData.siteMaskStatus == 'Allowed')
			var status = 'green';
		else
			var status = 'red';
		if( siteData.jobSummaryRamp )
		{
			var ramp = siteData.jobSummaryRamp;
			if( ramp.Running > 10 )
			{
				var activity = 'up';
				var extension = 'gif';
			}
			if( ramp.Running < - 10 )
			{
				var activity = 'down';
				var extension = 'gif';
			}
		}
		if (siteName.match(/^CLOUD*/))
		{
			var siteType = 'cloud';

		}
		var icon = GLOBAL.BASE_URL + "static/BelleDIRAC/CloudMap/images/"+siteType+"_"+status+"_"+activity+"."+extension;
		var gIconCache = {};
		if( ! gIconCache.siteStatus )
			gIconCache.siteStatus = {};
		if( ! gIconCache.siteStatus[ icon ] )
		{
			gIconCache.siteStatus[ icon ] = new google.maps.MarkerImage( icon,
									new google.maps.Size(22,22),
									new google.maps.Point(0,0),
									new google.maps.Point(11,11) );
		}
		addMarker( siteName, siteData, gIconCache.siteStatus[ icon ] );
	}
	// setStatusMessage( "" ); 
}

function addMarker( siteName, siteData, icon )
{
	if( ! siteData.longlat )
		return
	if( ! gMarkers[ siteName ] )
	{
		var longlat = siteData.longlat;
		var markerOps = {
				position:  new google.maps.LatLng( parseFloat( longlat[1] ), parseFloat( longlat[0] ) ), 
				title: siteName,
				map : gMap,
				tierLevel : siteData.tier,
				icon : icon,
				zIndex : 10 - siteData.tier
		  	}
		var marker = new google.maps.Marker( markerOps );
		attachInfoWindow( marker, siteName, siteData );
		gMarkers[ siteName ] = marker;
		if (siteData.siteMaskStatus == "Allowed")
		{
			showSiteStatusInfo( marker, siteName, siteData );
		}
	}
	else
	{
		gMarkers[ siteName ].setIcon( icon );
		gMarkers[ siteName ].setMap( gMap );
	}
	gMarkedSites.push( siteName );
}

function removeMarkers()
{
	for( siteName in gMarkers )
	{
		gMarkers[ siteName ].setMap( null );
	}
	gMarkers = {};
	gMarkedSites = [];
}

function attachInfoWindow( marker, siteName, siteData )
{
	marker.siteListener = google.maps.event.addListener( marker, 'click', function() {
		gOverInfoWindow.close();
		showSiteStatusInfo( marker, siteName, siteData );
	  });
}

function showSiteStatusInfo( marker, site, siteData )
{
	if( ! siteData.infoWindow )
	{
		var contentString = '<div style="width:100%">'+
		getSiteDescriptionHTML( site, siteData )+
	    '</div>'+
	    '</div>';

		siteData.infoWindow = new google.maps.InfoWindow({
									content : contentString
								});

	}
	siteData.infoWindow.open( gMap, marker );
}

function getSiteDescriptionHTML( siteName, siteData, extended )
{
	var desc  = '<h2 style="border-bottom:1px solid;width:100%">'+siteName+'</h2>';
    desc += '<div id="bodyContent">';
    desc += '<table>';
    desc += '<tr><td>Site status:</td><td>'+siteData.siteMaskStatus+'</td></tr>';
    lon = parseFloat( siteData.longlat[0] ).toFixed(3);
    lat  = parseFloat( siteData.longlat[1] ).toFixed(3);
    desc += '<tr><td>Geo:</td><td> '+lon+'º E, '+lat+'º N</td></tr>';
    // desc += '<tr><td>Category:</td><td> Tier '+siteData.tier+'</td></tr>';
    if (siteData.siteMaskStatus == "Allowed")
	{
	    desc += '<tr><td>Running VMs:</td><td>' +siteData.VMsRunning+'/'+siteData.VMsMax+ '</td></tr>';
	    desc += '<tr><td>Jobs processing:</td><td>'+siteData.JobsProcessing+'</td></tr>';
	    desc += '<tr><td>Jobs pending:</td><td>'+siteData.JobsPending+'</td></tr>';
	    // desc += '<tr><td>Load last hour:</td><td>'+siteData.Load+'</td></tr>';
	    desc += '<tr><td>MaxAllowedPrice:</td><td>'+siteData.MaxAllowedPrice+'</td></tr>';
	    desc += '<tr><td>CVMFS cache:</td><td>'+siteData.cvmfsStatus+'</td></tr>';
	}
    desc += '</table>';
    
    return desc;
}
