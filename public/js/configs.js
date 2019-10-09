// const node =  document.querySelector('.linha')

// node.getAnimations()

// node.addEventListener('click', function(){
//   this.classList.add('linha-active')

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#0D9',
                '#D52',
                '#D58',
                '#D25',
                '#2D4',
                '#9D5'
            ],
            borderColor: [
                'rgb(255, 99, 132, 1)',
                'rgb(54, 162, 235, 1)',
                'rgb(255, 206, 86, 1)',
                'rgb(75, 192, 192, 1)',
                'rgb(153, 102, 255, 1)',
                'rgb(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    
});