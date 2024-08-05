fetch('https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=SNWD&locationid=FIPS:08&stationid=GHCND:USS0005K14S&units=standard&startdate=2024-01-07&enddate=2024-01-14&limit=1000', {
    method: 'GET', // or 'POST', 'PUT', etc.
    headers: {
    'Content-Type': 'text/plain',
    'token': 'ptCSsKJigBiLLmlIdcjtNPMGhdYTpiXG' // Example of including an authorization token
    }
})
    .then(response => response.json())
 // Check the structure and content
    .then(data => {
        const results = data.results; // Access the array inside the object
        const dates = results.map(item => {
            // Extract the date portion
            let dateStr = item.date.split('T')[0];
            return dateStr; // Return only the date part
        }); // Extract dates for x-axis
        const values = results.map(item => item.value); // Extract values for y-axis
        console.log(results);
    // Visualize the data using Chart.js or any other library
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
        labels: dates, // Assuming 'label' is a key in your data items
        datasets: [{
            label: 'Snow Depth',
            data: values, // Assuming 'value' is a key in your data items
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
    })
    })
    .catch(error => console.error('Error fetching data:', error));

