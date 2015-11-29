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
    "Adelaide-SE", 
    -34.910836, 
    138.57121
  ], 
  [
    "Adelaide-TMP-SE", 
    -34.910836, 
    138.57121
  ], 
  [
    "CESNET-DATA-SE", 
    50.102, 
    14.3886
  ], 
  [
    "CESNET-TMP-SE", 
    50.102, 
    14.3886
  ], 
  [
    "CNAF-DATA-SE", 
    44.4948, 
    11.3417
  ], 
  [
    "CNAF-SE", 
    44.4948, 
    11.3417
  ], 
  [
    "CNAF-TMP-SE", 
    44.4948, 
    11.3417
  ], 
  [
    "CYFRONET-DATA-SE", 
    50.068978, 
    19.90916
  ], 
  [
    "CYFRONET-SE", 
    50.068978, 
    19.90916
  ], 
  [
    "CYFRONET-TMP-SE", 
    50.068978, 
    19.90916
  ], 
  [
    "DESY-DATA-SE", 
    53.5772, 
    9.8772
  ], 
  [
    "DESY-SE", 
    53.5772, 
    9.8772
  ], 
  [
    "DESY-TMP-SE", 
    53.5772, 
    9.8772
  ], 
  [
    "Frascati-DATA-SE", 
    41.797, 
    12.6844
  ], 
  [
    "Frascati-SE", 
    41.797, 
    12.6844
  ], 
  [
    "Frascati-TMP-SE", 
    41.797, 
    12.6844
  ], 
  [
    "HEPHY-SE", 
    48.2, 
    16.2
  ], 
  [
    "HEPHY-TMP-SE", 
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
    "KEK2-LOCAL-SE", 
    36.148578, 
    140.076051
  ], 
  [
    "KEK2-SE", 
    36.148578, 
    140.076051
  ], 
  [
    "KEK2-TMP-SE", 
    36.148578, 
    140.076051
  ], 
  [
    "KEK2-XRootD-SE", 
    36.148578, 
    140.076051
  ], 
  [
    "KISTI-DATA-SE", 
    36.366, 
    127.366
  ], 
  [
    "KISTI-TMP-SE", 
    36.366, 
    127.366
  ], 
  [
    "KIT-DATA-SE", 
    49.0963, 
    8.4321
  ], 
  [
    "KIT-SE", 
    49.0963, 
    8.4321
  ], 
  [
    "KIT-TMP-SE", 
    49.0963, 
    8.4321
  ], 
  [
    "KMI-DATA-SE", 
    35.154506, 
    136.969546
  ], 
  [
    "KMI-LOCAL-SE", 
    35.154506, 
    136.969546
  ], 
  [
    "KMI-SE", 
    35.154506, 
    136.969546
  ], 
  [
    "KMI-TMP-SE", 
    35.154506, 
    136.969546
  ], 
  [
    "KMI-XRootD-SE", 
    35.154506, 
    136.969546
  ], 
  [
    "MPPMU-DATA-SE", 
    48.2633, 
    11.6731
  ], 
  [
    "MPPMU-SE", 
    48.2633, 
    11.6731
  ], 
  [
    "MPPMU-TMP-SE", 
    48.2633, 
    11.6731
  ], 
  [
    "Melbourne-DATA-SE", 
    -37.8, 
    144.96
  ], 
  [
    "Melbourne-SE", 
    -37.8, 
    144.96
  ], 
  [
    "Melbourne-TMP-SE", 
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
    "NTU-SE", 
    25.015, 
    121.539
  ], 
  [
    "NTU-TMP-SE", 
    25.015, 
    121.539
  ], 
  [
    "Napoli-DATA-SE", 
    40.83785, 
    14.18287
  ], 
  [
    "Napoli-SE", 
    40.83785, 
    14.18287
  ], 
  [
    "Napoli-TMP-SE", 
    40.83785, 
    14.18287
  ], 
  [
    "PNNL-DATA-SE", 
    46.347283, 
    -119.307833
  ], 
  [
    "PNNL-DEDICATED-SE", 
    46.347283, 
    -119.307833
  ], 
  [
    "PNNL-TMP-SE", 
    46.347283, 
    -119.307833
  ], 
  [
    "SIGNET-DATA-SE", 
    46.04217, 
    14.48767
  ], 
  [
    "SIGNET-SE", 
    46.04217, 
    14.48767
  ], 
  [
    "SIGNET-TMP-SE", 
    46.04217, 
    14.48767
  ], 
  [
    "Torino-DATA-SE", 
    45.03, 
    7.4
  ], 
  [
    "Torino-TMP-SE", 
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
    "ULAKBIM-SE", 
    39.99, 
    33.02
  ], 
  [
    "ULAKBIM-TMP-SE", 
    39.99, 
    33.02
  ], 
  [
    "UVic-DATA-SE", 
    48.464, 
    -123.311
  ], 
  [
    "UVic-SE", 
    48.464, 
    -123.311
  ], 
  [
    "UVic-TMP-SE", 
    48.464, 
    -123.311
  ]
]
var contentString = 
[
  "<strong>ARC.SIGNET.si</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 188734 (98.0%) </br>\n            Jobs Failed: 3770 (2.0%) </br>\n            (Total: 192504)<br />\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Sydney.au</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 1617 (59.9%) </br>\n            Jobs Failed: 1083 (40.1%) </br>\n            (Total: 2700)<br />\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Tokyo.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 408 (75.7%) </br>\n            Jobs Failed: 131 (24.3%) </br>\n            (Total: 539)<br />\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Virginia.us</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 6236 (73.0%) </br>\n            Jobs Failed: 2302 (27.0%) </br>\n            (Total: 8538)<br />\n            </div><br />     ", 
  "<strong>CLOUD.CC1_Krakow.pl</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 57367 (98.7%) </br>\n            Jobs Failed: 783 (1.3%) </br>\n            (Total: 58150)<br />\n            </div><br />     ", 
  "<strong>DIRAC.BINP.ru</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 185516 (95.1%) </br>\n            Jobs Failed: 9536 (4.9%) </br>\n            (Total: 195052)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Beihang.cn</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 16962 (85.7%) </br>\n            Jobs Failed: 2833 (14.3%) </br>\n            (Total: 19795)<br />\n            </div><br />     ", 
  "<strong>DIRAC.CINVESTAV.mx</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 54745 (96.8%) </br>\n            Jobs Failed: 1809 (3.2%) </br>\n            (Total: 56554)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Hokudai.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 10914 (99.0%) </br>\n            Jobs Failed: 113 (1.0%) </br>\n            (Total: 11027)<br />\n            </div><br />     ", 
  "<strong>DIRAC.IITG.in</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 2881 (90.2%) </br>\n            Jobs Failed: 312 (9.8%) </br>\n            (Total: 3193)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Nara-WU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 12807 (97.8%) </br>\n            Jobs Failed: 285 (2.2%) </br>\n            (Total: 13092)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Niigata.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 12507 (79.7%) </br>\n            Jobs Failed: 3186 (20.3%) </br>\n            (Total: 15693)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Osaka-CU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 20242 (97.5%) </br>\n            Jobs Failed: 525 (2.5%) </br>\n            (Total: 20767)<br />\n            </div><br />     ", 
  "<strong>DIRAC.PNNL.us</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 448573 (98.7%) </br>\n            Jobs Failed: 5911 (1.3%) </br>\n            (Total: 454484)<br />\n            </div><br />     ", 
  "<strong>DIRAC.RCNP.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 22262 (99.3%) </br>\n            Jobs Failed: 168 (0.7%) </br>\n            (Total: 22430)<br />\n            </div><br />     ", 
  "<strong>DIRAC.TIFR.in</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 4151 (96.4%) </br>\n            Jobs Failed: 157 (3.6%) </br>\n            (Total: 4308)<br />\n            </div><br />     ", 
  "<strong>DIRAC.TMU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 19548 (95.1%) </br>\n            Jobs Failed: 1013 (4.9%) </br>\n            (Total: 20561)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Tokyo.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 4179 (98.9%) </br>\n            Jobs Failed: 45 (1.1%) </br>\n            (Total: 4224)<br />\n            </div><br />     ", 
  "<strong>DIRAC.UAS.mx</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 13218 (90.8%) </br>\n            Jobs Failed: 1334 (9.2%) </br>\n            (Total: 14552)<br />\n            </div><br />     ", 
  "<strong>DIRAC.UVic.ca</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 468582 (96.5%) </br>\n            Jobs Failed: 16950 (3.5%) </br>\n            (Total: 485532)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Yamagata.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 1009 (99.2%) </br>\n            Jobs Failed: 8 (0.8%) </br>\n            (Total: 1017)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Yonsei.kr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 8791 (67.2%) </br>\n            Jobs Failed: 4292 (32.8%) </br>\n            (Total: 13083)<br />\n            </div><br />     ", 
  "<strong>LCG.CESNET.cz</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 241441 (97.9%) </br>\n            Jobs Failed: 5287 (2.1%) </br>\n            (Total: 246728)<br />\n            </div><br />     ", 
  "<strong>LCG.CNAF.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 171234 (89.2%) </br>\n            Jobs Failed: 20739 (10.8%) </br>\n            (Total: 191973)<br />\n            </div><br />     ", 
  "<strong>LCG.CYFRONET.pl</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 102866 (95.5%) </br>\n            Jobs Failed: 4886 (4.5%) </br>\n            (Total: 107752)<br />\n            </div><br />     ", 
  "<strong>LCG.Cosenza.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 135484 (97.2%) </br>\n            Jobs Failed: 3901 (2.8%) </br>\n            (Total: 139385)<br />\n            </div><br />     ", 
  "<strong>LCG.DESY.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 1264989 (98.1%) </br>\n            Jobs Failed: 24238 (1.9%) </br>\n            (Total: 1289227)<br />\n            </div><br />     ", 
  "<strong>LCG.Frascati.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 135954 (98.7%) </br>\n            Jobs Failed: 1728 (1.3%) </br>\n            (Total: 137682)<br />\n            </div><br />     ", 
  "<strong>LCG.HEPHY.at</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 265648 (98.0%) </br>\n            Jobs Failed: 5551 (2.0%) </br>\n            (Total: 271199)<br />\n            </div><br />     ", 
  "<strong>LCG.KEK2.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 567329 (96.8%) </br>\n            Jobs Failed: 18527 (3.2%) </br>\n            (Total: 585856)<br />\n            </div><br />     ", 
  "<strong>LCG.KISTI.kr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 90263 (98.4%) </br>\n            Jobs Failed: 1453 (1.6%) </br>\n            (Total: 91716)<br />\n            </div><br />     ", 
  "<strong>LCG.KIT.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 810119 (98.6%) </br>\n            Jobs Failed: 11356 (1.4%) </br>\n            (Total: 821475)<br />\n            </div><br />     ", 
  "<strong>LCG.KMI.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 230389 (98.5%) </br>\n            Jobs Failed: 3576 (1.5%) </br>\n            (Total: 233965)<br />\n            </div><br />     ", 
  "<strong>LCG.Legnaro.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 20090 (98.7%) </br>\n            Jobs Failed: 269 (1.3%) </br>\n            (Total: 20359)<br />\n            </div><br />     ", 
  "<strong>LCG.MPPMU.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 379371 (97.9%) </br>\n            Jobs Failed: 8078 (2.1%) </br>\n            (Total: 387449)<br />\n            </div><br />     ", 
  "<strong>LCG.McGill.ca</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 22283 (97.9%) </br>\n            Jobs Failed: 487 (2.1%) </br>\n            (Total: 22770)<br />\n            </div><br />     ", 
  "<strong>LCG.Melbourne.au</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 56906 (98.5%) </br>\n            Jobs Failed: 854 (1.5%) </br>\n            (Total: 57760)<br />\n            </div><br />     ", 
  "<strong>LCG.NCHC.tw</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 216190 (99.0%) </br>\n            Jobs Failed: 2101 (1.0%) </br>\n            (Total: 218291)<br />\n            </div><br />     ", 
  "<strong>LCG.NTU.tw</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 8862 (98.7%) </br>\n            Jobs Failed: 118 (1.3%) </br>\n            (Total: 8980)<br />\n            </div><br />     ", 
  "<strong>LCG.Napoli.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 350077 (97.5%) </br>\n            Jobs Failed: 9073 (2.5%) </br>\n            (Total: 359150)<br />\n            </div><br />     ", 
  "<strong>LCG.Pisa.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 442958 (97.3%) </br>\n            Jobs Failed: 12162 (2.7%) </br>\n            (Total: 455120)<br />\n            </div><br />     ", 
  "<strong>LCG.Torino.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 26816 (97.4%) </br>\n            Jobs Failed: 704 (2.6%) </br>\n            (Total: 27520)<br />\n            </div><br />     ", 
  "<strong>LCG.ULAKBIM.tr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 19981 (95.8%) </br>\n            Jobs Failed: 886 (4.2%) </br>\n            (Total: 20867)<br />\n            </div><br />     ", 
  "<strong>SSH.KMI.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 9720 (98.7%) </br>\n            Jobs Failed: 124 (1.3%) </br>\n            (Total: 9844)<br />\n            </div><br />     "
]
var se_contentString = 
[
  "<strong>Adelaide-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/ersa.edu.au/home/belle/DATA </br>\n        Endpoint: coepp-dpm-01.ersa.edu.au </br>\n        </div><br />\n    ", 
  "<strong>Adelaide-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/ersa.edu.au/home/belle/belledisk </br>\n        Endpoint: coepp-dpm-01.ersa.edu.au </br>\n        </div><br />\n    ", 
  "<strong>Adelaide-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/ersa.edu.au/home/belle/TMP </br>\n        Endpoint: coepp-dpm-01.ersa.edu.au </br>\n        </div><br />\n    ", 
  "<strong>CESNET-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/cesnet.cz/home/belle/DATA </br>\n        Endpoint: dpm1.egee.cesnet.cz </br>\n        </div><br />\n    ", 
  "<strong>CESNET-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/cesnet.cz/home/belle/TMP </br>\n        Endpoint: dpm1.egee.cesnet.cz </br>\n        </div><br />\n    ", 
  "<strong>CNAF-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n        Endpoint: storm-fe-archive.cr.cnaf.infn.it </br>\n        </div><br />\n    ", 
  "<strong>CNAF-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: / </br>\n        Endpoint: storm-fe-archive.cr.cnaf.infn.it </br>\n        </div><br />\n    ", 
  "<strong>CNAF-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /belle/TMP </br>\n        Endpoint: storm-fe-archive.cr.cnaf.infn.it </br>\n        </div><br />\n    ", 
  "<strong>CYFRONET-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/cyf-kr.edu.pl/home/belle/DATA </br>\n        Endpoint: dpm.cyf-kr.edu.pl </br>\n        </div><br />\n    ", 
  "<strong>CYFRONET-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/cyf-kr.edu.pl/home </br>\n        Endpoint: dpm.cyf-kr.edu.pl </br>\n        </div><br />\n    ", 
  "<strong>CYFRONET-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/cyf-kr.edu.pl/home/belle/TMP </br>\n        Endpoint: dpm.cyf-kr.edu.pl </br>\n        </div><br />\n    ", 
  "<strong>DESY-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/desy.de/belle/belle2/DATA </br>\n        Endpoint: dcache-se-desy.desy.de </br>\n        </div><br />\n    ", 
  "<strong>DESY-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/desy.de </br>\n        Endpoint: dcache-se-desy.desy.de </br>\n        </div><br />\n    ", 
  "<strong>DESY-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/desy.de/belle/belle2/TMP </br>\n        Endpoint: dcache-se-desy.desy.de </br>\n        </div><br />\n    ", 
  "<strong>Frascati-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/lnf.infn.it/home/belle/DATA </br>\n        Endpoint: atlasse.lnf.infn.it </br>\n        </div><br />\n    ", 
  "<strong>Frascati-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/lnf.infn.it/home </br>\n        Endpoint: atlasse.lnf.infn.it </br>\n        </div><br />\n    ", 
  "<strong>Frascati-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/lnf.infn.it/home/belle/TMP </br>\n        Endpoint: atlasse.lnf.infn.it </br>\n        </div><br />\n    ", 
  "<strong>HEPHY-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/oeaw.ac.at/home </br>\n        Endpoint: hephyse.oeaw.ac.at </br>\n        </div><br />\n    ", 
  "<strong>HEPHY-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/oeaw.ac.at/home/belle/TMP </br>\n        Endpoint: hephyse.oeaw.ac.at </br>\n        </div><br />\n    ", 
  "<strong>KEK-FailoverSE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /DataManagement/StorageElement </br>\n        Endpoint: dirac1.cc.kek.jp </br>\n        </div><br />\n    ", 
  "<strong>KEK2-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n        Endpoint: kek2-se01.cc.kek.jp </br>\n        </div><br />\n    ", 
  "<strong>KEK2-LOCAL-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /belle_local_test </br>\n        Endpoint: kek2-se01.cc.kek.jp </br>\n        </div><br />\n    ", 
  "<strong>KEK2-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: / </br>\n        Endpoint: kek2-se01.cc.kek.jp </br>\n        </div><br />\n    ", 
  "<strong>KEK2-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /belle/TMP </br>\n        Endpoint: kek2-se01.cc.kek.jp </br>\n        </div><br />\n    ", 
  "<strong>KEK2-XRootD-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: //grid </br>\n        Endpoint: xrootd.cc.kek.jp </br>\n        </div><br />\n    ", 
  "<strong>KISTI-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/sdfarm.kr/home/belle/DATA </br>\n        Endpoint: belle-se-head.sdfarm.kr </br>\n        </div><br />\n    ", 
  "<strong>KISTI-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/sdfarm.kr/home/belle/TMP </br>\n        Endpoint: belle-se-head.sdfarm.kr </br>\n        </div><br />\n    ", 
  "<strong>KIT-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/gridka.de/belle/disk-only/DATA </br>\n        Endpoint: gridka-dcache.fzk.de </br>\n        </div><br />\n    ", 
  "<strong>KIT-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/gridka.de/belle/disk-only </br>\n        Endpoint: gridka-dcache.fzk.de </br>\n        </div><br />\n    ", 
  "<strong>KIT-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/gridka.de/belle/disk-only/TMP </br>\n        Endpoint: gridka-dcache.fzk.de </br>\n        </div><br />\n    ", 
  "<strong>KMI-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n        Endpoint: nsrmfe01.hepl.phys.nagoya-u.ac.jp </br>\n        </div><br />\n    ", 
  "<strong>KMI-LOCAL-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /b2j </br>\n        Endpoint: nsrmfe01.hepl.phys.nagoya-u.ac.jp </br>\n        </div><br />\n    ", 
  "<strong>KMI-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: / </br>\n        Endpoint: nsrmfe01.hepl.phys.nagoya-u.ac.jp </br>\n        </div><br />\n    ", 
  "<strong>KMI-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /belle/TMP </br>\n        Endpoint: nsrmfe01.hepl.phys.nagoya-u.ac.jp </br>\n        </div><br />\n    ", 
  "<strong>KMI-XRootD-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: //xrootd </br>\n        Endpoint: ntrq01.hepl.phys.nagoya-u.ac.jp </br>\n        </div><br />\n    ", 
  "<strong>MPPMU-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/rzg.mpg.de/data/belle/DATA </br>\n        Endpoint: grid-srm.rzg.mpg.de </br>\n        </div><br />\n    ", 
  "<strong>MPPMU-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/rzg.mpg.de/data </br>\n        Endpoint: grid-srm.rzg.mpg.de </br>\n        </div><br />\n    ", 
  "<strong>MPPMU-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/rzg.mpg.de/data/belle/TMP </br>\n        Endpoint: grid-srm.rzg.mpg.de </br>\n        </div><br />\n    ", 
  "<strong>Melbourne-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/mel.coepp.org.au/home/belle/DATA </br>\n        Endpoint: b2se.mel.coepp.org.au </br>\n        </div><br />\n    ", 
  "<strong>Melbourne-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/mel.coepp.org.au/home/belle/bellescratchdisk </br>\n        Endpoint: b2se.mel.coepp.org.au </br>\n        </div><br />\n    ", 
  "<strong>Melbourne-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/mel.coepp.org.au/home/belle/TMP </br>\n        Endpoint: b2se.mel.coepp.org.au </br>\n        </div><br />\n    ", 
  "<strong>NCHC-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/grid.nchc.org.tw/home/belle/DATA </br>\n        Endpoint: se01.grid.nchc.org.tw </br>\n        </div><br />\n    ", 
  "<strong>NTU-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/phys.ntu.edu.tw/home/belle/DATA </br>\n        Endpoint: bgrid3.phys.ntu.edu.tw </br>\n        </div><br />\n    ", 
  "<strong>NTU-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/phys.ntu.edu.tw/home/ </br>\n        Endpoint: bgrid3.phys.ntu.edu.tw </br>\n        </div><br />\n    ", 
  "<strong>NTU-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/phys.ntu.edu.tw/home/belle/TMP </br>\n        Endpoint: bgrid3.phys.ntu.edu.tw </br>\n        </div><br />\n    ", 
  "<strong>Napoli-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/na.infn.it/home/belle/DATA </br>\n        Endpoint: belle-dpm-01.na.infn.it </br>\n        </div><br />\n    ", 
  "<strong>Napoli-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/scope.unina.it/home </br>\n        Endpoint: se.scope.unina.it </br>\n        </div><br />\n    ", 
  "<strong>Napoli-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/na.infn.it/home/belle/TMP </br>\n        Endpoint: belle-dpm-01.na.infn.it </br>\n        </div><br />\n    ", 
  "<strong>PNNL-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /se/belle/DATA </br>\n        Endpoint: se.hep.pnnl.gov </br>\n        </div><br />\n    ", 
  "<strong>PNNL-DEDICATED-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /se </br>\n        Endpoint: se.hep.pnnl.gov </br>\n        </div><br />\n    ", 
  "<strong>PNNL-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /se/belle/TMP </br>\n        Endpoint: se.hep.pnnl.gov </br>\n        </div><br />\n    ", 
  "<strong>SIGNET-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/ijs.si/belle/DATA </br>\n        Endpoint: dcache.ijs.si </br>\n        </div><br />\n    ", 
  "<strong>SIGNET-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/ijs.si </br>\n        Endpoint: dcache.ijs.si </br>\n        </div><br />\n    ", 
  "<strong>SIGNET-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/ijs.si/belle/TMP </br>\n        Endpoint: dcache.ijs.si </br>\n        </div><br />\n    ", 
  "<strong>Torino-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /belle/DATA </br>\n        Endpoint: se-srm-00.to.infn.it </br>\n        </div><br />\n    ", 
  "<strong>Torino-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /belle/TMP </br>\n        Endpoint: se-srm-00.to.infn.it </br>\n        </div><br />\n    ", 
  "<strong>UA-ISMA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/isma.kharkov.ua/home </br>\n        Endpoint: gl-dpm.isma.kharkov.ua </br>\n        </div><br />\n    ", 
  "<strong>ULAKBIM-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/ulakbim.gov.tr/home/belle/DATA </br>\n        Endpoint: torik1.ulakbim.gov.tr </br>\n        </div><br />\n    ", 
  "<strong>ULAKBIM-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/ulakbim.gov.tr/home </br>\n        Endpoint: torik1.ulakbim.gov.tr </br>\n        </div><br />\n    ", 
  "<strong>ULAKBIM-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /dpm/ulakbim.gov.tr/home/belle/TMP </br>\n        Endpoint: torik1.ulakbim.gov.tr </br>\n        </div><br />\n    ", 
  "<strong>UVic-DATA-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/westgrid.uvic.ca/data/belle/belledisk/DATA </br>\n        Endpoint: charon01.westgrid.ca </br>\n        </div><br />\n    ", 
  "<strong>UVic-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/westgrid.uvic.ca/data/belle/belledisk/ </br>\n        Endpoint: charon01.westgrid.ca </br>\n        </div><br />\n    ", 
  "<strong>UVic-TMP-SE</strong></br><hr><font style=\"font-weight: bold\">SE info:</font> </br>\n        <div style=\"padding-left: 5px;\">Path: /pnfs/westgrid.uvic.ca/data/belle/belledisk/TMP </br>\n        Endpoint: charon01.westgrid.ca </br>\n        </div><br />\n    "
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
    url: 'images/pie_LCG.NCHC.tw.png', 
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
      lat: 39.99, 
      lng: 33.02
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
  "#0033FF", 
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
  "#FFFF00", 
  "#00CC00", 
  "#FFFF00", 
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
  "#FFFF00", 
  "#00CC00", 
  "#00CC00"
]
var linesDescription = 
[
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 80 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 416 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.5 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 240 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 60 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 40 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 60 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 9.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 900 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 60 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.5 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 60 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 140 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.8 kB/s </br>Efficiency: 71% </br>\n            Transfer Successes: 260 </br>\n            Transfer Failures: 106  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 6.1 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 700 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 26.9 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1056 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.9 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 180 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.2 kB/s </br>Efficiency: 50% </br>\n            Transfer Successes: 100 </br>\n            Transfer Failures: 100  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 14.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1345 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.4 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 120 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.1 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 360 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 5.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 480 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.0 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 100 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 40 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 60 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 40 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.9 kB/s </br>Efficiency: 50% </br>\n            Transfer Successes: 107 </br>\n            Transfer Failures: 103  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 9.8 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1000 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.1 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 100 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 14.9 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1560 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.9 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 440 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.4 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 160 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 220 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 21.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 305 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 90% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 2  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 8.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 640 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 240 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.0 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 180 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 280 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Melbourne-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.3 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 120 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 5.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 680 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.9 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 100 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.8 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.1 kB/s </br>Efficiency: 49% </br>\n            Transfer Successes: 217 </br>\n            Transfer Failures: 225  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 60 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 86% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 3  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 220 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 4.1 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 360 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 95% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.8 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 160 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 7.9 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 700 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.8 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 300 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 80 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.4 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 300 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.1 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 120 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 380 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.9 kB/s </br>Efficiency: 49% </br>\n            Transfer Successes: 174 </br>\n            Transfer Failures: 176  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.3 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 344 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 36% </br>\n            Transfer Successes: 18 </br>\n            Transfer Failures: 32  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.9 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 100 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.2 kB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 120 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 26 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 8.2 kB/s </br>Efficiency: 72% </br>\n            Transfer Successes: 481 </br>\n            Transfer Failures: 181  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 18.1 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1600 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CNAF-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 380 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.1 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 120 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.8 kB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 160 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.9 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 400 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 15.8 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 1060 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = CESNET-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 280 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.1 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 120 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 280 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 160 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.5 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 160 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = CESNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.5 kB/s </br>Efficiency: 49% </br>\n            Transfer Successes: 151 </br>\n            Transfer Failures: 155  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 60 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = NTU-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.3 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Torino-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 40 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = Napoli-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.3 kB/s </br>Efficiency: 84% </br>\n            Transfer Successes: 318 </br>\n            Transfer Failures: 60  </br>\n            </div><br />", 
  "<strong>Source = Napoli-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 11.1 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 880 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.3 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 220 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.2 kB/s </br>Efficiency: 99% </br>\n            Transfer Successes: 300 </br>\n            Transfer Failures: 2  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.8 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 160 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 8.9 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 620 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 150 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 58% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 14  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.4 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 160 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.9 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 220 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = DESY-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 11.6 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 940 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Frascati-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = KIT-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 2.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 40 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = KEK2-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KIT-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.8 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 400 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = Adelaide-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.6 kB/s </br>Efficiency: 89% </br>\n            Transfer Successes: 60 </br>\n            Transfer Failures: 7  </br>\n            </div><br />", 
  "<strong>Source = PNNL-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.9 kB/s </br>Efficiency: 98% </br>\n            Transfer Successes: 80 </br>\n            Transfer Failures: 1  </br>\n            </div><br />", 
  "<strong>Source = CYFRONET-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.4 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 40 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KEK2-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 3.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 380 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = KMI-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.8 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 80 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = SIGNET-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.8 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 160 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = ULAKBIM-TMP-SE</br>\n            Destination = CNAF-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 20 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = UVic-TMP-SE</br>\n            Destination = KMI-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.3 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 140 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = MPPMU-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.8 kB/s </br>Efficiency: 48% </br>\n            Transfer Successes: 80 </br>\n            Transfer Failures: 84  </br>\n            </div><br />", 
  "<strong>Source = KISTI-TMP-SE</br>\n            Destination = DESY-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 0.7 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 60 </br>\n            Transfer Failures: 0  </br>\n            </div><br />", 
  "<strong>Source = HEPHY-TMP-SE</br>\n            Destination = SIGNET-TMP-SE</strong></br><hr>\n            <font style=\"font-weight: bold\">Connection info:</font> </br>\n            <div style=\"padding-left: 5px;\">Throughput: 1.2 kB/s </br>Efficiency: 100% </br>\n            Transfer Successes: 120 </br>\n            Transfer Failures: 0  </br>\n            </div><br />"
]