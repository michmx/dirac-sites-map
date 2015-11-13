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

var sites = 
[
  [
    "ARC.SIGNET.si", 
    46.04217, 
    14.48767
  ], 
  [
    "CLOUD.AWS_Sydney.au", 
    -33.8607819, 
    151.2143191
  ], 
  [
    "CLOUD.AWS_Tokyo.jp", 
    35.714, 
    139.763
  ], 
  [
    "CLOUD.AWS_Virginia.u", 
    37.4030325, 
    -78.4167041
  ], 
  [
    "CLOUD.CC1_Krakow.pl", 
    50.089557, 
    19.890541
  ], 
  [
    "DIRAC.BINP.ru", 
    54.85, 
    83.11
  ], 
  [
    "DIRAC.Beihang.cn", 
    39.98, 
    116.3408333
  ], 
  [
    "DIRAC.CINVESTAV.mx", 
    19.510869, 
    -99.128603
  ], 
  [
    "DIRAC.DESY.de", 
    53.5772, 
    9.8772
  ], 
  [
    "DIRAC.Hokudai.jp", 
    43.073511, 
    141.345669
  ], 
  [
    "DIRAC.Nara-WU.jp", 
    34.68787, 
    135.828454
  ], 
  [
    "DIRAC.Niigata.jp", 
    37.867478, 
    138.941511
  ], 
  [
    "DIRAC.Osaka-CU.jp", 
    34.5927358, 
    135.5075357
  ], 
  [
    "DIRAC.PNNL-CASCADE.u", 
    46.347283, 
    -119.307833
  ], 
  [
    "DIRAC.PNNL-PIC.us", 
    46.347283, 
    -119.307833
  ], 
  [
    "DIRAC.PNNL.us", 
    46.347283, 
    -119.307833
  ], 
  [
    "DIRAC.TIFR.in", 
    19.91, 
    72.81
  ], 
  [
    "DIRAC.TMU.jp", 
    35.61656, 
    139.377199
  ], 
  [
    "DIRAC.Tokyo.jp", 
    35.714, 
    139.763
  ], 
  [
    "DIRAC.UAS.mx", 
    24.826213, 
    -107.381713
  ], 
  [
    "DIRAC.UVic.ca", 
    48.464, 
    -123.311
  ], 
  [
    "DIRAC.Yonsei.kr", 
    37.565807, 
    126.938575
  ], 
  [
    "LCG.CESNET.cz", 
    50.102, 
    14.3886
  ], 
  [
    "LCG.CNAF.it", 
    44.4948, 
    11.3417
  ], 
  [
    "LCG.CYFRONET.pl", 
    50.068978, 
    19.90916
  ], 
  [
    "LCG.Cosenza.it", 
    39.331548, 
    16.181456
  ], 
  [
    "LCG.DESY.de", 
    53.5772, 
    9.8772
  ], 
  [
    "LCG.Frascati.it", 
    41.797, 
    12.6844
  ], 
  [
    "LCG.HEPHY.at", 
    48.2, 
    16.2
  ], 
  [
    "LCG.KEK2.jp", 
    36.148578, 
    140.076051
  ], 
  [
    "LCG.KISTI.kr", 
    36.366, 
    127.366
  ], 
  [
    "LCG.KIT.de", 
    49.0963, 
    8.4321
  ], 
  [
    "LCG.KMI.jp", 
    35.154506, 
    136.969546
  ], 
  [
    "LCG.Legnaro.it", 
    45.21, 
    11.57
  ], 
  [
    "LCG.MPPMU.de", 
    48.2633, 
    11.6731
  ], 
  [
    "LCG.McGill.ca", 
    45.4, 
    -73.8
  ], 
  [
    "LCG.Melbourne.au", 
    -37.8, 
    144.96
  ], 
  [
    "LCG.NCHC.tw", 
    23.100508, 
    120.281496
  ], 
  [
    "LCG.NTU.tw", 
    25.015, 
    121.539
  ], 
  [
    "LCG.Napoli.it", 
    40.83785, 
    14.18287
  ], 
  [
    "LCG.Pisa.it", 
    43.7, 
    10.4
  ], 
  [
    "LCG.Torino.it", 
    45.03, 
    7.4
  ], 
  [
    "LCG.ULAKBIM.tr", 
    39.99, 
    33.02
  ], 
  [
    "OSG.FNAL.us", 
    41.8412, 
    -88.2546
  ], 
  [
    "OSG.Nebraska.us", 
    40.82, 
    -96.68
  ], 
  [
    "OSG.VT.us", 
    37.2038, 
    -80.4132
  ], 
  [
    "SSH.KMI.jp", 
    35.154506, 
    136.969546
  ], 
  [
    "SSH.UVic.ca", 
    48.464, 
    -123.311
  ]
]

var images = 
[
  {
    url: 'images/pie_ARC.SIGNET.si.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_CLOUD.AWS_Sydney.au.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_CLOUD.AWS_Tokyo.jp.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_CLOUD.AWS_Virginia.u.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_CLOUD.CC1_Krakow.pl.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.BINP.ru.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Beihang.cn.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.CINVESTAV.mx.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.DESY.de.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Hokudai.jp.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Nara-WU.jp.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Niigata.jp.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Osaka-CU.jp.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.PNNL-CASCADE.u.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.PNNL-PIC.us.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.PNNL.us.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.TIFR.in.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.TMU.jp.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Tokyo.jp.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.UAS.mx.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.UVic.ca.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Yonsei.kr.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.CESNET.cz.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.CNAF.it.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.CYFRONET.pl.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Cosenza.it.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.DESY.de.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Frascati.it.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.HEPHY.at.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KEK2.jp.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KISTI.kr.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KIT.de.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KMI.jp.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Legnaro.it.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.MPPMU.de.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.McGill.ca.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Melbourne.au.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.NCHC.tw.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.NTU.tw.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Napoli.it.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Pisa.it.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Torino.it.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.ULAKBIM.tr.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_OSG.FNAL.us.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_OSG.Nebraska.us.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_OSG.VT.us.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_SSH.KMI.jp.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_SSH.UVic.ca.png', 
    origin: new google.maps.Point(0, 0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }
]

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

        for (var i = 0; i < sites.length; i++) {
            var site = sites[i];
            var marker = new google.maps.Marker({
                position: {lat: site[1], lng: site[2]},
                map: map,
                icon: images[i],
                title: site[0],
                zIndex: site[3]
            });
        }
        }

google.maps.event.addDomListener(window, 'load', initialize);