// const picker = datepicker("datepicker");




  thisDay=new Date();
  thisWritingNo=thisDay.getDate();
  console.log(thisWritingNo);
    
    var mon = 4;
    var daysToWrite = [];
    var xLabels=["Goal"];


    for (i=1; i<31; i++)  {
        today=new Date(2020,mon,i);

        dayNo=today.getDate();
        console.log(dayNo);
        xLabels.push(dayNo);
    }    

    var display = document.getElementById("show");
    console.log(display);

function buttonClick(){
    // const dateField = document.getElementById("datepicker").value;
    // console.log(dateField);

    
    display.innerHTML="Today is Friday";
    }