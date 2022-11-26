// STRINGOVI //
// Stringovi su immutable vrednosti (nepromenjive).
// Što znači da- ako hoćemo neki sličan string da dobijemo, moramo napraviti novi.

// Metode (funkcije koje primenjujemo za datu promenjivu) //
// length metoda nam služi za dobijanje dužine stringa
const recenica = "Kamerun dobijamo!";
console.log(recenica.length);

// Pristupanje određenom karakteru ide preko indeksa.
// Indeksiranje ide od 0 do ukupne dužine stringa - 1
console.log(recenica[6]);

// Korišćenje  \ backslah karaktera.

// String zapisujemo na 3 načina:

// 1. " "
// Reč koja treba da se nađe pod navodnicima mora biti pod običnim navodnicima,
// ako je zapravo string okružen duplim navodnicima ili obrnuto.
const string1 = "Danas je bilo lepo vreme."
// const string1 = 'Danas je bilo "lepo" vreme.'
// \:
const string4 = "Danas je bilo \"lepo\" vreme"
// 2. ' '
const string2 = 'Danas je bilo lepo vreme.'
//  3. ` `
const string3 = `Danas je bilo lepo vreme.`
console.log(string5);
// \Možemo da pišemo u sledeći red
// sa \ ne možemo nastavljati liniju koda već samo string

const string5 = "Ovo će da bude jedan dugačak string.\
cela poenta je da prikažemo jedan te isti string u više redova"; 
const string6 = "Ovo će da bude jedan dugačak string.\n Cela poenta je da prikažemo jedan te isti string u više redova" 
console.log(string6);
// Postoje 3 metode za ekstraktovanje stringa:
// 1. slice (start, end) end nije uključen u opseg
// 2. substring metoda (start, end) razlika u odnosu na slice je da substring ne prihvata negativne indekse.
// 3. substr(start, lenght)

// Računanje ide od 0a