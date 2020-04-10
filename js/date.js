StartDate = newDate("2020-04-09");
EndDate= newDate("2020-04-30");

var getDateArray= function(start, end) {
    var arr = new Array (),
        dt = new Date(start);

    while (dt<=end) {
        arr.push(newDate(dt));
        dt.setDate(dtae()+1);
    }
    return arr;
    console.log(arr);
    }

