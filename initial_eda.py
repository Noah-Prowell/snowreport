import requests
import pandas as pd
#url 
base_url = 'https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=SNWD&locationid=FIPS:08&stationid=GHCND:USS0005K14S&units=standard&startdate=2024-01-07&enddate=2024-01-14&limit=1000'
locations_url = 'https://www.ncei.noaa.gov/cdo-web/api/v2/stations?datasetid=GHCND&datatypeid=SNWD&locationid=FIPS:08&startdate=2024-01-07&enddate=2024-01-14&limit=1000&offeset=0'
data_categories = 'https://www.ncei.noaa.gov/cdo-web/api/v2/datacategories?enddate=2024-06-10&offset=45&limit=1000'
data_types = 'https://www.ncei.noaa.gov/cdo-web/api/v2/datatypes?datasetid=GHCND&locationid=FIPS:08&enddate=2024-06-10&offset=0&limit=1000'
datasets = 'https://www.ncei.noaa.gov/cdo-web/api/v2/datasets?enddate=2024-06-10&dataypeid=PRCP&locationid=FIPS:08'
#datatypes: Precipitation (PRCP), Snow depth (SNWD)  










snow_depth_url = 'https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=SNWD&locationid=FIPS:08&stationid=GHCND:USS0005K21&units=standard&startdate=2024-01-07&enddate=2024-01-14&limit=1000'
precipitation_url = 'https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=PRCP&locationid=FIPS:08&stationid=GHCND:USS0005K09S&units=standard&startdate=2024-01-07&enddate=2024-01-14&limit=1000'
#precipitation and snow depth in inches
headers = {'token':'ptCSsKJigBiLLmlIdcjtNPMGhdYTpiXG'}
r = requests.get(url = precipitation_url, headers=headers)
locdf = pd.json_normalize(r.json()['results'])

# r = requests.get(url = base_url, headers=headers)
# datadf = pd.json_normalize(r.json()['results'])
#iterate through each station to gather the snow data for that station. concat evenything together
# loc = requests.get(url = locations_url, headers=headers)
# locations = pd.json_normalize(loc.json()['results'])
# merged = pd.merge(datadf, locdf,how='left',left_on='station',right_on='id')
# import folium
# m = folium.Map(location=[locdf['latitude'].mean(), locdf['longitude'].mean()], zoom_start=5)

# for i, row in locdf.iterrows():
#     folium.Marker(
#         location=[row['latitude'], row['longitude']],
#         popup=row['name']
#     ).add_to(m)

# # Display the map
# m.save('names.html')