// Napravti arrow funkciju koja na osnovu unete vrednosti vraća jedno od četiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "UNET JE POZITIVAN RBOJ"
// Ako je unet negativan broj, ispisuje poruku "UNET JE NEGATIVAN RBOJ"
// Ako je unetA 0 , ispisuje poruku "UNETA JE 0"
// Ako nije unet pozitivan broj, ispisuje poruku "UNETA VREDNOST NIJE RBOJ"

// const unos = () => {
//     const broj = Number(prompt("Unesi neku vrednost:"))
//     if (isNaN(broj)){
//         return "Unesite broj:"
//     } else if (broj === 0){
//         return "Uneli ste broj 0."
//     } else if (broj > 0){
//         return "Uneli ste pozitivan broj"
//     } else {
//         return "Uneli ste negativan broj."
//     }
// }
// console.log(unos())


// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 : 30 : 38
console.log("___________________________________________");
console.log("1. Day and time:")
var today =  new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is: " + daylist[day] + ".");

var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') { 
    if (minute===0 && second===0){
        hour=12;
        prepand=' Noon';
    } else {
        hour=12;
        prepand=' PM';
    }
}
if (hour===0 && prepand===' AM ') {
    if (minute===0 && second===0){
        hour=12;
        prepand=' Midnight';
    } else {
        hour=12;
        prepand=' AM';
    } 
} 
console.log("Current Time: " + hour + ":" + minute + ":" + second + prepand);
console.log("___________________________________________");


// 2. Write a JavaScript program to print the contents of the current window.
function print_current_page() {
    window.print()
}
console.log("2. Printing current page:")
console.log("___________________________________________");


// 3. Write a JavaScript program to get the current date. 
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
console.log("3. Current date (3 ways):")
var today = new Date();
var dd = today.getDate()+1;
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if (dd < 10){
    dd = "0" + dd;
} if (mm < 10){
    mm = "0" + mm;
}
today = mm + "-" + dd + "-" + yyyy;
console.log(today);
today = dd + "-" + mm + "-" + yyyy;
console.log(today);
today = dd + "/" + mm + "/" + yyyy;
console.log(today);

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
console.log("___________________________________________");
console.log("4. Area of a triangle")
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);


// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically 
// removing one letter from the end of the string and attaching it to the front.
console.log("___________________________________________");
console.log("5. Rotating string")
console.log("XXXXXXXXXXXXXXXXXXXX")



// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.console.log("___________________________________________");
console.log("___________________________________________");
console.log("6. Leap year")
function leapYear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapYear(2016));
console.log(leapYear(2020));
console.log(leapYear(2022));
console.log(leapYear(2024));
console.log(leapYear(2006));