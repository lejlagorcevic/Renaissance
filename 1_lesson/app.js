//1st lesson 22.11.2022. "FUNKCICJE"

// Funkcija u JavaScriptu predstavlja blok koda koji se izvršava samo prilikom pozivajna iste.
//Možemo je definisati putem:
// 1. function keyword-a
// 2. arrow funciton sintakse 

// 1. function keyword:
// Pravimo funkciju koja sabira broj 3 i broj 5:
function zbirTriIPet(){
    const zbir = 3 + 5;
    return zbir;
    // return 25 sve nakon return u funtion scope se zanemaruje
    // const omar = "Omar"
}
console.log(zbirTriIPet());

//Pravimo funkciju koja sabira dva broja:
function zbirDvaBroja(par1, par2){ // par1 i par2 predstavljaju parametre funkcije
    return par1 + par2;
}
console.log(zbirDvaBroja(5, 22)) // 5 i 22 predstavljaju argumente funkcije


// Napraviti funkciju koja vraća zbir kvadrata dva broja
function zbirKvadrata (par1, par2){
    return par1 ** 2 + par2 ** 2;
}
console.log (zbirKvadrata(2, 6))
//Defaultna vrednost nekog paramtera:

//Napraviti funkciju koja vraća zbir kvadrata dva broja. 
//Ako se izostavi drugi argument, funkcija ga računa kao 0.
// 1.NAČIN
function zbirKvadrata2 (a, b){
    if(b === undefined){
        return a ** 2
    } else {
        return a ** 2 + b ** 2;
    }   
}
console.log(zbirKvadrata2(2,3));
console.log(zbirKvadrata2(2));

// 2.NAČIN                                                              !!   O B N O V I T I   !!
// Defaultne vrednosti se stavljaju na kraju!!
// Ne može neka defaultna vrednost biti definisana pre obavezne!
function zbirKvadrata3(a, b = 0){
    return a ** 2 + b ** 2;
}
console.log(zbirKvadrata3(5));
console.log(zbirKvadrata3(5, 1));

//Još jedan način definitsanja funkcije preko function keyword:
const aritmetickaSredina = function(par1 = 1, par2 = 1, par3 = 1){
    return (par1 + par2 + par3) / 3;
}
console.log(aritmetickaSredina(4,5,3));
console.log(aritmetickaSredina(4,5));
console.log(aritmetickaSredina(2));



//Napraviti funkciju površina koja uzima dve vrednosti.
//Ako su te dve vrednosti jednake- da vraća površinu pravougaonika uz određenu poruku.
function povrsina(a, b) {
    if(a === b){
        return a ** b + " Neka poruka";
    } else {
        return a ** b;
    }
}
console.log(povrsina(2,3));
console.log(povrsina(2,2));




