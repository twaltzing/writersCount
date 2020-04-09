var ctx = document.getElementById('wordCount').getContext('2d');

//values for daily goals; line graph
var goalCounts = [0,1667,3334,5001,6668,8335,10002,11669,13336,15003,16670,18337,20004,21671,23338,25005,26672,28339,30006,31673,33340,35007,36674,38341,40008,41675,43342,45009,46676,48343,50010];
//values of daily writing output
var wordCountArr=[50000,1667,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,2800,];

//find the first two identical values so as to know which one to increase (the second one)
function findFirstTwo (arr){

    for (i=0; i<arr.length; i++){
        let position=i+1;
        console.log(i+1);
        if (arr[i]===arr[position]){
            return position;
            }
        }
        
    }


//find the index of the array member to start with when changing values
var position = findFirstTwo(wordCountArr);

console.log("The current word count is "+wordCountArr[position]);
//insert the new word count for this day and all subsequent

//get number of words to add from text input element when button "addWordCount" is clicked
//first get the button
const addWordCount=document.getElementById("addWordCount");

//this works fine, the button is identified
// console.log(addWordCount);


addWordCount.addEventListener("click",addWords());


//add word count to graph

   function addWords(){
    // If I get the value from the text field using the code below, chart doesn't update.
        // var num = document.getElementById("wordCountToAdd").value;
        // console.log("Num is initially "+num);
        // num=parseInt(num);
        // console.log("After parseInt, num is "+num);
//Now the array is correctly filled with numbers but the chart doesn't update.

// if I just set num to a number here, it does update.
         var num = 7000;
        
    console.log("Num value is "+num);
    
    //replace current data array values at [position] and beyond with num, which is today's count
        wordCountArr.splice(position,1,num);
        for (i=position+1; i<wordCountArr.length; i++){
        wordCountArr.splice(i,1,num);
        
    }  
console.log("These are the data points: "+wordCountArr);
 
}



//pretty colors for the bars
const spectrum=["255, 0, 0","255, 51, 0","255, 105, 0","255, 153, 0","255, 204, 0","255, 255, 0","204, 255, 0","153, 255, 0","105, 255, 0","51, 255, 0","0, 255, 0","0, 255, 51","0, 255, 105","0, 255, 153","0, 255, 204","0, 255, 0","0, 204, 51","0, 153, 105","0, 105, 153","0, 51, 204","0, 0, 255","51, 0, 255","105, 0, 255","153, 0, 255","204, 0, 255","255, 0, 255","255, 0, 204","255, 0, 153","255, 0, 105","255, 0, 51"];


//add "rgb" and parens to string for use in color statements below
for (let item in spectrum){
    spectrum[item]="rgb("+spectrum[item]+")";
}
//make the first bar invisible
spectrum.unshift("rgba(0,0,0,0");

//labels for the X axis: days
const xLabels =['Goal',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

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
var chart = new Chart(ctx, {
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