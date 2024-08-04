import requests
import pandas as pd
#url 
base_url = 'https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=PRCP&locationid=FIPS:08&startdate=2023-10-31&enddate=2024-06-10&limit=1000'
locations_url = 'https://www.ncei.noaa.gov/cdo-web/api/v2/stations?datasetid=GHCND&datatypeid=PRCP&locationid=FIPS:08&startdate=2023-10-31&enddate=2024-06-10&limit=1000&offeset=999'
data_categories = 'https://www.ncei.noaa.gov/cdo-web/api/v2/datacategories?limit=45'
data_types = 'https://www.ncei.noaa.gov/cdo-web/api/v2/datatypes'


headers = {'token':'ptCSsKJigBiLLmlIdcjtNPMGhdYTpiXG'}
r = requests.get(url = locations_url, headers=headers)
locdf = pd.json_normalize(r.json()['results'])

# r = requests.get(url = base_url, headers=headers)
# datadf = pd.json_normalize(r.json()['results'])
#iterate through each station to gather the snow data for that station. concat evenything together
# loc = requests.get(url = locations_url, headers=headers)
# locations = pd.json_normalize(loc.json()['results'])
# merged = pd.merge(datadf, locdf,how='left',left_on='station',right_on='id')
import folium
m = folium.Map(location=[locdf['latitude'].mean(), locdf['longitude'].mean()], zoom_start=5)

for i, row in locdf.iterrows():
    folium.Marker(
        location=[row['latitude'], row['longitude']],
        popup=row['name']
    ).add_to(m)

# Display the map
m.save('map.html')