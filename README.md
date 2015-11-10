# kml-gen
Take information from a text file and generates kml file to use in Google Maps.

The python script will generate output/KMLGen.kml file and images of each site. These should be compress on a .kmz file to make easier the load of information.

To run the map, the KMZ file should be stored on a webserver. (See web/index.html file).

Directories

info: Information for test. The system should generate automatically this info at some point.
input: Info of the sites and icons.
web: HTML + JavaScript to run the map.
content: Temporally info to generate kmz file. Keep for debugging.
output: kmz file.
