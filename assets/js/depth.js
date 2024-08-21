let snowDepthChart = null;
let precipitationChart = null;


    // Function to get the stationId from the HTML
    // function getStationId() {
    //     const stationDataElement = document.getElementById('stationData');
    //     return stationDataElement.getAttribute('data-station-id');
    // }
    // Function to fetch and update graphs
    function updateGraphs(startDate, endDate, stationId) {
        // const stationId = getStationId();
        console.log(`depth station ${stationId}`);
        console.log(`Fetching data from ${startDate} to ${endDate} for depth station ${stationId}...`);
        // Snow Depth API call
        fetch(`https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=SNWD&locationid=FIPS:08&stationid=${stationId}&units=standard&startdate=${startDate}&enddate=${endDate}&limit=1000`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain',
                'token': 'ptCSsKJigBiLLmlIdcjtNPMGhdYTpiXG'
            }
        })
        .then(response => response.json())
        .then(data => {
            const results = data.results;
            const snowDates = results.map(item => item.date.split('T')[0]);
            const snowValues = results.map(item => item.value);
            console.log(results)
            const ctx1 = document.getElementById('depth').getContext('2d');
            console.log(ctx1);
            if (snowDepthChart) {
                console.log('Destroying existing Snow Depth chart');
                snowDepthChart.destroy();
            }
            snowDepthChart = new Chart(ctx1, {
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
        .catch(error => console.error('Error fetching Snow Depth data:', error));
        console.log(`Fetching data from ${startDate} to ${endDate} for precipitation station ${stationId}...`);
        // Precipitation API call
        fetch(`https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=PRCP&locationid=FIPS:08&stationid=${stationId}&units=standard&startdate=${startDate}&enddate=${endDate}&limit=1000`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain',
                'token': 'ptCSsKJigBiLLmlIdcjtNPMGhdYTpiXG'
            }
        })
        .then(response => response.json())
        .then(data => {
            const results = data.results;
            const precipDates = results.map(item => item.date.split('T')[0]);
            const precipValues = results.map(item => item.value * 10);

            const ctx2 = document.getElementById('precipitation').getContext('2d');
            if (precipitationChart) {
                console.log('Destroying existing Precipitation chart');
                precipitationChart.destroy();
            }
            precipitationChart = new Chart(ctx2, {
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
        .catch(error => console.error('Error fetching Precipitation data:', error));
    }
window.onload = function() {
    // Initial load with base data
    const initialStartDate = '2024-01-07';
    const initialEndDate = '2024-01-14';
    const stationId = 'GHCND:USS0005K14S'
    updateGraphs(initialStartDate, initialEndDate, stationId);

    // Event listener for the Update button
    document.getElementById('updateButton').addEventListener('click', () => {
        const startDate = document.getElementById('startDate').value; // Will be in yyyy-mm-dd format
        const endDate = document.getElementById('endDate').value;   
        if (startDate && endDate) {
            updateGraphs(startDate, endDate, stationId);
        } else {
            alert('Please enter both start and end dates.');
        }
    });
};
