/*Mail*/

/*CHIEDIAMO LA SUA MAIL ALL'UTENTE
E VEDIAMO SE LA SUA MAIL è NELLA LISTA
SE è NELLA LISTA STAMPIAMO: LATUA MAIL è NELLA LISTA
ALTRIMENTI STAMPIAMO: LA TUA EMAIL NON è VALIDA*/

const email = ['giorgio@gmail.com', 'michele@gmail.com', 'alessandro@gmail.com', 'chiara@gmail.com', 'lorenzo@gmail.com'];
const userEmail = prompt('Dimmi la tua email')

/*SCORRO L'ARRAY CON IL CICLO FOR
UNA emailFound = FALSE IN CUI SALVO SE L'EMAIL FA PARTE DELLA LISTA
PER OGNI ELEMENTO :
CONTROLLO SE userEmail è NELL'ARRAY (CON UNA IF)
emailFounf = true*/

let emailFound = false;

for (let i=0; i <= email.length; i++) {
    const thisEmail= email[i];
    if (thisEmail === userEmail){
        emailFound= true;
    }
}

/*emailFound === true ALLORA DICO ALL'UTENTE CHE : LA TUA EMAIL è VALIDA
ALTRIMENTI :LA TUA EMAIL NON è VALIDA*/

if(emailFound) {
    alert('La tua email è valida');
} else {
    alert ('La tua email non è valida');
}
