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
    -33.866667, 
    151.2
  ], 
  [
    "CLOUD.AWS_Tokyo.jp", 
    35.684498, 
    139.75193
  ], 
  [
    "CLOUD.AWS_Virginia.us", 
    38.988803, 
    -77.447635
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
    116.340833333333
  ], 
  [
    "DIRAC.CINVESTAV.mx", 
    19.510869, 
    -99.128603
  ], 
  [
    "DIRAC.Hokudai.jp", 
    43.073511, 
    141.345669
  ], 
  [
    "DIRAC.IITG.in", 
    26.192935, 
    91.695123
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
    135.50753570000006
  ], 
  [
    "DIRAC.PNNL.us", 
    46.347283, 
    -119.307833
  ], 
  [
    "DIRAC.RCNP.jp", 
    34.82661, 
    135.527119
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
    48.47, 
    -123.31
  ], 
  [
    "DIRAC.Yamagata.jp", 
    38.2471317, 
    140.350197
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
    36.06, 
    140.2303
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
  "<strong>ARC.SIGNET.si</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 195332 (98.4%) </br>\n            Jobs Failed: 3142 (1.6%) </br>\n            (Total: 198474)<br />\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Sydney.au</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 1603 (59.7%) </br>\n            Jobs Failed: 1081 (40.3%) </br>\n            (Total: 2684)<br />\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Tokyo.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 412 (75.9%) </br>\n            Jobs Failed: 131 (24.1%) </br>\n            (Total: 543)<br />\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Virginia.us</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 6230 (73.1%) </br>\n            Jobs Failed: 2293 (26.9%) </br>\n            (Total: 8523)<br />\n            </div><br />     ", 
  "<strong>CLOUD.CC1_Krakow.pl</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 59229 (99.0%) </br>\n            Jobs Failed: 578 (1.0%) </br>\n            (Total: 59807)<br />\n            </div><br />     ", 
  "<strong>DIRAC.BINP.ru</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 191098 (96.0%) </br>\n            Jobs Failed: 8050 (4.0%) </br>\n            (Total: 199148)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Beihang.cn</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 17702 (88.3%) </br>\n            Jobs Failed: 2336 (11.7%) </br>\n            (Total: 20038)<br />\n            </div><br />     ", 
  "<strong>DIRAC.CINVESTAV.mx</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 56277 (96.9%) </br>\n            Jobs Failed: 1826 (3.1%) </br>\n            (Total: 58103)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Hokudai.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 11209 (99.0%) </br>\n            Jobs Failed: 113 (1.0%) </br>\n            (Total: 11322)<br />\n            </div><br />     ", 
  "<strong>DIRAC.IITG.in</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 3793 (94.6%) </br>\n            Jobs Failed: 217 (5.4%) </br>\n            (Total: 4010)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Nara-WU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 13141 (97.9%) </br>\n            Jobs Failed: 286 (2.1%) </br>\n            (Total: 13427)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Niigata.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 12893 (80.7%) </br>\n            Jobs Failed: 3078 (19.3%) </br>\n            (Total: 15971)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Osaka-CU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 20754 (98.7%) </br>\n            Jobs Failed: 270 (1.3%) </br>\n            (Total: 21024)<br />\n            </div><br />     ", 
  "<strong>DIRAC.PNNL.us</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 457814 (98.7%) </br>\n            Jobs Failed: 5904 (1.3%) </br>\n            (Total: 463718)<br />\n            </div><br />     ", 
  "<strong>DIRAC.RCNP.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 34245 (99.4%) </br>\n            Jobs Failed: 206 (0.6%) </br>\n            (Total: 34451)<br />\n            </div><br />     ", 
  "<strong>DIRAC.TIFR.in</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 4265 (96.4%) </br>\n            Jobs Failed: 158 (3.6%) </br>\n            (Total: 4423)<br />\n            </div><br />     ", 
  "<strong>DIRAC.TMU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 20468 (95.3%) </br>\n            Jobs Failed: 1012 (4.7%) </br>\n            (Total: 21480)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Tokyo.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 4287 (99.2%) </br>\n            Jobs Failed: 34 (0.8%) </br>\n            (Total: 4321)<br />\n            </div><br />     ", 
  "<strong>DIRAC.UAS.mx</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 13615 (95.1%) </br>\n            Jobs Failed: 698 (4.9%) </br>\n            (Total: 14313)<br />\n            </div><br />     ", 
  "<strong>DIRAC.UVic.ca</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 483229 (96.5%) </br>\n            Jobs Failed: 17280 (3.5%) </br>\n            (Total: 500509)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Yamagata.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 1066 (99.3%) </br>\n            Jobs Failed: 8 (0.7%) </br>\n            (Total: 1074)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Yonsei.kr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 8946 (67.5%) </br>\n            Jobs Failed: 4311 (32.5%) </br>\n            (Total: 13257)<br />\n            </div><br />     ", 
  "<strong>LCG.CESNET.cz</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 249533 (99.1%) </br>\n            Jobs Failed: 2308 (0.9%) </br>\n            (Total: 251841)<br />\n            </div><br />     ", 
  "<strong>LCG.CNAF.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 175245 (89.4%) </br>\n            Jobs Failed: 20742 (10.6%) </br>\n            (Total: 195987)<br />\n            </div><br />     ", 
  "<strong>LCG.CYFRONET.pl</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 105569 (95.4%) </br>\n            Jobs Failed: 5081 (4.6%) </br>\n            (Total: 110650)<br />\n            </div><br />     ", 
  "<strong>LCG.Cosenza.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 140026 (97.2%) </br>\n            Jobs Failed: 4054 (2.8%) </br>\n            (Total: 144080)<br />\n            </div><br />     ", 
  "<strong>LCG.DESY.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 1300666 (98.2%) </br>\n            Jobs Failed: 24485 (1.8%) </br>\n            (Total: 1325151)<br />\n            </div><br />     ", 
  "<strong>LCG.Frascati.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 137850 (98.8%) </br>\n            Jobs Failed: 1729 (1.2%) </br>\n            (Total: 139579)<br />\n            </div><br />     ", 
  "<strong>LCG.HEPHY.at</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 275404 (98.2%) </br>\n            Jobs Failed: 5173 (1.8%) </br>\n            (Total: 280577)<br />\n            </div><br />     ", 
  "<strong>LCG.KEK2.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 574729 (97.7%) </br>\n            Jobs Failed: 13804 (2.3%) </br>\n            (Total: 588533)<br />\n            </div><br />     ", 
  "<strong>LCG.KISTI.kr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 92845 (98.5%) </br>\n            Jobs Failed: 1456 (1.5%) </br>\n            (Total: 94301)<br />\n            </div><br />     ", 
  "<strong>LCG.KIT.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 850236 (99.1%) </br>\n            Jobs Failed: 8048 (0.9%) </br>\n            (Total: 858284)<br />\n            </div><br />     ", 
  "<strong>LCG.KMI.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 239510 (98.5%) </br>\n            Jobs Failed: 3657 (1.5%) </br>\n            (Total: 243167)<br />\n            </div><br />     ", 
  "<strong>LCG.Legnaro.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 21101 (98.8%) </br>\n            Jobs Failed: 253 (1.2%) </br>\n            (Total: 21354)<br />\n            </div><br />     ", 
  "<strong>LCG.MPPMU.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 390487 (98.0%) </br>\n            Jobs Failed: 7851 (2.0%) </br>\n            (Total: 398338)<br />\n            </div><br />     ", 
  "<strong>LCG.McGill.ca</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 22948 (97.9%) </br>\n            Jobs Failed: 486 (2.1%) </br>\n            (Total: 23434)<br />\n            </div><br />     ", 
  "<strong>LCG.Melbourne.au</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 58976 (98.6%) </br>\n            Jobs Failed: 865 (1.4%) </br>\n            (Total: 59841)<br />\n            </div><br />     ", 
  "<strong>LCG.NTU.tw</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 9119 (98.7%) </br>\n            Jobs Failed: 119 (1.3%) </br>\n            (Total: 9238)<br />\n            </div><br />     ", 
  "<strong>LCG.Napoli.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 361245 (97.5%) </br>\n            Jobs Failed: 9307 (2.5%) </br>\n            (Total: 370552)<br />\n            </div><br />     ", 
  "<strong>LCG.Pisa.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 469701 (97.4%) </br>\n            Jobs Failed: 12328 (2.6%) </br>\n            (Total: 482029)<br />\n            </div><br />     ", 
  "<strong>LCG.Torino.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 28034 (97.5%) </br>\n            Jobs Failed: 721 (2.5%) </br>\n            (Total: 28755)<br />\n            </div><br />     ", 
  "<strong>LCG.ULAKBIM.tr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 20712 (95.9%) </br>\n            Jobs Failed: 891 (4.1%) </br>\n            (Total: 21603)<br />\n            </div><br />     ", 
  "<strong>SSH.KMI.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 10003 (98.9%) </br>\n            Jobs Failed: 114 (1.1%) </br>\n            (Total: 10117)<br />\n            </div><br />     "
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
    url: 'images/pie_ARC.SIGNET.si.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/cloud.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/cloud.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/cloud.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/cloud.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.BINP.ru.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Beihang.cn.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.CINVESTAV.mx.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Hokudai.jp.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.IITG.in.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Nara-WU.jp.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Niigata.jp.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Osaka-CU.jp.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.PNNL.us.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.RCNP.jp.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.TIFR.in.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.TMU.jp.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Tokyo.jp.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.UAS.mx.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.UVic.ca.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Yamagata.jp.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Yonsei.kr.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.CESNET.cz.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.CNAF.it.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.CYFRONET.pl.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Cosenza.it.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.DESY.de.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Frascati.it.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.HEPHY.at.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KEK2.jp.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KISTI.kr.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KIT.de.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KMI.jp.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Legnaro.it.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.MPPMU.de.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.McGill.ca.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Melbourne.au.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.NTU.tw.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Napoli.it.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Pisa.it.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Torino.it.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.ULAKBIM.tr.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_SSH.KMI.jp.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }
]

var images_se = 
[
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }
]

var lineCoordinates = 
[
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
      lat: 39.99, 
      lng: 33.02
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
      lat: 39.99, 
      lng: 33.02
    }, 
    {
      lat: 40.83785, 
      lng: 14.18287
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
      lat: 39.99, 
      lng: 33.02
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
  ]
]
var linesColors = 
[
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
  "#FF0000", 
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
  "#00CC00"
]
var linesDescription = 
[
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 56 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 17 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 18.0 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 1315 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 11 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 88 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 14 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 39 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 119 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 74 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 453 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 40 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 159 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 13.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 165 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 259 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 11.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 866 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 40 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 29.1 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 896 </br>\n            Transfer Failures: 2  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 210 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.7 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 126 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 19.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1353 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 186 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 305 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 128 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 156 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 76 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 11 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 143 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 55.9 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 980 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 34 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 14.7 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1090 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 7.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 255 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 277 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 18.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 355 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 94% </br>\n            Transfer Successes: 16 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 13.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 976 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 204 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 218 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 137 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 328 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 19 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 38.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 297 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 8.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 594 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 17 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.7 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 52 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 327 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 117 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 79 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.9 KB/s </br>Efficiency: 18% </br>\n            Transfer Successes: 133 </br>\n            Transfer Failures: 580  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 5.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 330 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 90% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 2  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 109 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 7.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 530 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 33 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 5.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 172 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 34 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 424 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 169 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 11.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 103 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 319 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 148 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 18 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.4 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 76 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 66 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 36 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 18 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 15.7 KB/s </br>Efficiency: 71% </br>\n            Transfer Successes: 333 </br>\n            Transfer Failures: 131  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 43.0 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 1473 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 204 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 19 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 93 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.1 KB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 76 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 355 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 22.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1686 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 286 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 80 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 151 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 18 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.7 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 45 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 270 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 282 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 59 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 7 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 7 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.7 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 493 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 11.7 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 815 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 9.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 212 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 440 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 122 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 9.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 688 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 118 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 40 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 12 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.9 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 174 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 15.1 KB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 1058 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 12 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.7 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 32 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 251 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 18 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 KB/s </br>Efficiency: 97% </br>\n            Transfer Successes: 37 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 300 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.0 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 60 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.5 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 229 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.1 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 72 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 37 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.8 KB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 56 </br>\n            Transfer Failures: 0  </br>\n            </div><br />"
]
var global_statistics = 
[
  569.2, 
  98.0, 
  43, 
  23, 
  121
]