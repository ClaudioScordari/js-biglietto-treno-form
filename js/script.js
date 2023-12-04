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

// età del passeggero
const eta_passeggero = prompt('età del passeggero:');

// km che vuole percorrere
const km_passeggero = prompt('quanti km vuoi viaggiare?');

// euro per km
const costo_1km = 0.21;

// prezzo del viaggio senza sconto
let prezzo_viaggio = km_passeggero * costo_1km;

// costo del biglietto per i minorenni
if (eta_passeggero < 18) {
    prezzo_viaggio = prezzo_viaggio - (prezzo_viaggio * 0.2);
}

// costo del biglietto per gli over 65
if (eta_passeggero >= 65) {
    prezzo_viaggio = prezzo_viaggio - (prezzo_viaggio * 0.4);
}

// prezzo finale - stampato in html
document.querySelector('.prezzo_biglietto').innerHTML = prezzo_viaggio.toFixed(2);