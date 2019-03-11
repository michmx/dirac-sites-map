
var SEsites = [];
var CEsites = [];
var SELines = [];
var CELines = [];

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(initialize);



function ViewControl(controlDiv, name, latLng, zoom) {
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

  controlUI.addEventListener('click', function(event) {
    map.setView([latLng[0], latLng[1]], zoom);
  });
}


function initialize() {

  var legend = L.control({position: 'topleft'});
  legend.onAdd = function (map) {
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
    return bandwidthDiv;
  };
  legend.addTo(map);

  var viewMap = L.control({position: 'topright'});
  viewMap.onAdd = function (map) {
    var ViewDiv = document.createElement('div');
    var Asia = new ViewControl(ViewDiv, 'Asia', [37.6, 110.6], 4);
    var Europe = new ViewControl(ViewDiv, 'Europe', [46.0, 14.5], 5);
    var America = new ViewControl(ViewDiv, 'America', [ 30.8, -87.6], 4);
    var Oceania = new ViewControl(ViewDiv, 'Oceania', [ -30.8, 140.6], 5);
    var Oceania = new ViewControl(ViewDiv, 'Global', [ 30., 0.5463], 2);
    return ViewDiv;
  };
  viewMap.addTo(map);


    //var Asia = new ViewControl(ViewDiv, map, 'Asia', [37.6, 110.6], 4);
    //var Europe = new ViewControl(ViewDiv, map, 'Europe', [46.0, 14.5], 5);
    //var America = new ViewControl(ViewDiv, map, 'America', [ 30.8, -87.6], 4);
    //var Oceania = new ViewControl(ViewDiv, map, 'Oceania', [ -30.8, 140.6], 5);
    //var Oceania = new ViewControl(ViewDiv, map, 'Global', [ 30., 0.5463], 2);



  // To display multiple markers at the same point
  var oms = new OverlappingMarkerSpiderfier(map,
          {markersWontMove: false, markersWontHide: false, nearbyDistance: 20, circleSpiralSwitchover: Infinity});
  var oms_se = new OverlappingMarkerSpiderfier(map,
          {markersWontMove: false, markersWontHide: false, nearbyDistance: 20, circleSpiralSwitchover: Infinity});

  for (ce in ce_sites) {

    var data = google.visualization.arrayToDataTable([
                                                     [{label: 'Status', type: 'string'},
                                                      {label: 'No. of jobs', type: 'number'}], 
                                                     ['Done', ce_sites[ce]['Done']], 
                                                     ['Failed', ce_sites[ce]['Failed']]
                                                     ]);
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

    var pieIcon = L.icon({
      iconUrl: path,
      iconSize: [radius, radius], // size of the icon 
      iconAnchor: [radius/2,radius/2]
    });

    ce_marker = L.marker(ce_sites[ce]['Coordinates'],{icon: pieIcon}).addTo(map)
    ce_marker.desc = ce_sites[ce]['Description']

    oms.addMarker(ce_marker);
    CEsites.push(ce_marker);

    for(destination in ce_sites[ce]['Destinations']){
      var pointA = new L.LatLng(ce_sites[ce]['Coordinates'][0], ce_sites[ce]['Coordinates'][1]);
      var pointB = new L.LatLng(ce_sites[ce]['Destinations'][destination]['Coordinates'][0], 
                                ce_sites[ce]['Destinations'][destination]['Coordinates'][1]);
      

      var flightPath = new L.geodesic([], {
        color: ce_sites[ce]['Destinations'][destination]['color'],
        weight: ce_sites[ce]['Destinations'][destination]['stroke'],
        opacity: 0.7,
        steps: 100
      });
      flightPath.addTo(map);
      flightPath.setLatLngs([[pointA, pointB]])
      flightPath.bindPopup(ce_sites[ce]['Destinations'][destination]['Description'])
    }

  }

  var popup = new L.Popup();
  oms.addListener('click', function(marker) {
    popup.setContent(marker.desc);
    popup.setLatLng(marker.getLatLng());
    map.openPopup(popup);
  });

  oms.addListener('spiderfy', function(markers) {
    map.closePopup();
  });



  for (se in se_sites){
    
    var seIcon = L.icon({
      iconUrl: se_sites[se]['Icon']['url'],
      iconSize: [38, 38], // size of the icon 
      iconAnchor: [38, -10]
    });
    if("Coordinates" in se_sites[se]){
      se_marker = L.marker(se_sites[se]['Coordinates'],{icon: seIcon}).addTo(map)
      se_marker.desc = se_sites[se]['Description']
      oms_se.addMarker(se_marker);
      SEsites.push(se_marker);  
    }

    for(destination in se_sites[se]['Destinations']){
      var pointA = new L.LatLng(se_sites[se]['Coordinates'][0], se_sites[se]['Coordinates'][1]);
      var pointB = new L.LatLng(se_sites[se]['Destinations'][destination]['Coordinates'][0], 
                                se_sites[se]['Destinations'][destination]['Coordinates'][1]);
      

      var flightPath = new L.geodesic([], {
        color: se_sites[ce]['Destinations'][destination]['color'],
        weight: se_sites[ce]['Destinations'][destination]['stroke'],
        opacity: 0.7,
        steps: 100
      });
      flightPath.addTo(map);
      flightPath.setLatLngs([[pointA, pointB]])
      flightPath.bindPopup(se_sites[se]['Destinations'][destination]['Description'])      
    }

  }

  var popup = new L.Popup();
  oms_se.addListener('click', function(marker) {
    popup.setContent(marker.desc);
    popup.setLatLng(marker.getLatLng());
    map.openPopup(popup);
  });

  oms_se.addListener('spiderfy', function(markers) {
    map.closePopup();
  });

}

