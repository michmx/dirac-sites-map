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

var ce_sites = 
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
    35.784498, 
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
    "SSH.KMI.jp", 
    35.154506, 
    136.969546
  ]
]
var se_sites = 
[
  [
    "Adelaide-DATA-SE", 
    -34.910836, 
    138.57121
  ], 
  [
    "CESNET-DATA-SE", 
    50.102, 
    14.3886
  ], 
  [
    "CNAF-DATA-SE", 
    44.4948, 
    11.3417
  ], 
  [
    "CYFRONET-DATA-SE", 
    50.068978, 
    19.90916
  ], 
  [
    "DESY-DATA-SE", 
    53.5772, 
    9.8772
  ], 
  [
    "Frascati-DATA-SE", 
    41.797, 
    12.6844
  ], 
  [
    "HEPHY-SE", 
    48.2, 
    16.2
  ], 
  [
    "KEK-FailoverSE", 
    36.148578, 
    140.076051
  ], 
  [
    "KEK2-DATA-SE", 
    36.148578, 
    140.076051
  ], 
  [
    "KISTI-DATA-SE", 
    36.366, 
    127.366
  ], 
  [
    "KIT-DATA-SE", 
    49.0963, 
    8.4321
  ], 
  [
    "KMI-DATA-SE", 
    35.154506, 
    136.969546
  ], 
  [
    "MPPMU-DATA-SE", 
    48.2633, 
    11.6731
  ], 
  [
    "Melbourne-DATA-SE", 
    -37.8, 
    144.96
  ], 
  [
    "NCHC-DATA-SE", 
    23.100508, 
    120.281496
  ], 
  [
    "NTU-DATA-SE", 
    25.015, 
    121.539
  ], 
  [
    "Napoli-DATA-SE", 
    40.83785, 
    14.18287
  ], 
  [
    "PNNL-DATA-SE", 
    46.347283, 
    -119.307833
  ], 
  [
    "SIGNET-DATA-SE", 
    46.04217, 
    14.48767
  ], 
  [
    "Torino-DATA-SE", 
    45.03, 
    7.4
  ], 
  [
    "UA-ISMA-SE", 
    50.0321613, 
    36.2206144
  ], 
  [
    "ULAKBIM-DATA-SE", 
    39.99, 
    33.02
  ], 
  [
    "UVic-DATA-SE", 
    48.464, 
    -123.311
  ]
]
var contentString = 
[
  "<strong>ARC.SIGNET.si</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 164981 (98.9%) </br>\n            Jobs Failed: 1868 (1.1%) </br>\n            (Total: 166849)<br /><br />\n            Jobs Running: 872\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Sydney.au</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 1020 (50.3%) </br>\n            Jobs Failed: 1006 (49.7%) </br>\n            (Total: 2026)<br /><br />\n            Jobs Running: 12\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Tokyo.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 369 (77.0%) </br>\n            Jobs Failed: 110 (23.0%) </br>\n            (Total: 479)<br /><br />\n            Jobs Running: 1\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Virginia.u</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 4002 (73.1%) </br>\n            Jobs Failed: 1470 (26.9%) </br>\n            (Total: 5472)<br /><br />\n            Jobs Running: 93\n            </div><br />     ", 
  "<strong>CLOUD.CC1_Krakow.pl</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 45411 (99.0%) </br>\n            Jobs Failed: 445 (1.0%) </br>\n            (Total: 45856)<br /><br />\n            Jobs Running: 202\n            </div><br />     ", 
  "<strong>DIRAC.BINP.ru</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 152344 (96.0%) </br>\n            Jobs Failed: 6303 (4.0%) </br>\n            (Total: 158647)<br /><br />\n            Jobs Running: 549\n            </div><br />     ", 
  "<strong>DIRAC.Beihang.cn</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 10939 (86.5%) </br>\n            Jobs Failed: 1710 (13.5%) </br>\n            (Total: 12649)<br /><br />\n            Jobs Running: 100\n            </div><br />     ", 
  "<strong>DIRAC.CINVESTAV.mx</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 47371 (96.9%) </br>\n            Jobs Failed: 1533 (3.1%) </br>\n            (Total: 48904)<br /><br />\n            Jobs Running: 94\n            </div><br />     ", 
  "<strong>DIRAC.DESY.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 2 (100.0%) </br>\n            Jobs Failed: 0 (0.0%) </br>\n            (Total: 2)<br /><br />\n            Jobs Running: 0\n            </div><br />     ", 
  "<strong>DIRAC.Hokudai.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 9025 (99.0%) </br>\n            Jobs Failed: 88 (1.0%) </br>\n            (Total: 9113)<br /><br />\n            Jobs Running: 40\n            </div><br />     ", 
  "<strong>DIRAC.Nara-WU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 11140 (97.7%) </br>\n            Jobs Failed: 257 (2.3%) </br>\n            (Total: 11397)<br /><br />\n            Jobs Running: 20\n            </div><br />     ", 
  "<strong>DIRAC.Niigata.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 10418 (83.1%) </br>\n            Jobs Failed: 2122 (16.9%) </br>\n            (Total: 12540)<br /><br />\n            Jobs Running: 44\n            </div><br />     ", 
  "<strong>DIRAC.Osaka-CU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 17108 (99.3%) </br>\n            Jobs Failed: 126 (0.7%) </br>\n            (Total: 17234)<br /><br />\n            Jobs Running: 35\n            </div><br />     ", 
  "<strong>DIRAC.PNNL.us</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 373525 (99.2%) </br>\n            Jobs Failed: 3000 (0.8%) </br>\n            (Total: 376525)<br /><br />\n            Jobs Running: 2549\n            </div><br />     ", 
  "<strong>DIRAC.TIFR.in</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 3457 (96.1%) </br>\n            Jobs Failed: 141 (3.9%) </br>\n            (Total: 3598)<br /><br />\n            Jobs Running: 8\n            </div><br />     ", 
  "<strong>DIRAC.TMU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 15876 (97.2%) </br>\n            Jobs Failed: 455 (2.8%) </br>\n            (Total: 16331)<br /><br />\n            Jobs Running: 52\n            </div><br />     ", 
  "<strong>DIRAC.Tokyo.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 3472 (99.2%) </br>\n            Jobs Failed: 27 (0.8%) </br>\n            (Total: 3499)<br /><br />\n            Jobs Running: 8\n            </div><br />     ", 
  "<strong>DIRAC.UAS.mx</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 11104 (96.6%) </br>\n            Jobs Failed: 394 (3.4%) </br>\n            (Total: 11498)<br /><br />\n            Jobs Running: 24\n            </div><br />     ", 
  "<strong>DIRAC.UVic.ca</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 393711 (96.5%) </br>\n            Jobs Failed: 14246 (3.5%) </br>\n            (Total: 407957)<br /><br />\n            Jobs Running: 1488\n            </div><br />     ", 
  "<strong>DIRAC.Yonsei.kr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 7102 (66.3%) </br>\n            Jobs Failed: 3615 (33.7%) </br>\n            (Total: 10717)<br /><br />\n            Jobs Running: 33\n            </div><br />     ", 
  "<strong>LCG.CESNET.cz</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 186566 (99.1%) </br>\n            Jobs Failed: 1612 (0.9%) </br>\n            (Total: 188178)<br /><br />\n            Jobs Running: 507\n            </div><br />     ", 
  "<strong>LCG.CNAF.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 131013 (87.0%) </br>\n            Jobs Failed: 19562 (13.0%) </br>\n            (Total: 150575)<br /><br />\n            Jobs Running: 440\n            </div><br />     ", 
  "<strong>LCG.CYFRONET.pl</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 88099 (95.8%) </br>\n            Jobs Failed: 3829 (4.2%) </br>\n            (Total: 91928)<br /><br />\n            Jobs Running: 328\n            </div><br />     ", 
  "<strong>LCG.Cosenza.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 116202 (98.7%) </br>\n            Jobs Failed: 1538 (1.3%) </br>\n            (Total: 117740)<br /><br />\n            Jobs Running: 504\n            </div><br />     ", 
  "<strong>LCG.DESY.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 1016913 (97.9%) </br>\n            Jobs Failed: 21821 (2.1%) </br>\n            (Total: 1038734)<br /><br />\n            Jobs Running: 4436\n            </div><br />     ", 
  "<strong>LCG.Frascati.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 119609 (98.9%) </br>\n            Jobs Failed: 1319 (1.1%) </br>\n            (Total: 120928)<br /><br />\n            Jobs Running: 213\n            </div><br />     ", 
  "<strong>LCG.HEPHY.at</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 249846 (98.4%) </br>\n            Jobs Failed: 4074 (1.6%) </br>\n            (Total: 253920)<br /><br />\n            Jobs Running: 474\n            </div><br />     ", 
  "<strong>LCG.KEK2.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 509486 (97.5%) </br>\n            Jobs Failed: 13250 (2.5%) </br>\n            (Total: 522736)<br /><br />\n            Jobs Running: 291\n            </div><br />     ", 
  "<strong>LCG.KISTI.kr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 75094 (98.4%) </br>\n            Jobs Failed: 1247 (1.6%) </br>\n            (Total: 76341)<br /><br />\n            Jobs Running: 311\n            </div><br />     ", 
  "<strong>LCG.KIT.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 561410 (99.0%) </br>\n            Jobs Failed: 5395 (1.0%) </br>\n            (Total: 566805)<br /><br />\n            Jobs Running: 3409\n            </div><br />     ", 
  "<strong>LCG.KMI.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 176709 (98.6%) </br>\n            Jobs Failed: 2590 (1.4%) </br>\n            (Total: 179299)<br /><br />\n            Jobs Running: 370\n            </div><br />     ", 
  "<strong>LCG.Legnaro.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 18976 (99.1%) </br>\n            Jobs Failed: 173 (0.9%) </br>\n            (Total: 19149)<br /><br />\n            Jobs Running: 2\n            </div><br />     ", 
  "<strong>LCG.MPPMU.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 310496 (97.8%) </br>\n            Jobs Failed: 6835 (2.2%) </br>\n            (Total: 317331)<br /><br />\n            Jobs Running: 793\n            </div><br />     ", 
  "<strong>LCG.McGill.ca</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 18109 (97.6%) </br>\n            Jobs Failed: 437 (2.4%) </br>\n            (Total: 18546)<br /><br />\n            Jobs Running: 43\n            </div><br />     ", 
  "<strong>LCG.Melbourne.au</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 46116 (98.5%) </br>\n            Jobs Failed: 724 (1.5%) </br>\n            (Total: 46840)<br /><br />\n            Jobs Running: 58\n            </div><br />     ", 
  "<strong>LCG.NCHC.tw</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 188626 (99.1%) </br>\n            Jobs Failed: 1806 (0.9%) </br>\n            (Total: 190432)<br /><br />\n            Jobs Running: 498\n            </div><br />     ", 
  "<strong>LCG.NTU.tw</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 7208 (98.9%) </br>\n            Jobs Failed: 77 (1.1%) </br>\n            (Total: 7285)<br /><br />\n            Jobs Running: 28\n            </div><br />     ", 
  "<strong>LCG.Napoli.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 275909 (97.3%) </br>\n            Jobs Failed: 7565 (2.7%) </br>\n            (Total: 283474)<br /><br />\n            Jobs Running: 1029\n            </div><br />     ", 
  "<strong>LCG.Pisa.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 392996 (97.2%) </br>\n            Jobs Failed: 11473 (2.8%) </br>\n            (Total: 404469)<br /><br />\n            Jobs Running: 348\n            </div><br />     ", 
  "<strong>LCG.Torino.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 21475 (97.7%) </br>\n            Jobs Failed: 513 (2.3%) </br>\n            (Total: 21988)<br /><br />\n            Jobs Running: 3\n            </div><br />     ", 
  "<strong>LCG.ULAKBIM.tr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 15940 (94.9%) </br>\n            Jobs Failed: 863 (5.1%) </br>\n            (Total: 16803)<br /><br />\n            Jobs Running: 0\n            </div><br />     ", 
  "<strong>SSH.KMI.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 8094 (99.2%) </br>\n            Jobs Failed: 67 (0.8%) </br>\n            (Total: 8161)<br /><br />\n            Jobs Running: 28\n            </div><br />     "
]
var se_contentString = 
[
  "<strong>Adelaide-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/ersa.edu.au/home/belle/DATA </br>\n            Endpoint: coepp-dpm-01.ersa.edu.au </br>\n            </div><br />\n            ", 
  "<strong>CESNET-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /dpm/cesnet.cz/home/belle/DATA </br>\n                Endpoint: dpm1.egee.cesnet.cz </br>\n                </div><br />\n                ", 
  "<strong>CNAF-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n                Endpoint: storm-fe-archive.cr.cnaf.infn.it </br>\n                </div><br />\n                ", 
  "<strong>CYFRONET-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /dpm/cyf-kr.edu.pl/home/belle/DATA </br>\n                Endpoint: dpm.cyf-kr.edu.pl </br>\n                </div><br />\n                ", 
  "<strong>DESY-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /pnfs/desy.de/belle/belle2/DATA </br>\n                Endpoint: dcache-se-desy.desy.de </br>\n                </div><br />\n                ", 
  "<strong>Frascati-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /dpm/lnf.infn.it/home/belle/DATA </br>\n                Endpoint: atlasse.lnf.infn.it </br>\n                </div><br />\n                ", 
  "<strong>HEPHY-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /dpm/oeaw.ac.at/home </br>\n                Endpoint: hephyse.oeaw.ac.at </br>\n                </div><br />\n                ", 
  "<strong>KEK-FailoverSE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /DataManagement/StorageElement </br>\n                Endpoint: dirac1.cc.kek.jp </br>\n                </div><br />\n                ", 
  "<strong>KEK2-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n                Endpoint: kek2-se01.cc.kek.jp </br>\n                </div><br />\n                ", 
  "<strong>KISTI-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /dpm/sdfarm.kr/home/belle/DATA </br>\n                Endpoint: belle-se-head.sdfarm.kr </br>\n                </div><br />\n                ", 
  "<strong>KIT-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /pnfs/gridka.de/belle/disk-only/DATA </br>\n                Endpoint: gridka-dcache.fzk.de </br>\n                </div><br />\n                ", 
  "<strong>KMI-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n                Endpoint: nsrmfe01.hepl.phys.nagoya-u.ac.jp </br>\n                </div><br />\n                ", 
  "<strong>MPPMU-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /pnfs/rzg.mpg.de/data/belle/DATA </br>\n                Endpoint: grid-srm.rzg.mpg.de </br>\n                </div><br />\n                ", 
  "<strong>Melbourne-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /dpm/mel.coepp.org.au/home/belle/DATA </br>\n                Endpoint: b2se.mel.coepp.org.au </br>\n                </div><br />\n                ", 
  "<strong>NCHC-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /dpm/grid.nchc.org.tw/home/belle/DATA </br>\n                Endpoint: se01.grid.nchc.org.tw </br>\n                </div><br />\n                ", 
  "<strong>NTU-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /pnfs/phys.ntu.edu.tw/home/belle/DATA </br>\n                Endpoint: bgrid3.phys.ntu.edu.tw </br>\n                </div><br />\n                ", 
  "<strong>Napoli-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /dpm/na.infn.it/home/belle/DATA </br>\n                Endpoint: belle-dpm-01.na.infn.it </br>\n                </div><br />\n                ", 
  "<strong>PNNL-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /se/belle/DATA </br>\n                Endpoint: se.hep.pnnl.gov </br>\n                </div><br />\n                ", 
  "<strong>SIGNET-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /pnfs/ijs.si/belle/DATA </br>\n                Endpoint: dcache.ijs.si </br>\n                </div><br />\n                ", 
  "<strong>Torino-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n                Endpoint: se-srm-00.to.infn.it </br>\n                </div><br />\n                ", 
  "<strong>UA-ISMA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /dpm/isma.kharkov.ua/home </br>\n                Endpoint: gl-dpm.isma.kharkov.ua </br>\n                </div><br />\n                ", 
  "<strong>ULAKBIM-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /dpm/ulakbim.gov.tr/home/belle/DATA </br>\n                Endpoint: torik1.ulakbim.gov.tr </br>\n                </div><br />\n                ", 
  "<strong>UVic-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n                <div style=\"padding-left: 5px;\">Path: /pnfs/westgrid.uvic.ca/data/belle/belledisk/DATA </br>\n                Endpoint: charon01.westgrid.ca </br>\n                </div><br />\n                "
]

var images = 
[
  {
    url: 'images/pie_ARC.SIGNET.si.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(58.8103296987, 58.8103296987)
  }, 
  {
    url: 'images/cloud.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/cloud.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/cloud.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/cloud.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.BINP.ru.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(54.791446889, 54.791446889)
  }, 
  {
    url: 'images/pie_DIRAC.Beihang.cn.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40.0, 40.0)
  }, 
  {
    url: 'images/pie_DIRAC.CINVESTAV.mx.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(39.462557072, 39.462557072)
  }, 
  {
    url: 'images/pie_DIRAC.DESY.de.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.Hokudai.jp.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.Nara-WU.jp.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.Niigata.jp.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.Osaka-CU.jp.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.PNNL.us.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(68.1273967094, 68.1273967094)
  }, 
  {
    url: 'images/pie_DIRAC.TIFR.in.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.TMU.jp.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(34.3200668727, 34.3200668727)
  }, 
  {
    url: 'images/pie_DIRAC.Tokyo.jp.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.UAS.mx.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.UVic.ca.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(63.4520586242, 63.4520586242)
  }, 
  {
    url: 'images/pie_DIRAC.Yonsei.kr.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_LCG.CESNET.cz.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(54.1001591867, 54.1001591867)
  }, 
  {
    url: 'images/pie_LCG.CNAF.it.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(52.8690535297, 52.8690535297)
  }, 
  {
    url: 'images/pie_LCG.CYFRONET.pl.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(50.3174768742, 50.3174768742)
  }, 
  {
    url: 'images/pie_LCG.Cosenza.it.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(54.0486107289, 54.0486107289)
  }, 
  {
    url: 'images/pie_LCG.DESY.de.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(72.9398307495, 72.9398307495)
  }, 
  {
    url: 'images/pie_LCG.Frascati.it.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(46.5675920688, 46.5675920688)
  }, 
  {
    url: 'images/pie_LCG.HEPHY.at.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(53.5155668335, 53.5155668335)
  }, 
  {
    url: 'images/pie_LCG.KEK2.jp.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(49.2778597797, 49.2778597797)
  }, 
  {
    url: 'images/pie_LCG.KISTI.kr.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(49.8552077805, 49.8552077805)
  }, 
  {
    url: 'images/pie_LCG.KIT.de.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(70.6525400246, 70.6525400246)
  }, 
  {
    url: 'images/pie_LCG.KMI.jp.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(51.3640344813, 51.3640344813)
  }, 
  {
    url: 'images/pie_LCG.Legnaro.it.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_LCG.MPPMU.de.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(57.9854637464, 57.9854637464)
  }, 
  {
    url: 'images/pie_LCG.McGill.ca.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_LCG.Melbourne.au.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(35.2685598713, 35.2685598713)
  }, 
  {
    url: 'images/pie_LCG.NCHC.tw.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(53.9445868552, 53.9445868552)
  }, 
  {
    url: 'images/pie_LCG.NTU.tw.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_LCG.Napoli.it.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(60.2483074952, 60.2483074952)
  }, 
  {
    url: 'images/pie_LCG.Pisa.it.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(50.8315848789, 50.8315848789)
  }, 
  {
    url: 'images/pie_LCG.Torino.it.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_LCG.ULAKBIM.tr.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_SSH.KMI.jp.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }
]

var images_se = 
[
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png?t=2016/02/01:19:14', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }
]

var lineCoordinates = 
[
  [
    {
      lat: 48.2, 
      lng: 16.2
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 50.068978, 
      lng: 19.90916
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 53.5772, 
      lng: 9.8772
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 50.102, 
      lng: 14.3886
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 44.4948, 
      lng: 11.3417
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 41.797, 
      lng: 12.6844
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 36.366, 
      lng: 127.366
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 46.04217, 
      lng: 14.48767
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: -34.910836, 
      lng: 138.57121
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 50.068978, 
      lng: 19.90916
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 40.83785, 
      lng: 14.18287
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 50.102, 
      lng: 14.3886
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 50.102, 
      lng: 14.3886
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 36.148578, 
      lng: 140.076051
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 46.347283, 
      lng: -119.307833
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 40.83785, 
      lng: 14.18287
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 45.03, 
      lng: 7.4
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 36.148578, 
      lng: 140.076051
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: -37.8, 
      lng: 144.96
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 48.2633, 
      lng: 11.6731
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 48.2, 
      lng: 16.2
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 48.2, 
      lng: 16.2
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 49.0963, 
      lng: 8.4321
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 44.4948, 
      lng: 11.3417
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 36.366, 
      lng: 127.366
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 48.464, 
      lng: -123.311
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 40.83785, 
      lng: 14.18287
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 46.04217, 
      lng: 14.48767
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: -34.910836, 
      lng: 138.57121
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 46.04217, 
      lng: 14.48767
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 36.366, 
      lng: 127.366
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 48.2633, 
      lng: 11.6731
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 39.99, 
      lng: 33.02
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 53.5772, 
      lng: 9.8772
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 36.148578, 
      lng: 140.076051
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: -34.910836, 
      lng: 138.57121
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 49.0963, 
      lng: 8.4321
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 44.4948, 
      lng: 11.3417
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 44.4948, 
      lng: 11.3417
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 25.015, 
      lng: 121.539
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 35.154506, 
      lng: 136.969546
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 35.154506, 
      lng: 136.969546
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 41.797, 
      lng: 12.6844
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 53.5772, 
      lng: 9.8772
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 46.347283, 
      lng: -119.307833
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 48.2, 
      lng: 16.2
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 48.2, 
      lng: 16.2
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 48.464, 
      lng: -123.311
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: -37.8, 
      lng: 144.96
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 35.154506, 
      lng: 136.969546
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 49.0963, 
      lng: 8.4321
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: -37.8, 
      lng: 144.96
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 35.154506, 
      lng: 136.969546
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 48.464, 
      lng: -123.311
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 48.464, 
      lng: -123.311
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: -37.8, 
      lng: 144.96
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: -37.8, 
      lng: 144.96
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 36.148578, 
      lng: 140.076051
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 48.2633, 
      lng: 11.6731
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 46.04217, 
      lng: 14.48767
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 50.068978, 
      lng: 19.90916
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 50.068978, 
      lng: 19.90916
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 48.464, 
      lng: -123.311
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 50.102, 
      lng: 14.3886
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 50.102, 
      lng: 14.3886
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 50.102, 
      lng: 14.3886
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 39.99, 
      lng: 33.02
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 39.99, 
      lng: 33.02
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 49.0963, 
      lng: 8.4321
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 25.015, 
      lng: 121.539
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 36.366, 
      lng: 127.366
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 53.5772, 
      lng: 9.8772
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 25.015, 
      lng: 121.539
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 36.148578, 
      lng: 140.076051
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 48.2, 
      lng: 16.2
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 48.464, 
      lng: -123.311
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 46.04217, 
      lng: 14.48767
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 40.83785, 
      lng: 14.18287
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 48.2633, 
      lng: 11.6731
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 48.464, 
      lng: -123.311
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 50.068978, 
      lng: 19.90916
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 50.068978, 
      lng: 19.90916
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 41.797, 
      lng: 12.6844
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 41.797, 
      lng: 12.6844
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 45.03, 
      lng: 7.4
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 44.4948, 
      lng: 11.3417
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: -37.8, 
      lng: 144.96
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 50.102, 
      lng: 14.3886
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 48.2633, 
      lng: 11.6731
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 36.366, 
      lng: 127.366
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 40.83785, 
      lng: 14.18287
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 41.797, 
      lng: 12.6844
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 36.148578, 
      lng: 140.076051
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: -34.910836, 
      lng: 138.57121
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: -37.8, 
      lng: 144.96
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 44.4948, 
      lng: 11.3417
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 25.015, 
      lng: 121.539
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 50.068978, 
      lng: 19.90916
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: -34.910836, 
      lng: 138.57121
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 25.015, 
      lng: 121.539
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 48.2, 
      lng: 16.2
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 53.5772, 
      lng: 9.8772
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 50.102, 
      lng: 14.3886
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: -34.910836, 
      lng: 138.57121
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 25.015, 
      lng: 121.539
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 46.04217, 
      lng: 14.48767
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 46.347283, 
      lng: -119.307833
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 48.2, 
      lng: 16.2
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 35.154506, 
      lng: 136.969546
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: -37.8, 
      lng: 144.96
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 41.797, 
      lng: 12.6844
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 48.2633, 
      lng: 11.6731
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 46.347283, 
      lng: -119.307833
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: -34.910836, 
      lng: 138.57121
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 49.0963, 
      lng: 8.4321
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 45.03, 
      lng: 7.4
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 25.015, 
      lng: 121.539
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 36.148578, 
      lng: 140.076051
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 36.148578, 
      lng: 140.076051
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 45.03, 
      lng: 7.4
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 50.102, 
      lng: 14.3886
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 46.347283, 
      lng: -119.307833
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
    }
  ], 
  [
    {
      lat: 40.83785, 
      lng: 14.18287
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 44.4948, 
      lng: 11.3417
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 35.154506, 
      lng: 136.969546
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 46.347283, 
      lng: -119.307833
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 45.03, 
      lng: 7.4
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 45.03, 
      lng: 7.4
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 45.03, 
      lng: 7.4
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 50.068978, 
      lng: 19.90916
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 53.5772, 
      lng: 9.8772
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 48.464, 
      lng: -123.311
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 48.2633, 
      lng: 11.6731
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 45.03, 
      lng: 7.4
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 46.347283, 
      lng: -119.307833
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 53.5772, 
      lng: 9.8772
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 53.5772, 
      lng: 9.8772
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 49.0963, 
      lng: 8.4321
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 41.797, 
      lng: 12.6844
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 35.154506, 
      lng: 136.969546
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 36.366, 
      lng: 127.366
    }, 
    {
      lat: 36.148578, 
      lng: 140.076051
    }
  ], 
  [
    {
      lat: 49.0963, 
      lng: 8.4321
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 40.83785, 
      lng: 14.18287
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 46.347283, 
      lng: -119.307833
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 50.068978, 
      lng: 19.90916
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 50.068978, 
      lng: 19.90916
    }, 
    {
      lat: 49.0963, 
      lng: 8.4321
    }
  ], 
  [
    {
      lat: 36.366, 
      lng: 127.366
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 35.154506, 
      lng: 136.969546
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 25.015, 
      lng: 121.539
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 46.04217, 
      lng: 14.48767
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 48.464, 
      lng: -123.311
    }, 
    {
      lat: 35.154506, 
      lng: 136.969546
    }
  ], 
  [
    {
      lat: 48.2633, 
      lng: 11.6731
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: -34.910836, 
      lng: 138.57121
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 46.04217, 
      lng: 14.48767
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ], 
  [
    {
      lat: 41.797, 
      lng: 12.6844
    }, 
    {
      lat: 44.4948, 
      lng: 11.3417
    }
  ], 
  [
    {
      lat: 36.366, 
      lng: 127.366
    }, 
    {
      lat: 53.5772, 
      lng: 9.8772
    }
  ], 
  [
    {
      lat: 48.2, 
      lng: 16.2
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ], 
  [
    {
      lat: 40.83785, 
      lng: 14.18287
    }, 
    {
      lat: 50.102, 
      lng: 14.3886
    }
  ]
]
var linesColors = 
[
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#FFFF00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#FFFF00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#FFFF00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#FFFF00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#FFFF00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#FFFF00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#00CC00", 
  "#FFFF00", 
  "#0033FF", 
  "#0033FF", 
  "#0033FF", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#FFFF00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#0033FF", 
  "#FFFF00", 
  "#FFFF00", 
  "#FFFF00", 
  "#FFFF00", 
  "#0033FF", 
  "#0033FF", 
  "#FFFF00", 
  "#00CC00", 
  "#00CC00", 
  "#FFFF00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#FFFF00", 
  "#00CC00"
]
var linesDescription = 
[
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 37.4 KB/s </br>Efficiency: 83% </br>\n            Transfer Successes: 3566 </br>\n            Transfer Failures: 697  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 754 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2145.0 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 25247 </br>\n            Transfer Failures: 726  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 183.4 KB/s </br>Efficiency: 94% </br>\n            Transfer Successes: 2245 </br>\n            Transfer Failures: 133  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 419.0 KB/s </br>Efficiency: 78% </br>\n            Transfer Successes: 5651 </br>\n            Transfer Failures: 1578  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.6 KB/s </br>Efficiency: 38% </br>\n            Transfer Successes: 144 </br>\n            Transfer Failures: 231  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.1 KB/s </br>Efficiency: 73% </br>\n            Transfer Successes: 427 </br>\n            Transfer Failures: 156  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 343.3 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 3218 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 11.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 892 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 12.5 KB/s </br>Efficiency: 83% </br>\n            Transfer Successes: 1324 </br>\n            Transfer Failures: 270  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 611.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 5620 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 52.7 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 654 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 172.7 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1622 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 531.0 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 8188 </br>\n            Transfer Failures: 39  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 92.2 KB/s </br>Efficiency: 94% </br>\n            Transfer Successes: 8893 </br>\n            Transfer Failures: 507  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1129.8 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 11155 </br>\n            Transfer Failures: 187  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 227.6 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 1878 </br>\n            Transfer Failures: 87  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4592.7 KB/s </br>Efficiency: 87% </br>\n            Transfer Successes: 64435 </br>\n            Transfer Failures: 8972  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 7 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 25.9 KB/s </br>Efficiency: 84% </br>\n            Transfer Successes: 2686 </br>\n            Transfer Failures: 491  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.5 KB/s </br>Efficiency: 72% </br>\n            Transfer Successes: 29 </br>\n            Transfer Failures: 11  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1423.2 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 32059 </br>\n            Transfer Failures: 58  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 232.8 KB/s </br>Efficiency: 77% </br>\n            Transfer Successes: 2867 </br>\n            Transfer Failures: 834  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.2 KB/s </br>Efficiency: 85% </br>\n            Transfer Successes: 228 </br>\n            Transfer Failures: 40  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 56.1 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 5802 </br>\n            Transfer Failures: 31  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 466.4 KB/s </br>Efficiency: 63% </br>\n            Transfer Successes: 6994 </br>\n            Transfer Failures: 4068  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 297.5 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 2906 </br>\n            Transfer Failures: 33  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 9.9 KB/s </br>Efficiency: 81% </br>\n            Transfer Successes: 555 </br>\n            Transfer Failures: 122  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 219.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 2011 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 313 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 35.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 3647 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 83% </br>\n            Transfer Successes: 15 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 870.8 KB/s </br>Efficiency: 83% </br>\n            Transfer Successes: 14757 </br>\n            Transfer Failures: 2958  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2395.6 KB/s </br>Efficiency: 93% </br>\n            Transfer Successes: 27677 </br>\n            Transfer Failures: 2071  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 18.2 KB/s </br>Efficiency: 72% </br>\n            Transfer Successes: 1336 </br>\n            Transfer Failures: 509  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 766.3 KB/s </br>Efficiency: 82% </br>\n            Transfer Successes: 13296 </br>\n            Transfer Failures: 2791  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1319.7 KB/s </br>Efficiency: 84% </br>\n            Transfer Successes: 14913 </br>\n            Transfer Failures: 2786  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 305.4 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 3949 </br>\n            Transfer Failures: 53  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 19 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2404.6 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 24863 </br>\n            Transfer Failures: 397  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 201.5 KB/s </br>Efficiency: 58% </br>\n            Transfer Successes: 1764 </br>\n            Transfer Failures: 1236  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 6 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2627.1 KB/s </br>Efficiency: 87% </br>\n            Transfer Successes: 33368 </br>\n            Transfer Failures: 4981  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 65.3 KB/s </br>Efficiency: 89% </br>\n            Transfer Successes: 6094 </br>\n            Transfer Failures: 740  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 16.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1568 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 14.8 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 1326 </br>\n            Transfer Failures: 31  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 24.2 KB/s </br>Efficiency: 75% </br>\n            Transfer Successes: 2495 </br>\n            Transfer Failures: 830  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 67 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 974.9 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 10137 </br>\n            Transfer Failures: 184  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 445.0 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 10916 </br>\n            Transfer Failures: 81  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 96% </br>\n            Transfer Successes: 32 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1160.4 KB/s </br>Efficiency: 93% </br>\n            Transfer Successes: 11280 </br>\n            Transfer Failures: 738  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 14.3 KB/s </br>Efficiency: 62% </br>\n            Transfer Successes: 1452 </br>\n            Transfer Failures: 870  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 115.2 KB/s </br>Efficiency: 46% </br>\n            Transfer Successes: 1073 </br>\n            Transfer Failures: 1218  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 62% </br>\n            Transfer Successes: 5 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 31.3 KB/s </br>Efficiency: 81% </br>\n            Transfer Successes: 3231 </br>\n            Transfer Failures: 736  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 148.8 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 1710 </br>\n            Transfer Failures: 6  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 11.5 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 1206 </br>\n            Transfer Failures: 8  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 69.0 KB/s </br>Efficiency: 57% </br>\n            Transfer Successes: 752 </br>\n            Transfer Failures: 550  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 54.9 KB/s </br>Efficiency: 90% </br>\n            Transfer Successes: 5438 </br>\n            Transfer Failures: 592  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 681.2 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 6316 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 52.5 KB/s </br>Efficiency: 67% </br>\n            Transfer Successes: 568 </br>\n            Transfer Failures: 270  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 92% </br>\n            Transfer Successes: 12 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 40 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 419.4 KB/s </br>Efficiency: 88% </br>\n            Transfer Successes: 9682 </br>\n            Transfer Failures: 1265  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 89 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.1 KB/s </br>Efficiency: 87% </br>\n            Transfer Successes: 425 </br>\n            Transfer Failures: 63  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.6 KB/s </br>Efficiency: 90% </br>\n            Transfer Successes: 30 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 118 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 579.6 KB/s </br>Efficiency: 65% </br>\n            Transfer Successes: 11324 </br>\n            Transfer Failures: 6029  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 8.7 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 701 </br>\n            Transfer Failures: 31  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 12.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1305 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 439.4 KB/s </br>Efficiency: 79% </br>\n            Transfer Successes: 4080 </br>\n            Transfer Failures: 1021  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1393.4 KB/s </br>Efficiency: 96% </br>\n            Transfer Successes: 13513 </br>\n            Transfer Failures: 546  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 90.4 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 9469 </br>\n            Transfer Failures: 30  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 16 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 19 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 8.8 KB/s </br>Efficiency: 83% </br>\n            Transfer Successes: 935 </br>\n            Transfer Failures: 182  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 113 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.0 KB/s </br>Efficiency: 32% </br>\n            Transfer Successes: 93 </br>\n            Transfer Failures: 195  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 73.2 KB/s </br>Efficiency: 96% </br>\n            Transfer Successes: 749 </br>\n            Transfer Failures: 29  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 179.6 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 2449 </br>\n            Transfer Failures: 10  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 140.7 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 1279 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 75% </br>\n            Transfer Successes: 9 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 370 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 12 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.8 KB/s </br>Efficiency: 89% </br>\n            Transfer Successes: 336 </br>\n            Transfer Failures: 39  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1171.2 KB/s </br>Efficiency: 69% </br>\n            Transfer Successes: 15641 </br>\n            Transfer Failures: 6820  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 14.0 KB/s </br>Efficiency: 71% </br>\n            Transfer Successes: 958 </br>\n            Transfer Failures: 386  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 11 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 914.5 KB/s </br>Efficiency: 89% </br>\n            Transfer Successes: 8070 </br>\n            Transfer Failures: 987  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 358 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 7.1 KB/s </br>Efficiency: 74% </br>\n            Transfer Successes: 741 </br>\n            Transfer Failures: 252  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 47.3 KB/s </br>Efficiency: 79% </br>\n            Transfer Successes: 3424 </br>\n            Transfer Failures: 877  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 131 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 25.8 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 2113 </br>\n            Transfer Failures: 56  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4567.8 KB/s </br>Efficiency: 94% </br>\n            Transfer Successes: 47433 </br>\n            Transfer Failures: 2995  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 303.1 KB/s </br>Efficiency: 68% </br>\n            Transfer Successes: 1750 </br>\n            Transfer Failures: 793  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 13.9 KB/s </br>Efficiency: 34% </br>\n            Transfer Successes: 542 </br>\n            Transfer Failures: 1016  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.8 KB/s </br>Efficiency: 74% </br>\n            Transfer Successes: 82 </br>\n            Transfer Failures: 28  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 40.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 285 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 33.3 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 3276 </br>\n            Transfer Failures: 16  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 18.3 KB/s </br>Efficiency: 78% </br>\n            Transfer Successes: 1878 </br>\n            Transfer Failures: 511  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 17 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 4 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.7 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 71 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 42.8 KB/s </br>Efficiency: 83% </br>\n            Transfer Successes: 4412 </br>\n            Transfer Failures: 890  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 12 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 13.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1142 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 14 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 53.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 512 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.3 KB/s </br>Efficiency: 67% </br>\n            Transfer Successes: 136 </br>\n            Transfer Failures: 65  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 943.3 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 13450 </br>\n            Transfer Failures: 68  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 50.7 KB/s </br>Efficiency: 46% </br>\n            Transfer Successes: 439 </br>\n            Transfer Failures: 505  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 307.3 KB/s </br>Efficiency: 71% </br>\n            Transfer Successes: 2702 </br>\n            Transfer Failures: 1084  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 106.5 KB/s </br>Efficiency: 76% </br>\n            Transfer Successes: 1143 </br>\n            Transfer Failures: 357  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 67.8 KB/s </br>Efficiency: 77% </br>\n            Transfer Successes: 6275 </br>\n            Transfer Failures: 1835  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1303.7 KB/s </br>Efficiency: 86% </br>\n            Transfer Successes: 14061 </br>\n            Transfer Failures: 2259  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 32 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 594.5 KB/s </br>Efficiency: 92% </br>\n            Transfer Successes: 6646 </br>\n            Transfer Failures: 556  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 214.9 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 20105 </br>\n            Transfer Failures: 39  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 51.6 KB/s </br>Efficiency: 81% </br>\n            Transfer Successes: 472 </br>\n            Transfer Failures: 104  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.7 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 16 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 131.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1218 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 27.2 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 2877 </br>\n            Transfer Failures: 39  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2336.3 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 25300 </br>\n            Transfer Failures: 1291  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 18.6 KB/s </br>Efficiency: 86% </br>\n            Transfer Successes: 1910 </br>\n            Transfer Failures: 295  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 22.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 2423 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 51.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 582 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 62.2 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 6184 </br>\n            Transfer Failures: 36  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 870.1 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 11192 </br>\n            Transfer Failures: 35  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 285.9 KB/s </br>Efficiency: 53% </br>\n            Transfer Successes: 2515 </br>\n            Transfer Failures: 2170  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 607.4 KB/s </br>Efficiency: 86% </br>\n            Transfer Successes: 15402 </br>\n            Transfer Failures: 2391  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.3 KB/s </br>Efficiency: 88% </br>\n            Transfer Successes: 135 </br>\n            Transfer Failures: 18  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 377.5 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 4180 </br>\n            Transfer Failures: 5  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.9 KB/s </br>Efficiency: 82% </br>\n            Transfer Successes: 517 </br>\n            Transfer Failures: 108  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 165.6 KB/s </br>Efficiency: 62% </br>\n            Transfer Successes: 4553 </br>\n            Transfer Failures: 2762  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3709.5 KB/s </br>Efficiency: 45% </br>\n            Transfer Successes: 33565 </br>\n            Transfer Failures: 40313  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 42.7 KB/s </br>Efficiency: 51% </br>\n            Transfer Successes: 4231 </br>\n            Transfer Failures: 3967  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.4 KB/s </br>Efficiency: 57% </br>\n            Transfer Successes: 668 </br>\n            Transfer Failures: 484  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 44.3 KB/s </br>Efficiency: 51% </br>\n            Transfer Successes: 400 </br>\n            Transfer Failures: 374  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.0 KB/s </br>Efficiency: 75% </br>\n            Transfer Successes: 3 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 249.1 KB/s </br>Efficiency: 77% </br>\n            Transfer Successes: 3253 </br>\n            Transfer Failures: 919  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.8 KB/s </br>Efficiency: 44% </br>\n            Transfer Successes: 76 </br>\n            Transfer Failures: 93  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 798.5 KB/s </br>Efficiency: 96% </br>\n            Transfer Successes: 6509 </br>\n            Transfer Failures: 257  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 17.2 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 1759 </br>\n            Transfer Failures: 85  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 22.0 KB/s </br>Efficiency: 58% </br>\n            Transfer Successes: 2238 </br>\n            Transfer Failures: 1589  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 KB/s </br>Efficiency: 89% </br>\n            Transfer Successes: 26 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 28 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.3 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 129 </br>\n            Transfer Failures: 2  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 11.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1230 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 15.1 KB/s </br>Efficiency: 40% </br>\n            Transfer Successes: 1273 </br>\n            Transfer Failures: 1854  </br>\n            </div><br />", 
  "<strong>Source = Napoli-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 4 </br>\n            Transfer Failures: 0  </br>\n            </div><br />"
]
var global_statistics = 
[
  52.3, 
  86.0, 
  42, 
  23, 
  158
]