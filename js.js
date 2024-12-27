const ctx = document.getElementById('diagram');
const tabs = document.querySelectorAll('.tab-item');
if(tabs){
  tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const isOpen = tab.classList.contains('open');
        console.log('test');
        tabs.forEach(el=>{
            el.classList.remove('open')
        })
        if(isOpen){
            tab.classList.remove('open');

        }else{
            tab.classList.add('open');
        }
    })
})
}

if(ctx){
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2021', '2023'],
      datasets: [{
        data: [3923, 4706],
        borderWidth: 1,
        backgroundColor: ['rgba(209, 170, 102, 0.7)', '#D0A966'],
        borderColor: ['rgba(209, 170, 102, 0.7)', '#D0A966'],
      }]
    },
    options: {
      indexAxis: 'y', 
      scales: {
        x: {
          ticks: {
            callback: function (value, index, values) {
              return '$' + value;
            }
          }
        }
      },
      plugins: {
          legend: {
            display: false, // Приховати легенду
          },
      }    
      
    }
  });
}

