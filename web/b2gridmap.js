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

    for (var i = 0; i < ce_sites.length; i++) {
        var ce_site = ce_sites[i];
        var ce_marker = new google.maps.Marker({
            position: {lat: ce_site[1], lng: ce_site[2]},
            map: map,
            icon: images[i],
            title: ce_site[0],
            //zIndex: ce_site[3],
            html: contentString[i]
        });
        
        oms.addMarker(ce_marker)
        CEsites.push(ce_marker);
    }

    oms.addListener('click',function(marker,event){
      infowindow = new google.maps.InfoWindow({content: "Loading..."});
      infowindow.setContent(marker.html);
      infowindow.open(map, marker);
    });

    oms.addListener('spiderfy', function(markers) {
        infowindow.close();
    });

    for (var j = 0; j < se_sites.length; j++) {
        var se_site = se_sites[j];
        var se_marker = new google.maps.Marker({
            position: {lat: se_site[1], lng: se_site[2]},
            map: map,
            icon: images_se[j],
            title: se_site[0],
            //zIndex: j,
            html: se_contentString[j]
        });
        oms_se.addMarker(se_marker)
        SEsites.push(se_marker);
    }

    oms_se.addListener('click',function(marker,event){
      infowindow = new google.maps.InfoWindow({content: "Loading..."});
      infowindow.setContent(marker.html);
      infowindow.open(map, marker);
    });

    oms_se.addListener('spiderfy', function(markers) {
        infowindow.close();
    });

    for (var j = 0; j < lineCoordinates.length; j++) {
        var flightPath = new google.maps.Polyline({
          path: lineCoordinates[j],
          geodesic: true,
          strokeColor: linesColors[j],
          strokeOpacity: 0.7,
          strokeWeight: linesStroke[j],
          html: linesDescription[j]
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

    pointMap = map;

    // var legend = document.getElementById('legend');
    // var type = images[0];
    // var name = 'Computing Element';
    // var icon = type.url;
    // var div = document.createElement('div');
    // div.innerHTML = '<img src="' + icon + '" height="32" width="32" align="center"> &emsp;' + name;
    // legend.appendChild(div);
    // var type = images_se[0];
    // var name = 'Storage Element';
    // var icon = type.url;
    // var div = document.createElement('div');
    // div.innerHTML = '<img src="' + icon + '" height="32" width="32" align="center"> &emsp;' + name;
    // legend.appendChild(div);
    // map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);

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
    setMapOnAll(Lines,null);
    Linesvisible = false;
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
