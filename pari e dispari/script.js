//chiedo all'utente cosa sceglie fra pari o dispari
// e l'assegno ad una variabile

let evenOrOdd = prompt('Scegli tra pari e dispari');
console.log(evenOrOdd);
let userNum = parseInt(prompt('Inserisci un numero da 1 e 5'));
console.log('Numero utente', userNum);

let controlEvenOrOdd = (evenOrOdd !== 'pari' && evenOrOdd !== 'dispari');
let controlUserNum = (userNum < 1 || userNum > 5);

//se il valore della variabile è diverso di pari o dispari e il numero non è compreso tra 1 e 5
if (controlEvenOrOdd || controlUserNum || (isNaN(userNum))) {

    //se il valore della variabile è diverso di pari o dispari
    if (controlEvenOrOdd) {

        //stampo un messaggio di blocco dove dico di rinserire pari o dispari 
        alert(`${evenOrOdd} è diverso da pari/dispari. RIPROVA seguendo le istruzioni`);

        //altrimenti se il numero dell'utente non è compreso tra 1 e 5
    } else if (controlUserNum) {

        //stampo un messaggio di blocco dove dico di rinserire un numero tra 1 e 5 
        alert(`${userNum} non rientra tra i numeri che vanno da 1 a 5. RIPROVA seguendo le istruzioni`);

        //altrimenti se il numero dell'utente non è un numero
    } else if (isNaN(userNum)) {

        //stampo un messaggio di blocco dove dico di rinserire un numero valido
        alert(`${userNum} non è un numero. RIPROVA seguendo le istruzioni`);
    }

//altrimenti
} else {

    //genero un numero da 1 a 5 per il computer
    let numRandom = Math.floor(Math.random() * 5) + 1;
    console.log('Numero random pc:', numRandom);
    
    let controlUserNum = (numRandom < 1 || numRandom > 5);

    //se il numero generato è minore di 1 o maggiore di 5
    if (controlUserNum) {

        //stampo un messaggio di blocco dove dico che il numero non è compreso tra 1 e 5
        alert(`${numRandom} non è compreso tra 1 e 5. RIPROVA`);

    //altrimenti
    } else {

        //sommo il numero generato al numero chiesto all'utente
        let somma = numRandom + userNum;
        console.log('La somma è: ', somma);

        //se il numero è dispari
        if(isNumberOdd(somma)){

            //se l'utente aveva scelto dispari
            if (evenOrOdd === 'dispari') {

                //stampo un messaggio dove l'utente ha vinto
                alert(`l'utente ha vinto`);

            //altrimenti
            } else if (evenOrOdd === 'pari'){

                //stampo un messaggio dove l'utente ha vinto
                alert(`il pc ha vinto`);
            }

        //se il numero è pari
        }else{ 
            
            //se l'utente aveva scelto pari
            if (evenOrOdd === 'pari') {

                //stampo un messaggio dove l'utente ha vinto
                alert(`l'utente ha vinto`);

            //altrimenti
            } else if (evenOrOdd === 'dispari') {

                //stampo un messaggio dove il pc ha vinto
                alert(`il pc ha vinto`);
            }
        }


    }
}





function isNumberOdd(num1) {
    //se il resto della somma diviso 2 è uguale a 0
    if (num1 % 2 === 0) {
        return false;
        
    //altrimenti
    } else {
        return true;
    }

}

