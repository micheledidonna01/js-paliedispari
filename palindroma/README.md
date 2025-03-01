# Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

## Soluzione

- chiedo all'utente di inserire una parola
- funzione "è una parola palindroma"
    - dichiaro array vuoto
    - trasformo la stringa facendola diventare tutta con caratteri minuscoli
    - trasformo la stringa in un array
    - ciclo for
        - tolgo l'ultimo elemento dell'array
        - pusho l'ultimo elemento dell'array come ultimo elemento dell'array
        - cosi da avere un'array con gli elementi al contrario 
    - dichiaro una stringa vuota
    - ciclo for
        - inserisco gli elementi dell'array al contrario nella stringa inizialmente vuota
    - se la parola originale e quella al contrario sono uguali
        - stampo un messaggio dove dico che la parola è palindroma
    - altrimenti
        - stampo un messaggio dove dico che la parola non è palindroma

    
        
