// Sites map v0.2  -- Michel

google.load( 'visualization', '1', { packages:['corechart'] });

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


var SEsites = [];
var CEsites = [];
var Lines = [];

// Contains the info of the map outside the initialize function
var pointMap;


function initialize() {

    var mapCanvas = document.getElementById('map');

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

    var map = new google.maps.Map(mapCanvas, mapOptions)    

    // To display multiple markers at the same point
    var oms = new OverlappingMarkerSpiderfier(map,
            {markersWontMove: false, markersWontHide: false, nearbyDistance: 20, circleSpiralSwitchover: Infinity});
    var oms_se = new OverlappingMarkerSpiderfier(map,
            {markersWontMove: false, markersWontHide: false, nearbyDistance: 20, circleSpiralSwitchover: Infinity});

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
    bandwidthDiv.innerHTML = '<b>Total throughput: ' + global_statistics[0] + ' MB/s</b>';
    bandwidthDiv.innerHTML += '<br /><b>Efficiency: ' + global_statistics[1] + '%</b><br />';
    bandwidthDiv.innerHTML += '<br /><b>Compunting sites: '+ global_statistics[2] +'</b>';
    bandwidthDiv.innerHTML += '<br /><b>Storage element sites: '+ global_statistics[3] + '</b>';
    bandwidthDiv.innerHTML += '<br /><b>Total connections: '+ global_statistics[4] + '</b>';
    bandwidthDiv.innerHTML += '<br /><br /><b>Last updated: <br />'+ global_statistics[5] + '</b>';
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(bandwidthDiv);

    var ViewDiv = document.createElement('div');
    var Asia = new ViewControl(ViewDiv, map, 'Asia', [37.6, 110.6], 4);
    var Europe = new ViewControl(ViewDiv, map, 'Europe', [46.0, 14.5], 5);
    var America = new ViewControl(ViewDiv, map, 'America', [ 30.8, -87.6], 4);
    var Oceania = new ViewControl(ViewDiv, map, 'Oceania', [ -30.8, 140.6], 5);
    var Oceania = new ViewControl(ViewDiv, map, 'Global', [ 30., 0.5463], 2);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(ViewDiv);
    


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
            Lines.push(flightPath);
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



    for (se in se_sites) {
        
        var se_position = {lat: se_sites[se]['Coordinates'][0], lng: se_sites[se]['Coordinates'][1]};
        var se_marker = new google.maps.Marker({

            position: se_position,
            map: map,
            icon: {
               url: se_sites[se]['Icon']['url'],
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
        //for(destination in se_sites[se]['Destinations']){
        //    var lineCoordinates = [se_position, {lat:se_sites[se]['Destinations'][destination]['Coordinates'][0], lng: se_sites[se]['Destinations'][destination]['Coordinates'][1]}]

        //    var flightPath = new google.maps.Polyline({
        //      path: lineCoordinates,
        //      geodesic: true,
        //      strokeColor: se_sites[se]['Destinations'][destination]['color'],
        //      strokeOpacity: 0.7,
        //      strokeWeight: se_sites[se]['Destinations'][destination]['stroke'],
        //      html: se_sites[se]['Destinations'][destination]['Description']
        //    });
        //    flightPath.setMap(map);
        //    flightPath.addListener('click',function(e)
        //    {
        //      infowindow = new google.maps.InfoWindow({content: "Loading..."});
        //      infowindow.setContent(this.html);
        //      infowindow.setPosition(e.latLng);
        //      infowindow.open(map);

        //    });
        //    Lines.push(flightPath);
        //}
        

    }

    oms_se.addListener('click',function(marker,event){
      infowindow = new google.maps.InfoWindow({content: "Loading..."});
      infowindow.setContent(marker.html);
      infowindow.open(map, marker);
    });

    oms_se.addListener('spiderfy', function(markers) {
        infowindow.close();
    });

    pointMap = map;


}

// To know the status of the sites
var CEvisible = true;
var SEvisible = true;
var Linesvisible = true;


// Show or hide the sites
function toogleCE(){
  if(CEvisible){
    setMapOnAll(CEsites,null);
    CEvisible = false;
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
    //setMapOnAll(Lines,null);
    //Linesvisible = false;
  }
  else{
   setMapOnAll(SEsites,pointMap);
   SEvisible = true;
  }
}

function toogleLines(){
  if(Linesvisible){
    setMapOnAll(Lines,null);
    Linesvisible = false;
  }
  else{
   setMapOnAll(SEsites,pointMap);
   SEvisible = true;
   setMapOnAll(Lines,pointMap);
   Linesvisible = true;
  }
}


// Sets the map on all markers in the array.
function setMapOnAll(sites,map) {
  for (var i = 0; i < sites.length; i++){
    sites[i].setMap(map);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
