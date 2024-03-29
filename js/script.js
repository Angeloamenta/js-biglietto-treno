// Descrizione
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// chiedere il numero di km che si vuole percorrere
let distanza = parseInt(prompt("Quanti KM si vuole percorrere?"));
console.log (distanza);
// chiedere età
let etaUser = parseInt(prompt("Quanti anni hai?"));
console.log (etaUser);
// calcolare prezzo base del biglietto
let prezzoBase = distanza * 0.21;
// console.log(prezzoBase);

// applicare sconto in base all'età
// minorenni sconto del 20%
// over 65 sconto del 40%

if (etaUser < 18) {

    let scontoVenti = ((prezzoBase / 100)  * 20);
    let totaleUnder = (prezzoBase - scontoVenti);
    let prezzoUnder = totaleUnder.toFixed(2);
    console.log(prezzoUnder);
    document.getElementById("biglietto").innerHTML = "€" + prezzoUnder;

} else if (etaUser > 65) {

    let scontoOver = ((prezzoBase / 100) * 40);
    let totaleOver = (prezzoBase - scontoOver);
    let prezzoOver =totaleOver.toFixed(2);
    console.log(prezzoOver);
    document.getElementById("biglietto").innerHTML = "€" + prezzoOver;

} else if (etaUser >= 18) {

    let somma = (prezzoBase);
    let sommaTot = somma.toFixed(2);
    console.log(sommaTot);
    document.getElementById("biglietto").innerHTML = "€" + sommaTot;
}