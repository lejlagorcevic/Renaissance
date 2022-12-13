// JavaScript prepoznaje samo jedan tip podataka za brojeve.
// U pitanju je number tip podataka i oni mogu biti zapisani sa ili bez decimlanog zareza.

// Veliki brojevi mogu biti zapisani sa tzv. exponent onzakom:
const petica = 5e6
console.log(petica);

const noviBroj = 555e-5;
console.log(noviBroj);


// Što se tiče sabiranja decimalnih brojeva JavaScript nije baš najbolji kalkulator.
const x = 0.1;
const y = 0.2;
const z = x + y;
console.log(z);

//  + operator
console.log("10"+10); //"1010"
//  - operator
console.log("10"-2); //"8"

// NaN - Not a Number
// NaN je JavaScript rezervisana reč koja ukazuje da broj nije korektan.
// NaN je tipa number!!!

// Za proveru da li je neka vrednost korektan broj se kosirsti !isNaN().
console.log(isNaN(100/"Apple"));

const a = 25;
const c = -1
const b = 0;

console.log(a/b); 
console.log(c/b);

console.log(typeof Infinity);
console.log(typeof -Infinity);

// rgb(0, 255, 123)
// #12ab33
// rgb(18, 171, 51)
// 12 = 1*16 + 2*1 = 18
// ab = 10*16 + 11*1 = 17
// 33 = 3*16 + 3*1 = 48 + 3 = 51

// Hexadecimal numbers:
// Ako su brojevi napisani prefiksom 0xFF rezultat će biti 255.
const r = 0xff;
console.log(r);


// Pored onsovnog naičina dodeljivanja vrednosti nekoj promenljivoj možemo to uraditi i preko new:
const k = 22;
const l = new Number(33);

console.log(k);
console.log(l);

console.log(k + l);

console.log(typeof k);
console.log(typeof l);

// Napraviti funkciju koja: 
// a) pretvara km u m
// b) prtvara inch u cm

function LengthConverter(kmUm) {
  document.getElementById("outputMeters").innerHTML=kmUm * 1000;
}