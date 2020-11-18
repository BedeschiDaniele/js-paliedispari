// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//do {
  var pariOdispari= prompt("Scegli Pari o Dispari: ");
//} while ((pariOdispari !="Pari") || (pariOdispari !="pari") || (pariOdispari !="Dispari") || (pariOdispari !="dispari"))

do {
  var numeroutente= parseInt(prompt("Scegli un numero tra 1 e 5: "));
} while (numeroutente < 1 || numeroutente > 5)

// Sommiamo i due numeri.
var numeropc=numerorandom();
var somma = numeroutente + numeropc;
// Dichiariamo chi ha vinto.
var risultato = paridisp(somma);
if (pariOdispari=="pari" || pariOdispari=="Pari" && risultato=="Pari") {
  console.log("Vince l utente");
} else if (pariOdispari=="dispari" || pariOdispari=="Dispari" && risultato=="dispari") {
  console.log("Vince l utente");
} else {
  console.log("Vince il pc");
}


//------------------------------------------------------------------------------
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numerorandom () {
  return Math.floor(Math.random() * 5) + 1;
}
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function paridisp (sommanumeri) {
  if (sommanumeri % 2 == 0) {
    var pari= "Pari";
    return pari;
  } else {
    var dispari= "Dispari";
    return dispari;
  }
}
