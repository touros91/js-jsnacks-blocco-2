// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// versione con il for

// var somma = 0;

// for (var i = 0; i < 5; i++) {
//     var numeroUtente = parseInt(prompt("Inserisci un numero"));
//     if (!isNaN (numeroUtente)) {
//         somma += numeroUtente;
//     } else {
//         alert("Devi inserire solo dei numeri!");
//     }
// }

// document.getElementById("somma").innerHTML += somma;



// versione con il while

var i = 0;
var somma = 0;

while (i < 5) {
    var numeroUtente = parseInt(prompt("Inserisci un numero"));
    if (!isNaN (numeroUtente)) {
        somma += numeroUtente;
    } else {
        alert("Devi inserire solo dei numeri!");
    }
    i++;
}

document.getElementById("somma").innerHTML += somma;
