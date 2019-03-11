  var map = L.map('map').
     setView([30., 0.5463],
     2);

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
            {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, \
            <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; \
            <a href="http://cloudmade.com">CloudMade</a>',
            maxZoom: 18
            }).addTo(map);

var imported = document.createElement('script');
var time_now = new Date();
imported.src = 'datagrid.js?t=' + time_now.getTime();
document.head.appendChild(imported);


  L.control.scale().addTo(map);

  var SEsites = [];
  var CEsites = [];
  var SELines = [];
  var CELines = [];

  L.marker([41.66, -4.71],{draggable: false}).addTo(map);

  for (ce in ce_sites) {

    L.marker(ce_sites[ce]['Coordinates'],{draggable: false}).addTo(map);

  }
