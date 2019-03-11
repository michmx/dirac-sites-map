

var SEsites = [];
var CEsites = [];
var SELines = [];
var CELines = [];

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(initialize);

function initialize() {

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
      //iconSize: [30, 30], // size of the icon 
      iconAnchor: [radius/2,radius/2]
    });

    L.marker(ce_sites[ce]['Coordinates'],{icon: pieIcon}).addTo(map);

  
    //CEsites.push(ce_marker);

    

  }

}
