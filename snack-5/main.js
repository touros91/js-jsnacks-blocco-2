// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


// 1. creo due array con un numero di elementi diversi
var lista1 = [1, 5, 7, 3];

var lista2 = [9, 1, 4, 55, 6, 15, 23, 17, 99, 87];

// 2. aggiungo elementi casuali all'array più corto fino a quando ha lo stesso numero di elementi di quello più lungo

    while (lista1.length < lista2.length) {
        var elementoCasuale = Math.floor(Math.random() * 100) + 1;
        lista1.push(elementoCasuale);
    }

console.log(lista1);
console.log(lista2);