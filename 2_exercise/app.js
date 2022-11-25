// Napravti arrow funkciju koja na osnovu unete vrednosti vraća jedno od četiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "UNET JE POZITIVAN RBOJ"
// Ako je unet negativan broj, ispisuje poruku "UNET JE NEGATIVAN RBOJ"
// Ako je unetA 0 , ispisuje poruku "UNETA JE 0"
// Ako nije unet pozitivan broj, ispisuje poruku "UNETA VREDNOST NIJE RBOJ"

const unos = () => {
    const broj = Number(prompt("Unesite neki broj"))
    if (isNaN(broj)) {
        return "Uneta vrednost nije broj."
    } else if (broj === 0){
        return "Uneta je 0" 
    } else if (broj > 0){
        return "uNET JE POZITIVAN BROJ."
    } else{
        return "Unet je negativan"
    }
};
console.log(unos());

// first attempt
const unos1 = () => {
    const broj = Number(prompt("Unesite neki broj"))
    if (isNaN(broj)){
        return "Uneta vrednost nije broj"
    } else if (broj === 0){
        return "Uneli ste 0."
    } else if (broj > 0){
        return "Unet je pozitivan broj"
    } else {
        return "Unet je negativan broj"
    }
} 
console.log(unos1())

// second attempt
const unos2 = () =>{
    const broj = Number(prompt("Write a number."))
    if (isNaN(broj)){
        return "It's not a number. "
    } else if (broj === 0){
        return "You've insterted a number 0"
    } else if (broj > 0){
        return "You've inserted a positive number."
    } else {
        return "You've inserted a negative number."
    }
    }
console.log(unos2())

//third attempt
const unos3 = () => {
    const broj = Number(prompt("Insert number"));
    if (isNaN(broj)){
        return "Insert a NUMBER!"
    } else if (broj === 0){
        return "Your number is 0.";
    } else if  (broj > 0){
        return "Your number is positive";
    } else {
        return "Your number is negative";
    }
} 
console.log(unos3());
    
//forth attempt
const unos4 = () => {
    const broj = Number(prompt("Unesi vrendost"));
    if (isNaN(broj)){
        return "Not a number. Try again."
    } else if (broj === 0){
        return "It's a 0."
    } else if (broj > 0){
        return "Positive number"
    } else {
        return "Negative number"
    }
}
console.log(unos4());