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
console.log("On page.");


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


// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
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


// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
console.log("___________________________________________");
console.log("7. Sunday")
console.log("XXXXXXXXXXXXXXXXXXXX") // nejasan deo- d = new Date(year, 0, 1);


// 8. Write a JavaScript program where the program takes a random integer between 1 to 10,
// the user is then prompted to input a guess number. If the user input matches with guess number,
// the program will display a message "Good Work" otherwise display a message "Not matched". 
// console.log("___________________________________________");
// console.log("8. Guess the number")

// const num = Math.ceil(Math.random() * 10);
// console.log(num);
// const gnum = prompt("Guess the number from 0 to 10 inclusive:")
// if (gnum == num)
// console.log("Matched");
// else 
// console.log("Not matched. The number was " + num); //da li u console.log-u treba +num ili +gnum?


// 9. Write a JavaScript program to calculate days left until next Christmas.
console.log("___________________________________________");
console.log("9. Days 'til Christmas")
console.log("XXXXXXXXXXXXXXXXXXXX") //new Date, getMonth, getDay, getFullYear etc.


// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
console.log("___________________________________________");
console.log("10. Multiplication and division program")
console.log("On page.");

function multiplyBy(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2; 
}


// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
console.log("___________________________________________");
console.log("11. From Celsius to Fahrenheit")
console.log("XXXXXXXXXXXXXXXXXXXX")


// 12. Write a JavaScript program to get the website URL (loading page).
console.log("___________________________________________");
console.log("12. URL (loading page)")
// alert("document.URL")                                                           // ne radi?
console.log("XXXXXXXXXXXXXXXXXXXX")


// 13. Write a JavaScript exercise to create a variable using a user-defined name.
console.log("___________________________________________");
console.log("13. variable using a user-defined name)")
var Lejla = 'abcd';
var g = 2002;
this[Lejla] = g;
console.log(this[Lejla])


// 14. Write a JavaScript exercise to get the extension of a filename.
console.log("___________________________________________");
console.log("14. The extension of a filename")
console.log("XXXXXXXXXXXXXXXXXXXX")                                                 // nejasno

// 15. Write a JavaScript program to get the difference between a given number and 13, 
// if the number is greater than 13 return double the absolute difference.
console.log("___________________________________________");
console.log("15. Zbir")
function difference(d)
 {
    if (d <= 13)
        return 13 - d;
    else
        return (d - 13) * 2;
 }
console.log(difference(4))
console.log(difference(14))

// 16. Write a JavaScript program to compute the sum of the two given integers.
//  If the two values are same, then returns triple their sum.
function zbirTri(a, b) {
    if (a == b){
        return 3 * (a + b);
    } else{
        return (a + b);
    }
}
console.log(zbirTri(2, 8));
console.log(zbirTri(8, 8));                                  // Zašto se u log-u prikazuje 9 i 2?

