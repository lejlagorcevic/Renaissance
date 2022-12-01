// trim() metoda briše razmake sa obe strane stringa.

const recenica = "     da li vam je hladno ovde?      "
console.log(recenica);
console.log(recenica.length);
const recenica2 = recenica.trim();
console.log(recenica2);
console.log(recenica2.length);

// Postoje 3 metode za ekstraktovanje (uzimanje) jednog karaktera nekog stringa:

// 1. charAt(index)- vraća nam karakter nekog stringa za poslatim indeksom.
// 2. charCodeAt(index)- vraća nam kod karaktera nekog stringa za poslatim indeksom.
// 3. string [index] - vrlo sličmo charAt metodi sa jednom razlikom

const novaRecenica = "Spava mi se."
const char1 = novaRecenica.charAt(3);
console.log(char1);

const char2 = novaRecenica.charCodeAt(3);
console.log(char2);