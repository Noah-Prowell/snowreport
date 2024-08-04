import requests
import pandas as pd
#url 
base_url = 'https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=SNOW&locationid=FIPS:08&startdate=2023-10-31&enddate=2024-06-10&limit=1000'
headers = {'token':'ptCSsKJigBiLLmlIdcjtNPMGhdYTpiXG'}
r = requests.get(url = base_url, headers=headers)
df = pd.json_normalize(r.json()['results'])