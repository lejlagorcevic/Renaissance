// function bliziSto(par1, par2) {
//  let i
//  if (par1>100) {
//     for (i = par1;i>=100;i--){
//         brojac++
//     }
        
//     }
    
//  }

// else for(i=par1;i<=100;i++)brojac++
// }
// console.log(bliziSto(-10, 40));
// console.log(bliziSto(101, 200));
// žž



// 33.
function firstTask(num1, num2){
    if(
        (num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100) &&
        (num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100)
    ) {
        return true;
    } else {
        return false;
    }
    
}
console.log(firstTask(45, 77));

// 34.
function secondTask(num1, num2) {
    if (num1 < 40 ||  num1 >60 || num2 < 40 || num2 >60){
        return "Niste poslali korektne brojeve."
    } else if (num1 === num2){
        return "Brojevi su jednaki"
    } else{
        const veciBroj = num1 > num2 ? num1 :num2;
        return "Veci je broj " + veciBroj;
    }
}
console.log(secondTask(4, 55));
console.log(secondTask(44, 55));

