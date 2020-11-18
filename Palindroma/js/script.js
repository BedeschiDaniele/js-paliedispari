//Scrivere una funzione per capire se la parola e' palindroma
var paroladigitata = prompt("Inserire una parola: ");
var bool;
bool=palindroma(paroladigitata);
console.log(bool);

//------------------------------------------------------------------------------
function palindroma(parola) {
  confronto = parola;
  var n = parola.length;
  var booleaner;
  for (var i = 0; i < parola.length; i++) {
    n = n-1;
    if (confronto[n] == parola[i]) {
      booleaner = true;
    } else {
      return false;
    }
  }
  return booleaner;
}
