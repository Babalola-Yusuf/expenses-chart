getData();
async function getData() {
    const response = await fetch("data.json")
    const data = await response.json();
    console.log(data);
    let length = data.length;
    console.log(length);
    let labels = [];
    let values = [];
    for (i = 0; i < length; i++) {
        labels.push(data[i].day);
        values.push(data[i].amount);
    }
    
    new Chart(document.getElementById("bar-chart"), {
         type: 'bar',
         data: {
            labels: labels,
            datasets: [
               {
                 
                  backgroundColor: ["hsl(10, 79%, 65%)",
                     "hsl(10, 79%, 65%)",
                     "hsl(186, 34%, 60%)",
                     "hsl(10, 79%, 65%)",
                     "hsl(10, 79%, 65%)",
                     "hsl(10, 79%, 65%)",
                     "hsl(10, 79%, 65%)"],
                  data: values
               }
            ]
         },
         options: {
            legend: { display: false},
            title: {
               display: true,
               text: ' Spending - Last 7 days'
            }
         }
      });
    
}
