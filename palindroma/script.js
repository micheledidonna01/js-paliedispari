//chiedo all'utente di inserire una parola
let word = prompt('Inserisci una parola');
console.log('parola inserita: ', word);

isWordPalindroma(word);

//funzione "è una parola palindroma"
function isWordPalindroma(word1) {

    //dichiaro array vuoto
    let reverseWordArray = [];

    //trasformo la stringa in un array
    let arrayWord = word.split("");
    console.log(arrayWord);

    //ciclo fot
    for (let i = arrayWord.length - 1; i >= 0; i--) {

        //tolgo l'ultimo elemento dell'array
        let letters = arrayWord.pop();
        console.log(letters);

        //pusho l'ultimo elemento dell'array come ultimo elemento dell'array
        //cosi da avere un'array con gli elementi al contrario
        reverseWordArray.push(letters);
    }

    console.log(reverseWordArray);

    //dichiaro una stringa vuota
    let reverseWord = "";

    //ciclo for
    for(let i=0; i<reverseWordArray.length; i++){

        //inserisco gli elementi dell'array al contrario nella stringa inizialmente vuota
        reverseWord += reverseWordArray[i];
    }

    console.log(`La parola al contrario è: ${reverseWord}`);
    //let reverseWord = reverseWordArray.join("");
    console.log(reverseWord);

    //se la parola originale e quella al contrario sono uguali
    if (word === reverseWord) {

        //stampo un messaggio dove dico che la parola è palindroma
        alert(`${word} è una parola palindroma`);
        return true;
    //altrimenti
    } else {

        //stampo un messaggio dove dico che la parola non è palindroma
        alert(`${word} è una parola NON palindroma`);
        return false;
    }
}