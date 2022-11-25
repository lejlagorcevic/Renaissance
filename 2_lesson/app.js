// 3. zadatak sa testa

//Na osnovy date rečenice napraviti i ispisati novu rečenicu tako da:
// (i) se sa svi samoglasnici pretvore u velika slova
// (ii) na kraju se doda "."
// (iii) ostali karakteri se ne menjaju
function novaRecenica(recenica){
    let recenica2 = "";
    for (let i = 0; i <= recenica.length; i++){
        if ( i === recenica.length){
        } else if (
            recenica[i] === "a" ||
            recenica[i] === "e" ||
            recenica[i] === "i" ||
            recenica[i] === "o" ||
            recenica[i] === "u"
        ) {
            recenica2 += recenica[i].toUpperCase()
        } else {
            recenica2 += recenica[i];
        } 
    } return recenica2;
}
console.log(novaRecenica("Počelo je svetsko prventstvo u fudbalu"))
// 2. Arrow function:
const myFunction = () => {
    //function code
}
const proizvodDvaBroja = (br1, br2) => {
    return br1 * br2;

};
console.log(proizvodDvaBroja(2,16));
//Ako arrrow funkcija ima samo jedan parametar, nije neophodno okruđiti ga yagradama.
//Ako je funkcija jednostavna, tj. ako odmah vraća neki jednostavan izraz, onda sama sintaksa izgleda kraća (nije neophodno koristiti vitičaste zagrade i return keyword)
const kvadratBroja = broj => broj ** 2;

// Napravti arrow funkciju koja na osnovu unete vrednosti vraća jedno od četiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "UNET JE POZITIVAN RBOJ"
// Ako je unet negativan broj, ispisuje poruku "UNET JE NEGATIVAN RBOJ"
// Ako je unetA 0 , ispisuje poruku "UNETA JE 0"
// Ako nije unet pozitivan broj, ispisuje poruku "UNETA VREDNOST NIJE RBOJ"

// const unos = () => {
//     const broj = Number(prompt("Unesite neki broj"))
//     if (isNaN(broj)) {
//         return "Uneta vrednost nije broj."
//     } else if (broj === 0){
//         return "Uneta je 0" 
//     } else if (broj > 0){
//         return "uNET JE POZITIVAN BROJ."
//     } else{
//         return "Unet je negativan"
//     }
// };
// console.log(unos());

// 
function radnoVreme (sat, minut) {
    if (sat > 9 && sat  < 17){
        return "Nije radno vreme"
    } else {
        return "Radno vreme"
    }
}
console.log(radnoVreme(14));

//
const mail = function(satnica, minutnica){
    if (satnica >=9 && satnica < 17 && minutnica >= 0 && minutnica < 60){
        return "Mail je stigao u toku radnog vremena"
    } else {
        return "Mail nije stigao u toku radnog vremena."
    }
}
console.log(mail(14,32));
