/*
    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.

    L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
    Questo richiederà un minimo di ricerca.
*/

// Prezzo totale del viaggio - ?

// dichiarazione del bottone in html
const myButton = document.querySelector('.my-button');

// assegniamo al bottone la mia funzione
myButton.addEventListener('click', function () {

    // nome e cognome dell'user
    const userName = document.querySelector('.name-lastname');

    // età del passeggero
    let userAge = document.querySelector('.age');
    userAgeValue = parseInt(userAge.value);

    // km che vuole percorrere
    let userKm = document.querySelector('.km');
    userKmValue = parseInt(userKm.value);

    // euro per km
    const costo_1km = 0.21;

    // prezzo del viaggio senza sconto
    let prezzo_viaggio = userKmValue * costo_1km;

    // costo del biglietto per i minorenni
    if (userAgeValue < 18) {
        prezzo_viaggio -= (prezzo_viaggio * 0.2);
    }

    // costo del biglietto per gli over 65
    if (userAgeValue >= 65) {
        prezzo_viaggio -= (prezzo_viaggio * 0.4);
    }

    document.querySelector('.final-price').innerHTML = prezzo_viaggio.toFixed(2);
});

// CONTINUAZIONE ESERCIZIO  

/*

    MILESTONE 1:
    Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà da scrivere in console.
    
    MILESTONE 2:
    Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
    Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
    Nota:
    Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra. 

*/