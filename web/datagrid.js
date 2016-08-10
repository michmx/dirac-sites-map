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
  "<strong>Adelaide-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/ersa.edu.au/home/belle/DATA </br>\n            Endpoint: coepp-dpm-01.ersa.edu.au </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>CESNET-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/cesnet.cz/home/belle/DATA </br>\n            Endpoint: dpm1.egee.cesnet.cz </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>CNAF-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n            Endpoint: storm-fe-archive.cr.cnaf.infn.it </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: 22.13% </div>", 
  "<strong>CYFRONET-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/cyf-kr.edu.pl/home/belle/DATA </br>\n            Endpoint: dpm.cyf-kr.edu.pl </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>DESY-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /pnfs/desy.de/belle/belle2/DATA </br>\n            Endpoint: dcache-se-desy.desy.de </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>Frascati-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/lnf.infn.it/home/belle/DATA </br>\n            Endpoint: atlasse.lnf.infn.it </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>HEPHY-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/oeaw.ac.at/home </br>\n            Endpoint: hephyse.oeaw.ac.at </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>KEK-FailoverSE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /DataManagement/StorageElement </br>\n            Endpoint: dirac1.cc.kek.jp </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>KEK2-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n            Endpoint: kek2-se01.cc.kek.jp </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: 39.16% </div>", 
  "<strong>KISTI-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/sdfarm.kr/home/belle/DATA </br>\n            Endpoint: belle-se-head.sdfarm.kr </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>KIT-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /pnfs/gridka.de/belle/disk-only/DATA </br>\n            Endpoint: gridka-dcache.fzk.de </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: 56.78% </div>", 
  "<strong>KMI-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n            Endpoint: nsrmfe01.hepl.phys.nagoya-u.ac.jp </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: 53.60% </div>", 
  "<strong>MPPMU-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /pnfs/rzg.mpg.de/data/belle/DATA </br>\n            Endpoint: grid-srm.rzg.mpg.de </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>Melbourne-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/mel.coepp.org.au/home/belle/DATA </br>\n            Endpoint: b2se.mel.coepp.org.au </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>NCHC-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/grid.nchc.org.tw/home/belle/DATA </br>\n            Endpoint: se01.grid.nchc.org.tw </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>NTU-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /pnfs/phys.ntu.edu.tw/home/belle/DATA </br>\n            Endpoint: bgrid3.phys.ntu.edu.tw </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>Napoli-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/na.infn.it/home/belle/DATA </br>\n            Endpoint: belle-dpm-01.na.infn.it </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: 46.60% </div>", 
  "<strong>PNNL-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /se/belle/DATA </br>\n            Endpoint: se.hep.pnnl.gov </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>SIGNET-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /pnfs/ijs.si/belle/DATA </br>\n            Endpoint: dcache.ijs.si </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: 83.68% </div>", 
  "<strong>Torino-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n            Endpoint: se-srm-00.to.infn.it </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>UA-ISMA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/isma.kharkov.ua/home </br>\n            Endpoint: gl-dpm.isma.kharkov.ua </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>ULAKBIM-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /dpm/ulakbim.gov.tr/home/belle/DATA </br>\n            Endpoint: torik1.ulakbim.gov.tr </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>", 
  "<strong>UVic-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n            <div style=\"padding-left: 5px;\">Path: /pnfs/westgrid.uvic.ca/data/belle/belledisk/DATA </br>\n            Endpoint: charon01.westgrid.ca </br>\n            </div><br />\n            </br><div style=\"padding-left: 5px;\">Free space: unknown </div>"
]

var images = 
[
  {
    url: 'images/pie_ARC.SIGNET.si.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(58.8103296987, 58.8103296987)
  }, 
  {
    url: 'images/cloud.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/cloud.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/cloud.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/cloud.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.BINP.ru.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(54.791446889, 54.791446889)
  }, 
  {
    url: 'images/pie_DIRAC.Beihang.cn.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40.0, 40.0)
  }, 
  {
    url: 'images/pie_DIRAC.CINVESTAV.mx.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(39.462557072, 39.462557072)
  }, 
  {
    url: 'images/pie_DIRAC.DESY.de.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.Hokudai.jp.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.Nara-WU.jp.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.Niigata.jp.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.Osaka-CU.jp.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.PNNL.us.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(68.1273967094, 68.1273967094)
  }, 
  {
    url: 'images/pie_DIRAC.TIFR.in.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.TMU.jp.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(34.3200668727, 34.3200668727)
  }, 
  {
    url: 'images/pie_DIRAC.Tokyo.jp.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.UAS.mx.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_DIRAC.UVic.ca.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(63.4520586242, 63.4520586242)
  }, 
  {
    url: 'images/pie_DIRAC.Yonsei.kr.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_LCG.CESNET.cz.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(54.1001591867, 54.1001591867)
  }, 
  {
    url: 'images/pie_LCG.CNAF.it.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(52.8690535297, 52.8690535297)
  }, 
  {
    url: 'images/pie_LCG.CYFRONET.pl.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(50.3174768742, 50.3174768742)
  }, 
  {
    url: 'images/pie_LCG.Cosenza.it.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(54.0486107289, 54.0486107289)
  }, 
  {
    url: 'images/pie_LCG.DESY.de.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(72.9398307495, 72.9398307495)
  }, 
  {
    url: 'images/pie_LCG.Frascati.it.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(46.5675920688, 46.5675920688)
  }, 
  {
    url: 'images/pie_LCG.HEPHY.at.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(53.5155668335, 53.5155668335)
  }, 
  {
    url: 'images/pie_LCG.KEK2.jp.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(49.2778597797, 49.2778597797)
  }, 
  {
    url: 'images/pie_LCG.KISTI.kr.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(49.8552077805, 49.8552077805)
  }, 
  {
    url: 'images/pie_LCG.KIT.de.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(70.6525400246, 70.6525400246)
  }, 
  {
    url: 'images/pie_LCG.KMI.jp.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(51.3640344813, 51.3640344813)
  }, 
  {
    url: 'images/pie_LCG.Legnaro.it.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_LCG.MPPMU.de.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(57.9854637464, 57.9854637464)
  }, 
  {
    url: 'images/pie_LCG.McGill.ca.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_LCG.Melbourne.au.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(35.2685598713, 35.2685598713)
  }, 
  {
    url: 'images/pie_LCG.NCHC.tw.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(53.9445868552, 53.9445868552)
  }, 
  {
    url: 'images/pie_LCG.NTU.tw.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_LCG.Napoli.it.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(60.2483074952, 60.2483074952)
  }, 
  {
    url: 'images/pie_LCG.Pisa.it.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(50.8315848789, 50.8315848789)
  }, 
  {
    url: 'images/pie_LCG.Torino.it.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_LCG.ULAKBIM.tr.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }, 
  {
    url: 'images/pie_SSH.KMI.jp.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(33.9794000867, 33.9794000867)
  }
]

var images_se = 
[
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_33y.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_66y.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_66y.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_66y.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_66y.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_99y.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_unknown.png?t=2016/08/10:17:50', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }
]

var lineCoordinates = 
[
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
      lat: -34.910836, 
      lng: 138.57121
    }, 
    {
      lat: -34.910836, 
      lng: 138.57121
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
      lat: -37.8, 
      lng: 144.96
    }, 
    {
      lat: -34.910836, 
      lng: 138.57121
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
      lat: 48.2, 
      lng: 16.2
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ]
]
var linesColors = 
[
  "#00CC00", 
  "#00CC00", 
  "#FF0000", 
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
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#FFFF00", 
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
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00", 
  "#00CC00"
]
var linesDescription = 
[
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.6 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 250 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 38.1 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 2568 </br>\n            Transfer Failures: 43  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.0 KB/s </br>Efficiency: 0% </br>\n            Transfer Successes: 0 </br>\n            Transfer Failures: 2036  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 426 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 21 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.1 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 140 </br>\n            Transfer Failures: 7  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 168 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 12.8 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 877 </br>\n            Transfer Failures: 20  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 9.8 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 664 </br>\n            Transfer Failures: 11  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 10.8 KB/s </br>Efficiency: 94% </br>\n            Transfer Successes: 729 </br>\n            Transfer Failures: 42  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 36.4 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 2443 </br>\n            Transfer Failures: 31  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 33.9 KB/s </br>Efficiency: 75% </br>\n            Transfer Successes: 2402 </br>\n            Transfer Failures: 793  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = Adelaide-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.2 KB/s </br>Efficiency: 80% </br>\n            Transfer Successes: 246 </br>\n            Transfer Failures: 58  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 21.3 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 1439 </br>\n            Transfer Failures: 21  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.5 KB/s </br>Efficiency: 96% </br>\n            Transfer Successes: 172 </br>\n            Transfer Failures: 6  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 8.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 587 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 8.9 KB/s </br>Efficiency: 81% </br>\n            Transfer Successes: 592 </br>\n            Transfer Failures: 130  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 9.9 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 678 </br>\n            Transfer Failures: 12  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.8 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 256 </br>\n            Transfer Failures: 13  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 20.4 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 1388 </br>\n            Transfer Failures: 16  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 31 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 12 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 280 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 14.8 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 1012 </br>\n            Transfer Failures: 53  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 46.9 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 3078 </br>\n            Transfer Failures: 159  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 7.1 KB/s </br>Efficiency: 93% </br>\n            Transfer Successes: 465 </br>\n            Transfer Failures: 30  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 43.3 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 2907 </br>\n            Transfer Failures: 87  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 23.4 KB/s </br>Efficiency: 72% </br>\n            Transfer Successes: 1676 </br>\n            Transfer Failures: 622  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 5.1 KB/s </br>Efficiency: 89% </br>\n            Transfer Successes: 347 </br>\n            Transfer Failures: 42  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 31.2 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 2089 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 49.7 KB/s </br>Efficiency: 84% </br>\n            Transfer Successes: 3396 </br>\n            Transfer Failures: 610  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.6 KB/s </br>Efficiency: 96% </br>\n            Transfer Successes: 109 </br>\n            Transfer Failures: 4  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 2 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 8.2 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 543 </br>\n            Transfer Failures: 9  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 9.2 KB/s </br>Efficiency: 91% </br>\n            Transfer Successes: 631 </br>\n            Transfer Failures: 55  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 46.4 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 3152 </br>\n            Transfer Failures: 84  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 29 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 5.7 KB/s </br>Efficiency: 96% </br>\n            Transfer Successes: 386 </br>\n            Transfer Failures: 14  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.0 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 411 </br>\n            Transfer Failures: 20  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 10.5 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 706 </br>\n            Transfer Failures: 17  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 5.9 KB/s </br>Efficiency: 96% </br>\n            Transfer Successes: 400 </br>\n            Transfer Failures: 15  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 225 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 7.8 KB/s </br>Efficiency: 77% </br>\n            Transfer Successes: 519 </br>\n            Transfer Failures: 147  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 7.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 487 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 5.7 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 387 </br>\n            Transfer Failures: 18  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 7.6 KB/s </br>Efficiency: 96% </br>\n            Transfer Successes: 517 </br>\n            Transfer Failures: 16  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 35.8 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 2423 </br>\n            Transfer Failures: 48  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 200 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 KB/s </br>Efficiency: 92% </br>\n            Transfer Successes: 25 </br>\n            Transfer Failures: 2  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 43.7 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 2926 </br>\n            Transfer Failures: 150  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 69 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.4 KB/s </br>Efficiency: 28% </br>\n            Transfer Successes: 419 </br>\n            Transfer Failures: 1071  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 17.9 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 1212 </br>\n            Transfer Failures: 5  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 47.5 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 3196 </br>\n            Transfer Failures: 14  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 13 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.5 KB/s </br>Efficiency: 85% </br>\n            Transfer Successes: 34 </br>\n            Transfer Failures: 6  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 170 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.2 KB/s </br>Efficiency: 96% </br>\n            Transfer Successes: 430 </br>\n            Transfer Failures: 17  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 166 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 7.9 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 542 </br>\n            Transfer Failures: 4  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.1 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 142 </br>\n            Transfer Failures: 4  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 29.5 KB/s </br>Efficiency: 86% </br>\n            Transfer Successes: 1979 </br>\n            Transfer Failures: 310  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.6 KB/s </br>Efficiency: 91% </br>\n            Transfer Successes: 446 </br>\n            Transfer Failures: 39  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.6 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 178 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 35.8 KB/s </br>Efficiency: 90% </br>\n            Transfer Successes: 2356 </br>\n            Transfer Failures: 250  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 30 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.4 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 92 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 34.6 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 2317 </br>\n            Transfer Failures: 53  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 11.3 KB/s </br>Efficiency: 92% </br>\n            Transfer Successes: 758 </br>\n            Transfer Failures: 65  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 44 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 9.7 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 649 </br>\n            Transfer Failures: 7  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 80% </br>\n            Transfer Successes: 4 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 25.6 KB/s </br>Efficiency: 53% </br>\n            Transfer Successes: 1836 </br>\n            Transfer Failures: 1570  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.3 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 85 </br>\n            Transfer Failures: 4  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 12 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 10.4 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 699 </br>\n            Transfer Failures: 8  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = Adelaide-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.4 KB/s </br>Efficiency: 81% </br>\n            Transfer Successes: 275 </br>\n            Transfer Failures: 61  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 23 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 5.5 KB/s </br>Efficiency: 90% </br>\n            Transfer Successes: 374 </br>\n            Transfer Failures: 38  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.7 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 118 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 24.5 KB/s </br>Efficiency: 77% </br>\n            Transfer Successes: 1724 </br>\n            Transfer Failures: 508  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 15.7 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 1057 </br>\n            Transfer Failures: 9  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 10.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 732 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.6 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 178 </br>\n            Transfer Failures: 4  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 88 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 29.8 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 2012 </br>\n            Transfer Failures: 44  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 9.5 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 614 </br>\n            Transfer Failures: 17  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 17.6 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 1193 </br>\n            Transfer Failures: 13  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.3 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 158 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 31.3 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 2121 </br>\n            Transfer Failures: 46  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 46.5 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 3102 </br>\n            Transfer Failures: 12  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 7 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 10.7 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 729 </br>\n            Transfer Failures: 8  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 201 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 36.3 KB/s </br>Efficiency: 92% </br>\n            Transfer Successes: 2480 </br>\n            Transfer Failures: 188  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 34.4 KB/s </br>Efficiency: 73% </br>\n            Transfer Successes: 2462 </br>\n            Transfer Failures: 876  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.7 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 247 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 7.7 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 535 </br>\n            Transfer Failures: 28  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 13.3 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 907 </br>\n            Transfer Failures: 14  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 38 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 14.8 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 988 </br>\n            Transfer Failures: 48  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 41 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.1 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 208 </br>\n            Transfer Failures: 6  </br>\n            </div><br />"
]
var linesStroke = 
[
  2.84538622112232, 
  6.252312830733066, 
  1, 
  3.658280309260806, 
  1, 
  2.101208024479412, 
  2.3061965198901175, 
  4.674984512351782, 
  4.286697470275878, 
  4.434913594810162, 
  6.186160230401129, 
  6.081899243238958, 
  2.116470271123661, 
  5.413605758573725, 
  2.348862520637604, 
  4.13339079957006, 
  4.151420876373665, 
  4.31244414887011, 
  2.9125727549038163, 
  5.352923569999448, 
  1, 
  1, 
  3.0189638731180155, 
  4.888841060212865, 
  6.55168523887933, 
  3.8370800438445123, 
  6.43513783555581, 
  5.550624251479254, 
  3.3410428593731325, 
  5.962061440509187, 
  6.636421703981296, 
  1.671934242548332, 
  1, 
  4.044271646638881, 
  4.203470115575129, 
  6.536469033333517, 
  1, 
  3.5026716049362854, 
  3.581442968688869, 
  4.3929274292022935, 
  3.5562155762711614, 
  2.7455057104445872, 
  3.963904476922085, 
  3.895259395256788, 
  3.515304143878164, 
  3.917840114567601, 
  6.1607048325362515, 
  2.5408793081374785, 
  1, 
  6.448114739364903, 
  1.1734329106078631, 
  3.6814736444297256, 
  1, 
  5.158900630892161, 
  6.570564605240671, 
  1, 
  1, 
  2.3214765425002444, 
  3.6310107438866206, 
  2.2854923485222844, 
  3.9880525802851645, 
  2.0658100997258195, 
  5.883715475270819, 
  3.7211972756299265, 
  2.3913514904579856, 
  6.162350622773264, 
  1, 
  1.4961753267614422, 
  6.113323816170446, 
  4.494517671473198, 
  1, 
  4.27402009229168, 
  1, 
  5.679310750024367, 
  1.3940481017809088, 
  1, 
  4.381857087193152, 
  2.276663771180429, 
  1, 
  3.4523225753022087, 
  1.7759829470218245, 
  5.6121553599948175, 
  4.976447523934361, 
  4.430920473943204, 
  2.374339385905908, 
  1.4199335120639174, 
  5.899367773548412, 
  4.249602616401694, 
  5.13359254998006, 
  2.2189008721460954, 
  5.9696882839601795, 
  6.54023976026532, 
  1, 
  4.417232803399454, 
  2.5875600640725622, 
  6.182702457763925, 
  6.102416942520198, 
  2.8701534795839017, 
  3.9450564772683325, 
  4.734562099337789, 
  1, 
  4.883759785049175, 
  1, 
  2.6251311539147677
]
var global_statistics = 
[
  1.3, 
  93.0, 
  42, 
  23, 
  104
]