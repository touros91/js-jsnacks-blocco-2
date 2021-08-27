// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nomi = ["Andrea", "Claudio", "Chiara"];

var cognomi = ["Geraci", "Rossi", "Parisi"];

var invitati = [];

// versione col for

for (var i = 0; i < 3; i++) {
    var nomeCasuale = Math.floor(Math.random(i) * nomi.length);
    var cognomeCasuale = Math.floor(Math.random(i) * cognomi.length);
    var invitato = nomi[nomeCasuale] + " " + cognomi[cognomeCasuale];
    invitati.push(invitato);
}

console.log(invitati);