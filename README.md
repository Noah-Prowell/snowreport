# snowreport
## Initial Ideas
- multi graph webpage shwoing current snow recordings and snow depth in certain areas of colorado.
- each graph will be a station where the snow levels have been recorded.
- Possibly have a few stations showing the last 15 minute precipitation numbers for a real time pow level meeter.

api docs: https://www.ncdc.noaa.gov/cdo-web/webservices/v2#locations

snow depth: https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=SNWD&locationid=FIPS:08&stationid=GHCND:USS0005K14S&units=standard&startdate=2024-01-07&enddate=2024-01-14&limit=1000

precipitation: https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=PRCP&locationid=FIPS:08&stationid=GHCND:USS0005K14S&units=standard&startdate=2024-01-07&enddate=2024-01-14&limit=1000