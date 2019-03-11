

var SEsites = [];
var CEsites = [];
var SELines = [];
var CELines = [];

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(initialize);

function initialize() {

  //L.control({position: 'topright'}).scale().addTo(map);

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

    ce_marker = L.marker(ce_sites[ce]['Coordinates'],{icon: pieIcon}).addTo(map)//.bindPopup(ce_sites[ce]['Description']);
    ce_marker.desc = ce_sites[ce]['Description']

    oms.addMarker(ce_marker);
    CEsites.push(ce_marker);

    

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

}
