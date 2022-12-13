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
