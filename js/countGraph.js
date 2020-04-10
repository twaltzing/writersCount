var ctx = document.getElementById('wordCount').getContext('2d');

//values for daily goals; line graph
var goalCounts = [0,1667,3334,5001,6668,8335,10002,11669,13336,15003,16670,18337,20004,21671,23338,25005,26672,28339,30006,31673,33340,35007,36674,38341,40008,41675,43342,45009,46676,48343,50010];
//values of daily writing output

var initialArr=[50000,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,];

//see if there's data in LocalStorage already
if(localStorage.getItem("wordCountArr")) {
    console.log("There is something in local Storage");
    console.log("This is the array in local storage: "+localStorage.getItem("wordCountArr"));}
    //if not, set localStorage array to initialArr
    else {
        localStorage.setItem("wordCountArr", JSON.stringify(initialArr));
        console.log("This is the array in local storage: "+localStorage.getItem("wordCountArr"));
    }
    //load the array with stored data
    dataArrayFromStorage=localStorage.getItem("wordCountArr"); //this isn't yet an array
    wordCountArr = JSON.parse(dataArrayFromStorage);


//labels for the X axis: days
const xLabels =['Goal',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];


// console.log("The original data array is "+wordCountArr);


//get number of words to add from text input element when button "addWordCount" is clicked
//first get the button
const addWordCount=document.getElementById("addWordCount");
//this works fine, the button is identified
// console.log(addWordCount);


//pretty colors for the bars
const spectrum=["255, 0, 0","255, 51, 0","255, 105, 0","255, 153, 0","255, 204, 0","255, 255, 0","204, 255, 0","153, 255, 0","105, 255, 0","51, 255, 0","0, 255, 0","0, 255, 51","0, 255, 105","0, 255, 153","0, 255, 204","0, 255, 0","0, 204, 51","0, 153, 105","0, 105, 153","0, 51, 204","0, 0, 255","51, 0, 255","105, 0, 255","153, 0, 255","204, 0, 255","255, 0, 255","255, 0, 204","255, 0, 153","255, 0, 105","255, 0, 51",];


//add "rgb" and parens to string for use in color statements below
for (let item in spectrum){
    spectrum[item]="rgb("+spectrum[item]+")";
}
//make the first bar invisible to force Y axis
spectrum.unshift("rgba(0,0,0,0");

//suppress the awful headers
Chart.defaults.global.legend.display = false;
//style the line graph a bit
Chart.defaults.global.defaultFontSize=5;
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

        }]
    },
    options: {
        scales: {
           yAxes: [{
              ticks: {
                 beginAtZero: true,
                 stepSize: 10000, //<-- set this
                 max: 50000
              }
           }]
        }
     }
})


////////////////////////////

//add word count to graph

function addWords(arr){

    var dateNoRaw = document.getElementById("datepicker").value;
    console.log("The date field raw value is: "+dateNoRaw+" of type "+typeof dateNoRaw);

index = dateNoRaw.length;
console.log("The date array is this long: "+index);

    var dateNo = dateNoRaw.slice(-2);
    console.log("DateNo is "+dateNo+" of type "+ typeof dateNo);
    position=parseInt(dateNo);
     
    console.log("Update will go to day "+position);
var num = document.getElementById("wordCountToAdd").value;

    // console.log("Num from the text field is a "+typeof num+" variable.");

num2=parseInt(num);
    // console.log("Num2 after parseInt is a "+typeof num2+ " variable.");
 
arr.splice(position,1,num2);
    console.log(arr);
    countChart.data.datasets[0].data = arr;
    countChart.update();

wordCountArr = arr;
console.log("Content of wordCountArr are now "+wordCountArr);

localStorage.setItem("wordCountArr", JSON.stringify(wordCountArr));
}

function resetter(arr){
    // localStorage.clear(arr);
    // console.log(localStorage("wordCountArr"));
    alert ("You Clicked Me!");
}


