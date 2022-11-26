// TRUTHY and FALSY values
const isSunny = false;
// Kraća sintaksa!
if (isSunny){
    console.log("Napolju je sunčano.")
} else{
    console.log("Napolju je kiša.");
}
// Postoji samo 8 FALSY vrednosti i one su:
// 1. false;
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. undefined
// 7. null
// 8. NuN


// Napraviti funciju gde se traži unos od strane korisnika i vraća poruka da li je
// uneta vrednost TRUTHY ili FALSY vrednost.

function myFunc () {
    const vrednost = +prompt("Unesi vrednost:");
    if (vrednost){
        return "TRUTHY"
    } else{
        return "FALSY"
    }
}
console.log(myFunc());