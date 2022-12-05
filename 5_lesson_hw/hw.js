// DOMAĆI //
// Zbir cifara četvorocifrenog broja
// Napiši program koji učitava četvorocifreni broj i ispisuje zbir svih cifara tog broja.
// Ulaz: U jednoj liniji standardnog ulaza nalazi se četvorocifreni broj.
// Izlaz: Zbir cifara četvorocifrenog broja.
// Primer
// Ulaz 1234
// Izlaz 10
const sumaCifara = (broj) => {
    if (isNaN(broj) || broj < 1000 || broj > 9999) {
      return "Argument nije korektan.";
    } else {
      const cifraJedinice = broj % 10;
      const cifraDesetice = Math.trunc((broj % 100) / 10);
      const cifraStotine = Math.trunc((broj % 1000) / 100);
      const cifraHiljade = Math.trunc(broj / 1000);
      return cifraJedinice + cifraDesetice + cifraStotine + cifraHiljade;
    }
  };
  console.log(sumaCifara("1231sdf"));
  console.log(sumaCifara(100));
  console.log(sumaCifara(4932));
  1234;