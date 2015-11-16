#! /usr/bin/env python

from kml_gen import pie_plot, SE_site
import json, os, urllib2
from shutil import copyfile

# Used to export Javascript objects
class js_image:
    def __init__(self, url, anchorx = 0, anchory = 0):
        self.url = "'" + url + "'"
        self.size = 'new google.maps.Size(40, 40)'
        #self.origin = 'new google.maps.Point(0,0)'
        #self.anchor = 'new google.maps.Point(0,0)'
        self.anchor = 'new google.maps.Point('+str(anchorx)+', '+str(anchory)+')'


# This encapsulates all the functions to generate Javascript file
class JSgen:
    def __init__(self, path):
        self.js_writer = open(path,"w")
        self.function_list = []
        self.ce_list = []
        self.se_active = []
        self.se_list = []
        self.images_list = []
        self.se_images_list = []
        self.ce_description_list = []
        self.se_description_list = []
        self.lines_list = []
        self.lines_colors = []

    # Loads map style
    def init_map(self):
        map_style = []
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

    # Include a computing element in the map
    def add_ce_site(self, ce):
        if not os.path.exists('./images/'):
            os.mkdir('./images')

        self.ce_list.append([ce.name, float(ce.coordinates[1]),float(ce.coordinates[0])])
        pie_plot(ce.name, int(ce.jobs_done), int(ce.jobs_failed), 'web/images/', size = (0.4,0.4))
        self.images_list.append(js_image("images/pie_" + ce.name + ".png",0,0).__dict__)
        jobs_total = int(ce.jobs_done) + int(ce.jobs_failed)
        if jobs_total != 0:
            description_text = '<strong>'+ ce.name + '</strong>' + \
            """</br><hr>
            <font style="font-weight: bold">Job Statistics:</font> </br>
            <div style="padding-left: 5px;">Jobs Succeeded: """ + str(ce.jobs_done) + \
            ' (%.1f' % (int(ce.jobs_done)/float(jobs_total) *100) + """%) </br>
            Jobs Failed: """ + str(ce.jobs_failed) + ' (%.1f' % (int(ce.jobs_failed)/float(jobs_total)*100) + \
            """%) </br>
            (Total: """ + str(jobs_total) + """)<br />
            </div><br />     """
        else:
            description_text = '<strong>'+ ce.name + '</strong>' + \
            """</br><hr>
            <font style="font-weight: bold">Job Statistics:</font> </br>
            <div style="padding-left: 5px;">Jobs Succeeded: """ + str(ce.jobs_done) + \
            """ (- %) </br>
            Jobs Failed: """ + str(ce.jobs_failed) + """ (- %) </br>
            (Total:""" + str(jobs_total) + """)<br />
            </div><br />
            """
        self.ce_description_list.append(description_text)

            # Include a computing element in the map
    def add_se_site(self, se):
        self.se_active.append(se)
        if not os.path.exists('./web/images/'):
            os.mkdir('./web/images')
        copyfile('input/db_blue.png','./web/images/db_blue.png')
        self.se_images_list.append(js_image("images/db_blue.png",35,0).__dict__)
        self.se_list.append([se.name, float(se.coordinates[1]),float(se.coordinates[0])])
        description_text = '<strong>'+ se.name + '</strong>' + \
        """</br><hr><font style="font-weight: bold">SE info:</font> </br>
        <div style="padding-left: 5px;">Path: """ + se.path + """ </br>
        Endpoint: """ + se.endpoint[0] + """ </br>
        </div><br />
    """
        self.se_description_list.append(description_text)

    # Draw a line on the map
    def draw_line(self, se1, se2):
        line_coordinates = []
        line_coordinates.append(dict(lat = float(se1.coordinates[1]), lng = float(se1.coordinates[0])))
        line_coordinates.append(dict(lat = float(se2.coordinates[1]), lng = float(se2.coordinates[0])))
        self.lines_list.append(line_coordinates)
        self.lines_colors.append('#FF0000')

    def pull_dashboard(self, path):
        se1 = SE_site()
        se2 = SE_site()
        js_data = urllib2.urlopen(path).read()
        dashboard = json.loads(js_data)
        # For now, we only need the data transfer info
        data_matrix = dashboard['transfers']['rows']
        # Search the pair of SE elements
        for cell in data_matrix:
            for se in self.se_active:
                if se.endpoint[0] == cell[0]:
                    se1 = se;
            for se in self.se_active:
                if se.endpoint[0] == cell[1]:
                    se2 = se;
            self.draw_line(se1, se2)


    # Finishes the Javascript code
    def close(self):
        # Write the sites
        self.js_writer.write("\nvar ce_sites = \n" + json.dumps(self.ce_list,indent = 2))
        self.js_writer.write("\nvar se_sites = \n" + json.dumps(self.se_list,indent = 2))
        self.js_writer.write("\nvar contentString = \n" + json.dumps(self.ce_description_list,indent = 2))
        self.js_writer.write("\nvar se_contentString = \n" + json.dumps(self.se_description_list,indent = 2))
        self.js_writer.write("\n\nvar images = \n" + json.dumps(self.images_list,indent = 2).replace('"',''))
        self.js_writer.write("\n\nvar images_se = \n" + json.dumps(self.se_images_list,indent = 2).replace('"',''))
        # Write the lines
        self.js_writer.write("\n\nvar lineCoordinates = \n" + \
                             json.dumps(self.lines_list,indent = 2).replace('"',''))
        self.js_writer.write("\nvar linesColors = \n" + json.dumps(self.lines_colors,indent = 2))
        # Configure the map
        self.js_writer.write('\n\n')
        js_file = """\
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
        }"""
        self.js_writer.write(js_file)
        # Initialize the map
        js_file = "\n\ngoogle.maps.event.addDomListener(window, 'load', initialize);"
        self.js_writer.write(js_file)
        self.js_writer.close()









