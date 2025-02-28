# Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.


## Soluzione

- chiedo all'utente cosa sceglie fra pari o dispari e l'assegno ad una variabile
- chiedo all'utente di inserire un numero tra 1 e 5
- se il valore della variabile è diverso di pari o dispari e il numero non è compreso tra 1 e 5
    - se il valore della variabile è diverso di pari o dispari
        - stampo un messaggio di blocco dove dico di rinserire pari o dispari 
    - altrimenti se il numero non è compreso tra 1 e 5
        - stampo un messaggio di blocco dove dico di rinserire pari o dispari 
- altrimenti
    - genero un numero da 1 a 5 per il computer
    - se il numero generato è minore di 1 o maggiore di 5
        - stampo un messaggio di blocco dove dico di rinserire un numero tra 1 e 5
    - altrimenti
        - sommo il numero generato al numero chiesto all'utente
        - se il resto della somma diviso 2 è uguale a 0
            - se l'utente aveva scelto pari
                - stampo un messaggio dove l'utente ha vinto
            - altrimenti
                - tampo un messaggio dove il pc ha vinto
        - altrimenti
            - se l'utente aveva scelto pari
                - stampo un messaggio dove il pc ha vinto
            - altrimenti
                - stampo un messaggio dove l'utente ha vinto
     