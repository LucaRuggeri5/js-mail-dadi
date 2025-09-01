// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


const uomo = Math.floor(Math.random() * 6) + 1;
const macchina = Math.floor(Math.random() * 6) + 1;

console.log("punteggio omo: ", uomo, "punteggio maghina:", macchina);

if (uomo > macchina) {
console.log("Vince l'omo");
} else if (uomo < macchina) {
console.log("Vince la macchina");
} else {
console.log("Pareggio");
}