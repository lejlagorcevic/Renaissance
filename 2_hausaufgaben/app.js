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
console.log("___________________________________________");
console.log("17. If a === b")

function zbirTri(a, b) {
    if (a == b){
        return 3 * (a + b);
    } else{
        return (a + b);
    }
}
console.log(zbirTri(2, 8));
console.log(zbirTri(8, 8));                                  // Zašto se u log-u prikazuje 9 i 2?


// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
// Returns triple their absolute difference if the specified number is greater than 19.
console.log("___________________________________________");
console.log("17. Absolute difference")

function difference1(n){
    if (n <= 19) {
        return (19 - n);
    } else {
        return (n - 19) * 3;
    }
}
console.log(difference1(23));


// 18. Write a JavaScript program to check two given numbers and return true 
// if one of the number is 50 or if their sum is 50.
console.log("___________________________________________");
console.log("18. Check given numbers")

function checkNumbers (a, b){
    return ((a == 50 || b == 50) || (a + b == 50))
}
console.log(checkNumbers(50, 23));
console.log(checkNumbers(25, 23));
console.log(checkNumbers(43, 7));
console.log(checkNumbers(25, 25));


// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 
console.log("___________________________________________");
console.log("19. Nejasno")
console.log("XXXXXXXXXXXXXXXXXXXX")                                                               //nejasno


// 20. Write a JavaScript program to check from two given integers, 
// whether one is positive and another one is negative.
console.log("___________________________________________");
console.log("20. Positive/negative")

function pozNeg(p) {
    if (p > 0) {
        return "Pozitivan broj";
    } else if (p === 0){
        return "Nula";
    } else if (p < 0){
        return "Negativan broj";
    } else if (p = isNaN){
        return "Nije broj";
    }
}
console.log(pozNeg(3));
console.log(pozNeg(0));
console.log(pozNeg(-3));
console.log(pozNeg("Nula"));

// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. 
// If the given string begins with "Py" then return the original string.
console.log("___________________________________________");
console.log("21. Adding Py to a string")
console.log("XXXXXXXXXXXXXXXXXXXX")                                                              //NEJASNO!


// 22. Write a JavaScript program to remove a character at the specified position 
// of a given string and return the new string.
console.log("___________________________________________");
console.log("22. Remove a character from a string")

function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }

console.log(remove_character("Python",0));
console.log(remove_character("Python",3));                                                        // Resenje sa sajta //
console.log(remove_character("Python",5));                                                        // NEJASNO!

// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. 
// The string length must be greater than or equal to 1.
console.log("___________________________________________");
console.log("22. Changing the position of characters in string")

function first_last(str1) 
  {
  if (str1.length <= 1)
  {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));


// 24. Write a JavaScript program to create a new string from a given string with the 
// first character of the given string added at the front and back.
console.log("___________________________________________");
console.log("24. Adding characters to a string ")

function front_back(str) {
  first = str.substring(0,1);
  return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));


// 25. Write a JavaScript program to check whether a given positive number 
// is a multiple of 3 or a multiple of 7. 
console.log("___________________________________________");
console.log("25. Is the given number a multiple of 3 or 7 ")

function zadatak25(x) {
  if (x % 3 == 0 || x % 7 == 0) {
    return true;
  } else {
    return false;
  }
}


console.log(zadatak25(12));
console.log(zadatak25(14));
console.log(zadatak25(10));
console.log(test37(11));