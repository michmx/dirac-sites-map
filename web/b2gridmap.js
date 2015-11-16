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
  "<strong>ARC.SIGNET.si</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 164981 (98.9%) </br>\n            Jobs Failed: 1868 (1.1%) </br>\n            (Total: 166849)<br />\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Sydney.au</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 1020 (50.3%) </br>\n            Jobs Failed: 1006 (49.7%) </br>\n            (Total: 2026)<br />\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Tokyo.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 369 (77.0%) </br>\n            Jobs Failed: 110 (23.0%) </br>\n            (Total: 479)<br />\n            </div><br />     ", 
  "<strong>CLOUD.AWS_Virginia.u</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 4002 (73.1%) </br>\n            Jobs Failed: 1470 (26.9%) </br>\n            (Total: 5472)<br />\n            </div><br />     ", 
  "<strong>CLOUD.CC1_Krakow.pl</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 45411 (99.0%) </br>\n            Jobs Failed: 445 (1.0%) </br>\n            (Total: 45856)<br />\n            </div><br />     ", 
  "<strong>DIRAC.BINP.ru</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 152344 (96.0%) </br>\n            Jobs Failed: 6303 (4.0%) </br>\n            (Total: 158647)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Beihang.cn</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 10939 (86.5%) </br>\n            Jobs Failed: 1710 (13.5%) </br>\n            (Total: 12649)<br />\n            </div><br />     ", 
  "<strong>DIRAC.CINVESTAV.mx</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 47371 (96.9%) </br>\n            Jobs Failed: 1533 (3.1%) </br>\n            (Total: 48904)<br />\n            </div><br />     ", 
  "<strong>DIRAC.DESY.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 2 (100.0%) </br>\n            Jobs Failed: 0 (0.0%) </br>\n            (Total: 2)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Hokudai.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 9025 (99.0%) </br>\n            Jobs Failed: 88 (1.0%) </br>\n            (Total: 9113)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Nara-WU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 11140 (97.7%) </br>\n            Jobs Failed: 257 (2.3%) </br>\n            (Total: 11397)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Niigata.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 10418 (83.1%) </br>\n            Jobs Failed: 2122 (16.9%) </br>\n            (Total: 12540)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Osaka-CU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 17108 (99.3%) </br>\n            Jobs Failed: 126 (0.7%) </br>\n            (Total: 17234)<br />\n            </div><br />     ", 
  "<strong>DIRAC.PNNL-CASCADE.u</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 0 (- %) </br>\n            Jobs Failed: 0 (- %) </br>\n            (Total:0)<br />\n            </div><br />\n            ", 
  "<strong>DIRAC.PNNL-PIC.us</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 0 (- %) </br>\n            Jobs Failed: 0 (- %) </br>\n            (Total:0)<br />\n            </div><br />\n            ", 
  "<strong>DIRAC.PNNL.us</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 373525 (99.2%) </br>\n            Jobs Failed: 3000 (0.8%) </br>\n            (Total: 376525)<br />\n            </div><br />     ", 
  "<strong>DIRAC.TIFR.in</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 3457 (96.1%) </br>\n            Jobs Failed: 141 (3.9%) </br>\n            (Total: 3598)<br />\n            </div><br />     ", 
  "<strong>DIRAC.TMU.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 15876 (97.2%) </br>\n            Jobs Failed: 455 (2.8%) </br>\n            (Total: 16331)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Tokyo.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 3472 (99.2%) </br>\n            Jobs Failed: 27 (0.8%) </br>\n            (Total: 3499)<br />\n            </div><br />     ", 
  "<strong>DIRAC.UAS.mx</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 11104 (96.6%) </br>\n            Jobs Failed: 394 (3.4%) </br>\n            (Total: 11498)<br />\n            </div><br />     ", 
  "<strong>DIRAC.UVic.ca</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 393711 (96.5%) </br>\n            Jobs Failed: 14246 (3.5%) </br>\n            (Total: 407957)<br />\n            </div><br />     ", 
  "<strong>DIRAC.Yonsei.kr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 7102 (66.3%) </br>\n            Jobs Failed: 3615 (33.7%) </br>\n            (Total: 10717)<br />\n            </div><br />     ", 
  "<strong>LCG.CESNET.cz</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 186566 (99.1%) </br>\n            Jobs Failed: 1612 (0.9%) </br>\n            (Total: 188178)<br />\n            </div><br />     ", 
  "<strong>LCG.CNAF.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 131013 (87.0%) </br>\n            Jobs Failed: 19562 (13.0%) </br>\n            (Total: 150575)<br />\n            </div><br />     ", 
  "<strong>LCG.CYFRONET.pl</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 88099 (95.8%) </br>\n            Jobs Failed: 3829 (4.2%) </br>\n            (Total: 91928)<br />\n            </div><br />     ", 
  "<strong>LCG.Cosenza.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 116202 (98.7%) </br>\n            Jobs Failed: 1538 (1.3%) </br>\n            (Total: 117740)<br />\n            </div><br />     ", 
  "<strong>LCG.DESY.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 1016913 (97.9%) </br>\n            Jobs Failed: 21821 (2.1%) </br>\n            (Total: 1038734)<br />\n            </div><br />     ", 
  "<strong>LCG.Frascati.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 119609 (98.9%) </br>\n            Jobs Failed: 1319 (1.1%) </br>\n            (Total: 120928)<br />\n            </div><br />     ", 
  "<strong>LCG.HEPHY.at</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 249846 (98.4%) </br>\n            Jobs Failed: 4074 (1.6%) </br>\n            (Total: 253920)<br />\n            </div><br />     ", 
  "<strong>LCG.KEK2.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 509486 (97.5%) </br>\n            Jobs Failed: 13250 (2.5%) </br>\n            (Total: 522736)<br />\n            </div><br />     ", 
  "<strong>LCG.KISTI.kr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 75094 (98.4%) </br>\n            Jobs Failed: 1247 (1.6%) </br>\n            (Total: 76341)<br />\n            </div><br />     ", 
  "<strong>LCG.KIT.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 561410 (99.0%) </br>\n            Jobs Failed: 5395 (1.0%) </br>\n            (Total: 566805)<br />\n            </div><br />     ", 
  "<strong>LCG.KMI.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 176709 (98.6%) </br>\n            Jobs Failed: 2590 (1.4%) </br>\n            (Total: 179299)<br />\n            </div><br />     ", 
  "<strong>LCG.Legnaro.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 18976 (99.1%) </br>\n            Jobs Failed: 173 (0.9%) </br>\n            (Total: 19149)<br />\n            </div><br />     ", 
  "<strong>LCG.MPPMU.de</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 310496 (97.8%) </br>\n            Jobs Failed: 6835 (2.2%) </br>\n            (Total: 317331)<br />\n            </div><br />     ", 
  "<strong>LCG.McGill.ca</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 18109 (97.6%) </br>\n            Jobs Failed: 437 (2.4%) </br>\n            (Total: 18546)<br />\n            </div><br />     ", 
  "<strong>LCG.Melbourne.au</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 46116 (98.5%) </br>\n            Jobs Failed: 724 (1.5%) </br>\n            (Total: 46840)<br />\n            </div><br />     ", 
  "<strong>LCG.NCHC.tw</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 188626 (99.1%) </br>\n            Jobs Failed: 1806 (0.9%) </br>\n            (Total: 190432)<br />\n            </div><br />     ", 
  "<strong>LCG.NTU.tw</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 7208 (98.9%) </br>\n            Jobs Failed: 77 (1.1%) </br>\n            (Total: 7285)<br />\n            </div><br />     ", 
  "<strong>LCG.Napoli.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 275909 (97.3%) </br>\n            Jobs Failed: 7565 (2.7%) </br>\n            (Total: 283474)<br />\n            </div><br />     ", 
  "<strong>LCG.Pisa.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 392996 (97.2%) </br>\n            Jobs Failed: 11473 (2.8%) </br>\n            (Total: 404469)<br />\n            </div><br />     ", 
  "<strong>LCG.Torino.it</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 21475 (97.7%) </br>\n            Jobs Failed: 513 (2.3%) </br>\n            (Total: 21988)<br />\n            </div><br />     ", 
  "<strong>LCG.ULAKBIM.tr</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 15940 (94.9%) </br>\n            Jobs Failed: 863 (5.1%) </br>\n            (Total: 16803)<br />\n            </div><br />     ", 
  "<strong>SSH.KMI.jp</strong></br><hr>\n            <font style=\"font-weight: bold\">Job Statistics:</font> </br>\n            <div style=\"padding-left: 5px;\">Jobs Succeeded: 8094 (99.2%) </br>\n            Jobs Failed: 67 (0.8%) </br>\n            (Total: 8161)<br />\n            </div><br />     "
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
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_CLOUD.AWS_Sydney.au.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_CLOUD.AWS_Tokyo.jp.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_CLOUD.AWS_Virginia.u.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_CLOUD.CC1_Krakow.pl.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.BINP.ru.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Beihang.cn.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.CINVESTAV.mx.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.DESY.de.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Hokudai.jp.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Nara-WU.jp.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Niigata.jp.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Osaka-CU.jp.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.PNNL-CASCADE.u.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.PNNL-PIC.us.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.PNNL.us.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.TIFR.in.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.TMU.jp.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Tokyo.jp.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.UAS.mx.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.UVic.ca.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_DIRAC.Yonsei.kr.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.CESNET.cz.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.CNAF.it.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.CYFRONET.pl.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Cosenza.it.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.DESY.de.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Frascati.it.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.HEPHY.at.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KEK2.jp.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KISTI.kr.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KIT.de.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.KMI.jp.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Legnaro.it.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.MPPMU.de.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.McGill.ca.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Melbourne.au.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.NCHC.tw.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.NTU.tw.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Napoli.it.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Pisa.it.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.Torino.it.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_LCG.ULAKBIM.tr.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/pie_SSH.KMI.jp.png', 
    anchor: new google.maps.Point(0, 0), 
    size: new google.maps.Size(40, 40)
  }
]

var images_se = 
[
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
    anchor: new google.maps.Point(35, 0), 
    size: new google.maps.Size(40, 40)
  }, 
  {
    url: 'images/db_blue.png', 
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
      lat: 25.015, 
      lng: 121.539
    }, 
    {
      lat: 46.04217, 
      lng: 14.48767
    }
  ]
]
var linesColors = 
[
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000", 
  "#FF0000"
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
                  strokeColor: '#FF0000',
                  strokeOpacity: 1.0,
                  strokeWeight: 3
                });
                flightPath.setMap(map);
            }
        }

google.maps.event.addDomListener(window, 'load', initialize);