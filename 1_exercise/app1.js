// 1. Write a JavaScript program to display the current 
//    day and time in the following format:
//         Sample Output : Today is : Tuesday.
//         Current time is : 10 PM : 30 : 38
var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log("Original. Today is  : " + daylist[day] + ".");

    
var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log("First attempt. Today is : " + daylist[day] + ".");
    

var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log("Second attempt. Today is : " + daylist[day] + ".");    


var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log("Third attempt. Today is : " + daylist[day] + ".")




//TIME
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >=12)? hour - 12: hour;
if (hour===0 && prepand=== " PM "){
    if (minute===0 && second===0){
        hour=12;
        prepand=" Noon";
    } else {
        hour=12;
        prepand=" PM";
    }
}
if (hour===0 && prepand===" AM "){
    if (minute===0 && second===0){
        hour=12;
        prepand=" Midnight";
    } else {
        hour=12;
        prepand=" AM";
    }
}
console.log("First attempt. Current Time : " + hour + " ; " + prepand + " : " + minute + " : " + second);


var hour =  today.getHours();
var minute = today.getMinutes()
var second = today.getSeconds();
var prepand = (hour>=12)? " PM":" AM";
hour = (hour>=12)? hour - 12: hour;
if (hour===0 && prepand===0){
    if (minute===0 && second===0){
        hour=12;
        prepand=" Noon";
    } else {
        hour=12;
        prepand=" PM";
    }
}
if (hour === 0 && prepand=== " AM") {
    if ( minute === 0 && second === 0){
        hour=12;
        prepand = " Midnight";
    } else {
        hour=12;
        prepand=" AM";
    }
} console.log("Second attempt. Current time : " + hour + ":"+ minute+":"+second+ prepand)


var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour>=12)? hour-12:hour;
if(hour===0 && prepand==="PM"){
    if(minute===0 && second===0){
        hour=12;
        prepand=" Noon"
    } else{
        hour=12;
        prepand=" PM";
    }
}
if(hour===0 && prepand==="AM"){
    if (minute===0 && second===0){
        hour=12;
        prepand="Midnight";
    } else{
        hour=12;
        prepand="AM";
    }
}
console.log("Third attempt. Current time : " + hour + ":" + minute + ":" + second + prepand);

//allTogether
