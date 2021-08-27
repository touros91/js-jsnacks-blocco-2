// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// versione con il ciclo for

var somma = 0;

for (var i = 0; i < 5; i++) {
    var numeroUtente = parseInt(prompt("Inserisci un numero"));
    while (isNaN(numeroUtente)) {
        numeroUtente = parseInt(prompt("Devi inserire solo dei numeri!"));
    }
    somma += numeroUtente;
}

document.getElementById("somma").innerHTML += somma;


// versione con il ciclo while

// var i = 0;
// var somma = 0;

// while (i < 5) {
//     var numeroUtente = parseInt(prompt("Inserisci un numero"));
//     while (isNaN(numeroUtente)) {
//         numeroUtente = parseInt(prompt("Devi inserire solo dei numeri!"));
//     }
//     somma += numeroUtente;
//     i++;
// }

// document.getElementById("somma").innerHTML += somma;
