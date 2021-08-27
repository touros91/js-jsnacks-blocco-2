// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari


// 1. creo un array con numeri interi
var interi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// dichiaro una varibile somma con valore di partenza zero
var somma = 0;

// attraverso tutto l'array con il ciclo for e con la condizione if se l'indice i è dispari sommo il valore dell'elemento corrispondente e lo aggiungo alla variabile somma

for (var i = 0; i < interi.length; i++) {
    if (i % 2 == 1) {
        somma = somma + interi[i];
    }
}

//stampo il risultato della somma degli elementi con indice dispari
console.log(somma);
   