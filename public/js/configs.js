		var options = {
			legend: false,
			tooltips: false,
			elements: {
                borderColor:'#000',
                borderWidth:0,
              
			}
		};

		var chart = new Chart('chart-0', {
			type: 'pie',
			data: {
                labels: ['BACK-END'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: ['#DDD', '#D02'],
                    // borderColor: 'rgb(255, 99, 132)',
                    data: [70,30]
                }]
            },
			options: options
		});

		// eslint-disable-next-line no-unused-vars
		function randomize() {
			chart.data.datasets.forEach(function(dataset) {
				dataset.data = generateData();
			});
			chart.update();
		}

	           
		// eslint-disable-next-line no-unused-vars
		function togglePieDoughnut() {
			
				chart.options.cutoutPercentage = 80;
		
			chart.update();
		}
        togglePieDoughnut()
	