function initialize() {
    var mapCanvas = document.getElementById('map');

    var mapOptions = {
        center: new google.maps.LatLng(20., 40.5463),
        zoom: 3,
        styles: mapStyle,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)

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
        ce_marker.addListener('click',function()
        {
          infowindow = new google.maps.InfoWindow({content: "Loading..."});
          infowindow.setContent(this.html);
          infowindow.open(map, this);
        });
    }
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
        se_marker.addListener('click',function()
        {
          infowindow = new google.maps.InfoWindow({content: "Loading..."});
          infowindow.setContent(this.html);
          infowindow.open(map, this);
        });
    }
    for (var j = 0; j < lineCoordinates.length; j++) {
        var flightPath = new google.maps.Polyline({
          path: lineCoordinates[j],
          geodesic: true,
          strokeColor: linesColors[j],
          strokeOpacity: 1.0,
          strokeWeight: 3,
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
    }
    var legend = document.getElementById('legend');
    var type = images[0];
    var name = 'Computing Element';
    var icon = type.url;
    var div = document.createElement('div');
    div.innerHTML = '<img src="' + icon + '" height="32" width="32" align="center"> &emsp;' + name;
    legend.appendChild(div);

    var type = images_se[0];
    var name = 'Storage Element';
    var icon = type.url;
    var div = document.createElement('div');
    div.innerHTML = '<img src="' + icon + '" height="32" width="32" align="center"> &emsp;' + name;
    legend.appendChild(div);

    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);

    
}

google.maps.event.addDomListener(window, 'load', initialize);
