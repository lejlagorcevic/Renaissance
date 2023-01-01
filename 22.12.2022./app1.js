// JavaScript Math Object //

// Math Objekat nam dozvoljava da izvršimo neke dodatne radnje sa brojevima.

// Math Properties (Konstante)

// Sintaksa je Math.Property 

// Math konstanti ima 8:

// 1. Math.E - vraća Ojlerov broj
console.log(Math.E);

// 2. Math.PI - vraća vrednost PI
console.log(Math.PI);

// 3.  Math.SQRT2 - vraća vrednost kvadratnog korena broja 2
console.log(Math.SQRT2)

// 4. Math.SQRT1_2 - vraća vrendost kvadratnog korena broja 1/2
console.log(Math.SQRT1_2);

// 5. Math.LN2 - Vraća vrednost logaritma osnove E broja 2
console.log(Math.LN2);

// 6. Math.LN10 - Vraća vrenodt logaritma osnove E bbroja 10
console.log(Math.LN10);

// 7. Math.LOG2E - Vraća vrendost logaritma osnove 2 broja e
console.log(Math.LOG2E);

// 8. Math.LOG10E - Vraća vrednost logaritma osnove 10 broja e
console.log(Math.LOG10E);

// MATH METHODS

// Sintaksa je 
// Math.method(number)

// Number to Integer:

// 1. Math.round() - vraća blizi ceo broj

console.log(Math.round(22.23));

// 2. Math.ceil() - vraća sledeći ceo broj
console.log(Math.ceil(22.23));
console.log(Math.ceil(-22.23));

// 3. Math.floor() - vraća prethodni ceo broj
console.log(Math.floor(22.22));
console.log(Math.floor(-22.23));

// 4. Math.trunc() - otklanja decimalni ostatak
console.log(Math.trunc(22.22));
console.log(Math.trunc(-22.23));


// Math.sign(number) - vraća -1, 0 ili 1 u zavisnosti od toga kog je znaka broj.
console.log(Math.sign(22));
console.log(Math.sign(-22));
console.log(Math.sign(0));

// Math.pow(number, power) - vraća numbwe stepenovan na power.
console.log(Math.pow(2, 3));

// Math.sqrt(number) - vraća kvadratni koren nekog broja
console.log(Math.sqrt(25));

// Math.abs(number) - vraća apsolutnu vrednost nekog broja
console.log(Math.abs(-5));

// Math.sin(radians) - vraća vrednost sinusa (izmedju -1 i 1). Argument se posmatra jai vrednost u radijanima
console.log(Math.sin(0));
console.log(Math.sin(Math.PI / 2));

// 32. Write a JavaScript program to find a value which us nearest to 100
// from two different given integer.
const bliziSto = (num1, num2) => {
    const razlika1 = Math.abs(100 - num1)
    const razlika2 = Math.abs(100 - num2)
    const bliziBroj = razlika1 > razlika2 ? num2 : num1;
    return "Blizi je broj " + bliziBroj;
}
console.log(bliziSto(120, 89));

