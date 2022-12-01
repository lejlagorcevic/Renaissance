                  // ZADATAK SA ČASA //

// Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
// pravi novi string koji ce biti isecak od pola do kraja originalnog stringa. Nakon toga novom stringu 
// menjamo sva mala slova "a" sa "B" i funkcija ce vratiti novi string koji je sastavljen od 
// "Ovo je novodobijena recenica, " i poslednjeg izmenjenog isecka.
// Ako string ima duzinu <= 9:
// Funkcija treba vratiti poruku:
// argument + {njena duzina} + "nedovoljno za dalje ispitivanje".

// const mojaFukncija = function (recenica) {
//     if (recenica.length > 9) {
//       let polaDuzine;
//       // if (recenica.length % 2 === 0) {
//       //   polaDuzine = recenica.length / 2;
//       // } else if (recenica.length % 2 !== 0) {
//       //   polaDuzine = Math.ceil(recenica.length / 2);
//       // }
//       polaDuzine =
//         recenica.length % 2 === 0
//           ? recenica.length / 2
//           : Math.ceil(recenica.length / 2);
//       const isecak = recenica.slice(polaDuzine, recenica.length);
//       const novaRecenica = isecak.replace(/a/g, "B");
//       const konacno = "Ovo je novodobijena recenica, ".concat(novaRecenica);
//       return konacno;
//     } else {
//       const recenica2 = recenica.concat(
//         recenica.length,
//         "nedovoljno za dalje ispitivanje."
//       );
//       return recenica2;
//     }
//   };
// console.log(mojaFukncija("Kraj casa"));
// console.log(mojaFukncija("Kraj 2. casa rada sa stringovima."));

                                           // DOMAĆI ZADATAK //

// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca,
//  datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet,
// 5. Neka bude ispisano prvih 10 karaktera unete recenice,
// 6. Neka bude ispisano poslednjih 10 karaktera unete recenice.

const domaci = () => {
  const recenica = prompt("Unesite neku recenicu: ");
  let polaDuzine;
  // if (recenica.length % 2 === 0){
  //   polaDuzine = recenica.length / 2
  // } else {
  //   polaDuzine = Math.round(recenica.length / 2)
  // }
  polaDuzine =
   recenica.length % 2 === 0 
   ? recenica.length / 2 
   : Math.round(recenica.length / 2);
  const prva = recenica.toUpperCase();
  const druga = recenica.toLowerCase();
  const prvaPolovina = recenica.slice(0, polaDuzine).toUpperCase();
  const drugaPolovina = recenica.substring(polaDuzine, recenica.length).toLowerCase();
  // const treca = prvaPolovina + drugaPolovina;
  const treca = prvaPolovina.concat(drugaPolovina);
  const cetvrta = recenica.replace (/skola/gi, "fakultet");
  const peta = recenica.substr(0, 10);
   const sesta = recenica.slice(-10);
   return(
    prva.concat("\n", druga, "\n", treca, "\n", cetvrta, "\n", peta, "\n", sesta)
   );
};
console.log(domaci());
// const isecak = "Recenica za primenu slice metode jednim argumentom.".slice(12);
// console.log(isecak);