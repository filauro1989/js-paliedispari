// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

let userChoice = prompt('pari o dispari?').toLowerCase();

    while (userChoice != 'pari' && userChoice != 'dispari') {
        userChoice = prompt('pari o dispari?').toLowerCase();
    }

let userNumber = parseInt(prompt('scegli un numero'));

    while (isNaN(userNumber) == true || userNumber >= 6) {
        userNumber = parseInt(prompt('scegli un numero'));
    }

let pcNumber = Math.floor(Math.random() * 5) + 1;
let sum = parseInt(userNumber + pcNumber);

console.log('scelta utente', userChoice);
console.log(userNumber);
console.log('pc number', pcNumber);
console.log('somma', sum);


let risultato = '';

if(sum % 2 == 0) {
    console.log('La somma è un numero Pari');
    risultato = 'pari';
} else {
    console.log('la somma è un numero Dispari');
    risultato = 'dispari';
}

if (risultato == userChoice) {
    console.log("l'utente ha vinto!");
} else {
    console.log("Il pc ha vinto!");
}

