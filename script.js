// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// ‼️ Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: 
// Non è necessario provvedere alla validazione delle email


const email = [
  'pippo.baudo@gmail.com',
  'raffaella.carra@gmail.com',
  'elisabetta.regina2@gmail.com',
  'micheal.shumacher@gmail.com',
  'micheal.jackson@gmail.com'
]

const emailPersonale = prompt("Inserisci email");

let correct = false;

for (let i = 0; i < email.length; i++) {
  if (emailPersonale === email[i]) {
    correct = true;
  }
}

if (correct) {
  console.log("accesso riuscito")
}
else{
  console.log("accesso negato");
}