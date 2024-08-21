/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true, 
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);
// Define your content for different pages
const pages = {
    location1: `<div id="graph1"></div>`,
    location2: `<div id="graph2"></div>`,
	location3: `<div id="graph3"></div>`
    // Add more pages as needed
};
// Attach event listeners for dropdown items once
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        const selectedText = event.target.textContent; // Get the text of the clicked item
        console.log(`Selected item: ${selectedText}`);
        
        // Update the logo element with the selected text
        const targetElement = document.getElementById('logo');
        targetElement.textContent = selectedText;
        
        // Navigate to the appropriate page based on the selected location
        if (selectedText === 'Location 1') {
            navigate('location1');
        } else if (selectedText === 'Location 2') {
            navigate('location2');
        } else if (selectedText === 'Location 3') {
            navigate('location3');
        }
    });
});
function navigate(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pages[page];
    console.log(`Page Number ${page}`);
    
    // Load the corresponding data for the graph if needed
    if (page === 'location1') {
        loadGraph1();
    } else if (page === 'location2') {
        loadGraph2();
    } else if (page === 'location3') {
        loadGraph3();
    }
}

// Functions to load graphs for each location
function loadGraph1() {
	const stationId = "GHCND:USS0005K14S" //Granby
	const startDate = '2024-01-07';
    const endDate = '2024-01-14';
	updateGraphs(startDate, endDate, stationId);
    // Fetch data and display the first graph
    console.log("Loading data for Location 1...");
    // Add your chart initialization code here
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
}

function loadGraph2() {
    // Fetch data and display the second graph
	const stationId = "GHCND:USS0005K21S" //Jones Pass
	const startDate = '2024-01-07';
    const endDate = '2024-01-14';
	updateGraphs(startDate, endDate, stationId);
    console.log("Loading data for Location 2...");
    // Add your chart initialization code here
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
}

function loadGraph3() {
    // Fetch data and display the second graph
	const stationId = "GHCND:USS0005K09S" //Loveland
	const startDate = '2024-01-07';
    const endDate = '2024-01-14';
	updateGraphs(startDate, endDate, stationId);
    console.log("Loading data for Location 3...");
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
    // Add your chart initialization code here
}

