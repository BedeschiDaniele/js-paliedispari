//Scrivere una funzione per capire se la parola e' palindroma
var bool;


var element = document.getElementById("verifica");
element.addEventListener('click',
 function() {
   var paroladigitata = document.getElementById("testo").value;
   console.log(paroladigitata);
   bool=palindroma(paroladigitata);
   // console.log(bool);
   if (bool == true) {
     document.getElementById("risultato").value = "La parola e' palindroma";
   }else {
     document.getElementById("risultato").value = "La parola non e' palindroma";
   }
 }
);

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
