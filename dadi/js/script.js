/*NUMERO PIù ELEVATO TRA UTENTE E PC*/

//SCELTA RANDOM UTENTE NUMERO DA 1 A 6

const userNumber = Math.floor(Math.random()*6)+1;
console.log(userNumber);

//SCELTA RANDOM PC NUMERO DA 1 A 6

const computerNumber = Math.floor(Math.random()*6)+1;
console.log(computerNumber);

/*SE userNumber > computerNumber: YOU WIN
SE userNumber < computerNumber: YOU LOSE
SE userNumber = computerNumber: DRAW*/

let gameResult;

if(userNumber > computerNumber){
    gameResult = ' YOU WIN';
} else if(userNumber < computerNumber) {
    gameResult = ' YOU LOSE';
} else if(userNumber === computerNumber) {
    gameResult = 'DRAW';
}
 
//RISULTATO STAMPATO

alert(gameResult);