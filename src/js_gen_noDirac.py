#! /usr/bin/env python

import json, os, urllib2, math, time, pickle, sys
from shutil import copyfile
from datetime import datetime as dt
from pprint import pprint

#To use matplotlib without graphic enviroment
try:
    import matplotlib as mpl
    mpl.use('Agg')
    import matplotlib.pyplot as plt
except ImportError:
    sys.exit("Error: Matplotlib package not found. Please install running 'pip install matplotlib'.")


# Read the data from CSV file and returns dictionary
def read_coordinates(file):
    data = {}
    csv_file = open(file, "r")
    lines = csv_file.read().split("\n")
    for row in lines:
        if row != "":
            site = row.split(',')
            data[site[0]] = [site[1],site[2]]
    return data


# Pull the information of SE sites from the gb2_list_se output (to use without DIRAC enviroment)
def read_gb2_list_se(file_path):
    se_sites = {}
    data_file = []
    se_file = open(file_path, 'r')
    line = se_file.read().split("\n")
    for row in line:
        if row != "":
            data_file.append(row.split(':'))
    # Organize the information
    counter = 0.
    aux = -1
    for i in range(0, len(data_file)):
        for j in range(0, len(data_file[i])):
            if counter%10. == 0:
                aux += 1
                key = data_file[i][j].strip()
                se_sites[key] = {}
            if counter%10. == 2:
                se_sites[key]['Host'] =  data_file[i][j].strip()
            if counter%10. == 3:
                se_sites[key]['Port'] = data_file[i][j].strip()
            if counter%10. == 5:
                se_sites[key]['Path'] = data_file[i][j].strip()
            if counter%10. == 7:
                se_sites[key]['Read'] = data_file[i][j].strip()
            if counter%10. == 9:
                se_sites[key]['Write'] = data_file[i][j].strip()
            counter += 1

    # Add coordinates
    data_coord = read_coordinates("input/sites.csv")
    for se in se_sites:
        if se.split('-')[0] in data_coord:
            se_sites[se]['Coordinates'] = [float(data_coord[se.split('-')[0]][0]),float(data_coord[se.split('-')[0]][1])]
        else:
            print "[WARNING]: No location info for " + se.name

    return se_sites


# Pull the information of CE sites from the gb2_site_summary output (to use without DIRAC enviroment)
def read_gb2_site_summary(file_path):
    ce_sites = {}
    data_file = []
    se_file = open(file_path, 'r')
    line = se_file.read().split("\n")
    for row in line:
        if row != "":
            data_file.append(filter(None,row.split(' ')))
    data_file.pop(0)
    data_file.pop()
    data_file.pop()
    for cell in data_file:
        ce_sites.update({cell[0]:{'Done':int(cell[1]),'Failed':int(cell[2]),'Running':int(cell[3]),\
                                  'Waiting':int(cell[5]),'Stalled':int(cell[4])}})

        # Add coordinates
        data_site = read_coordinates("input/sites.csv")

        if cell[0].split('.')[1] in data_site:
            ce_sites[cell[0]]['Coordinates'] = [float(data_site[cell[0].split('.')[1]][0]),\
                                                float(data_site[cell[0].split('.')[1]][1])]
        else:
            print "[WARNING]: No location info for " + cell[0]

    return ce_sites
