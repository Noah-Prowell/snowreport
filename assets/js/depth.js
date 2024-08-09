window.onload = function() {
    console.log('Starting first API call for Snow Depth...');
    // First API call for Snow Depth
    fetch('https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=SNWD&locationid=FIPS:08&stationid=GHCND:USS0005K14S&units=standard&startdate=2024-01-07&enddate=2024-01-14&limit=1000', {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain',
            'token': 'ptCSsKJigBiLLmlIdcjtNPMGhdYTpiXG'
        }
    })
    .then(response => response.json())
    .then(data => {
        const results = data.results;
        const snowDates = results.map(item => item.date.split('T')[0]); // Extract dates
        const snowValues = results.map(item => item.value); // Extract values

        // Visualize the Snow Depth data
        const ctx1 = document.getElementById('depth').getContext('2d');
        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: snowDates,
                datasets: [{
                    label: 'Snow Depth (in)',
                    data: snowValues,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error fetching snow depth data:', error));

    // Second API call for Precipitation
    console.log('Starting second API call for Precipitation...');
    fetch('https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=PRCP&locationid=FIPS:08&stationid=GHCND:USS0005K14S&units=standard&startdate=2024-01-07&enddate=2024-01-14&limit=1000', {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain',
            'token': 'ptCSsKJigBiLLmlIdcjtNPMGhdYTpiXG'
        }
    })
    .then(response => response.json())
    .then(data => {
        const results = data.results;
        const precipDates = results.map(item => item.date.split('T')[0]); // Extract dates
        const precipValues = results.map(item => item.value); // Extract values

        // Visualize the Precipitation data
        const ctx2 = document.getElementById('precipitation').getContext('2d');
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: precipDates,
                datasets: [{
                    label: 'Precipitation (in)',
                    data: precipValues,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error fetching precipitation data:', error));
};
