// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.


var nomi = ["Andrea", "Claudio", "Chiara"];

var cognomi = ["Geraci", "Rossi", "Parisi"];

// versione col for

for (var i = 0; i < 3; i++) {
    var nomeCasuale = Math.floor(Math.random(i) * 3);
    var cognomeCasuale = Math.floor(Math.random(i) * 3);
    console.log(nomi[nomeCasuale] + " " + cognomi[cognomeCasuale]);
}


// versione col while 

var i = 0;

while (i <3) {
    var nomeCasuale = Math.floor(Math.random(i) * 3);
    var cognomeCasuale = Math.floor(Math.random(i) * 3);
    console.log(nomi[nomeCasuale] + " " + cognomi[cognomeCasuale]);
    i++;
}