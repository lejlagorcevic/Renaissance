// STRINGOVI  PART 2 //

// REPLACE metoda vrši zamenu nekoliko karaktera datog stringa.  
// Ima dva karaktera.
// Po defaultu replace() metoda menja samo first match- prvo pronalaženje u datom stringu.
const recenica = "danas smo podelili sertifikate za HTML, CSS i JavaScript."
let recenica2 = recenica.replace("danas", "Juče");
console.log(recenica2);
recenica2 = recenica.replace("s", "t");
console.log(recenica2);
// Za promenu svih pronalaženja datog stringa ćemo koristiti Regular Expressions:
// 1. g(global)
recenica2 = recenica.replace(/s/g, "t");
console.log(recenica2);
// 2. i (insensitive)
recenica2 = recenica.replace(/s/i, "A")
console.log(recenica2);
// 
recenica2 = recenica.replace(/s/gi, "A")
console.log(recenica2);

// toUpperCase Metoda za pretvaranje celog stringa u velika slova.
console.log((recenica.toUpperCase()));

// toLowerCase Metoda za pretvaranje celog stringa u mala slova.
console.log((recenica.toLowerCase()));
console.log(recenica);

// concat() metoda vrši spajanje 2 ili više stringova
let a = "Danas je 16. čas JavaScripta."
let b = "Biće JavaScripta i preko 50 časova."
// Varijanta bez concat() metode
let c = a + " " + b;
console.log(c);
// Varijanta sa concat() metodom
c = a.concat(b);
console.log();

c = a.concat (" ", b, "\n", "Nakon toga ćemo raditi react biblioteku.");
console.log(c);

// Napomena.
// Sve string metode prave novu promenljivu (jer su stringovi immutable vrednosti).






// 1. Zadatak

// Napraviti funkciju koja kod stringa (koji predstavlja argument funkcije) ispituje sledeće:

// Ako dati string ima veču dužinu on 9:
// pravi novi string koji će biti isečak od pola do kraja originalnog stringa. Nakon toga, novom stringu
// menjamo sva mala slova "a" sa velikim slovom "B" i funkcija će vratiti novi string koji je sastavljen
// od "Ovo je novodobijena rečenica, " i poslednjeg izmenjenog isečka.

// Ako string ima dužinu <= 9;
// Funkcija treba vratiti poruku:
// argument + {njena dužina} + "nedovoljno za dalje ispitivanje".

const mojaFunkcija = function(recenica){
    if(recenica.length > 9){
        let polaDuzine;
        // if(recenica.length % 2 === 0){
        //     polaDuzine = recenica.length / 2;
        // } else if (recenica.length % 2 !== 0){
        //     polaDuzine = Math.ceil(recenica.length / 2);
        // }
        polaDuzine = recenica.length % 2 === 0 ? recenica.length / 2 
        // const isecak = 
    } else {

    }
}

// Domaći zadatak:

// Napraviti funkciju koja traži od korisnika da unese neku rečenicu, zatim funkcija vraća datu rečenicu
// , za