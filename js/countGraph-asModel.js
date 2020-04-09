var ctx = document.getElementById('wordCount').getContext('2d');

//values for daily goals; line graph
var goalCounts = [0,1667,3334,5001,6668,8335,10002,11669,13336,15003,16670,18337,20004,21671,23338,25005,26672,28339,30006,31673,33340,35007,36674,38341,40008,41675,43342,45009,46676,48343,50010];
//values of daily writing output
var wordCountArr=[50000,1667,2800];

//labels for the X axis: days
const xLabels =['Goal',1,2];


console.log("The original data array is "+wordCountArr);





//pretty colors for the bars
const spectrum=["255, 0, 0","255, 51, 0","255, 105, 0","255, 153, 0","255, 204, 0","255, 255, 0","204, 255, 0","153, 255, 0","105, 255, 0","51, 255, 0","0, 255, 0","0, 255, 51","0, 255, 105","0, 255, 153","0, 255, 204","0, 255, 0","0, 204, 51","0, 153, 105","0, 105, 153","0, 51, 204","0, 0, 255","51, 0, 255","105, 0, 255","153, 0, 255","204, 0, 255","255, 0, 255","255, 0, 204","255, 0, 153","255, 0, 105","255, 0, 51"];


//add "rgb" and parens to string for use in color statements below
for (let item in spectrum){
    spectrum[item]="rgb("+spectrum[item]+")";
}
//make the first bar invisible
spectrum.unshift("rgba(0,0,0,0");



//suppress the awful headers
Chart.defaults.global.legend.display = false;
//style the line graph a bit
Chart.defaults.global.elements.point.radius=0;
Chart.defaults.global.elements.point.borderWidth=0;
Chart.defaults.global.elements.point.backgroundColor='rgba(0,0,0,1)';
//color of the line for line chart
Chart.defaults.global.elements.line.borderColor='rgba(0,0,0,1)';
Chart.defaults.global.elements.line.borderWidth=0.5;

//produce the chart
var countChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xLabels,
        datasets: [{
            label: 'Progress',
            backgroundColor:spectrum,
            borderColor: spectrum,
            borderWidth: "1px",
            data: wordCountArr
        }, {    
            label: 'Goals',
            data: goalCounts,
            type: 'line',
            color: 'rgba(0,0,0,1)'

        }
    
    ]
    }
})

////////////////////////////

//add word count to graph

const addWordCount=document.getElementById("addWordCount");

var num = document.getElementById("wordCountToAdd").value;

addWordCount.addEventListener("click",addWords(countChart,wordCountArr.length,num));



function addWords(data, label){
    
        var dtst = {
            label: xLabels,
            data: wordCountArr,
            backgroundColor: rgba("0,255,255,1"),
            borderColor: rgba("255,0,0,1"),
            borderWidth: 2
        }                   
        countChart.data.labels = xLabels;
        countChart.data.datasets.push(dtst);
        countChart.update();
    }
  


    
    
// if I just set num to a number here, it does update.
    //  var num = 7000;
    
console.log("Num value is "+num);


  
console.log("These are the data points: "+wordCountArr);
console.log("These are the day labels: "+xLabels);

