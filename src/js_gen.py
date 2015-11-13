#! /usr/bin/env python

from kml_gen import pie_plot, read_gb2_site_summary
import json


class CE_site:
    def __init__(self, se_name = 'CE'):
        self.name = se_name
        self.jobs_done = 0
        self.jobs_failed = 0
        self.jobs_running = 0
        self.jobs_waiting = 0
        self.jobs_stalled = 0
        self.coordinates = [0,0]

    def print_info(self):
        print "Name: " + self.name
        print "Jobs_succeeded: " + str(self.jobs_done)
        print "Jobs_failed: " + str(self.jobs_failed)
        print "Coordinates: " + str(self.coordinates[0]) + "," + str(self.coordinates[1])

class SE_site:
    def __init__(self, ce_name = 'SE'):
        self.read = ''
        self.write = ''
        self.path = ''
        self.name = ce_name
        self.endpoint = ['', '']
        self.coordinates = [0,0]

    def print_info(self):
        print "Name: " + self.name
        print "Path: " + self.path
        print "Endpoint: " + self.endpoint[0] + " : " + self.endpoint[1]
        print "Read/Write: " + self.read + "/" + self.write
        print "Coordinates: " + str(self.coordinates[0]) + "," + str(self.coordinates[1])


class js_image:
    def __init__(self, url):
        self.url = "'" + url + "'"
        self.size = 'new google.maps.Size(40, 40)'
        self.origin = 'new google.maps.Point(0, 0)'
        self.anchor = 'new google.maps.Point(0, 0)'


class JSgen:
    def __init__(self, path):
        self.js_writer = open(path,"w")
        self.function_list = []
        self.ce_list = []
        self.images_list = []


    def init_map(self):
        map_style = []
        # Map style
        map_style.append(dict(featureType = 'all',elementType = 'all', stylers = ['visibility','off']))
        map_style.append(dict(featureType = 'landscape',elementType = 'labels', \
                              stylers = [dict(visibility = 'off'),dict(color = '#fcfcfc')]))
        map_style.append(dict(featureType = 'landscape',elementType = 'geometry', stylers = ['visibility','on']))
        map_style.append(dict(featureType = 'water',elementType = 'labels', stylers = ['visibility','off']))
        map_style.append(dict(featureType = 'water',elementType = 'geometry', \
                              stylers = [dict(visibility = 'on'),dict(hue = '#5f94ff'),dict(lightness = 60)]))
        self.js_writer.write('var mapStyle = \n')
        js_file = json.dumps(map_style,indent=2)
        self.js_writer.write(js_file)
        self.js_writer.write(';\n')


    def close(self):
        #write the sites
        self.js_writer.write("\nvar sites = \n" + json.dumps(self.ce_list,indent = 2))
        self.js_writer.write("\n\nvar images = \n" + json.dumps(self.images_list,indent = 2).replace('"',''))
        # Configure the map
        self.js_writer.write('\n\n')
        js_file = """
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
        }"""
        self.js_writer.write(js_file.lstrip())
        # Initialize the map
        js_file = "\n\ngoogle.maps.event.addDomListener(window, 'load', initialize);"
        self.js_writer.write(js_file)
        self.js_writer.close()


    def add_ce_site(self, ce):
        self.ce_list.append([ce.name, float(ce.coordinates[1]),float(ce.coordinates[0])])
        pie_plot(ce.name, int(ce.jobs_done), int(ce.jobs_failed), 'web/images/', size = (0.4,0.4))
        self.images_list.append(js_image("images/pie_" + ce.name + ".png").__dict__)






