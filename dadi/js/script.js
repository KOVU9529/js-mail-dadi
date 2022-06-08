/*NUMERO PIù ELEVATO TRA UTENTE E PC*/

//SCELTA UTENTE NUMERO DA 1 A 6

const userNumber = parseInt(prompt('Dammi un numero da 1 a 6'));
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