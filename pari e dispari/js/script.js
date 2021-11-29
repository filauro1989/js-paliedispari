// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function evenOrOdd(num) {
    if(num % 2 == 0){
        return "pari";
    } else {
        return "dispari";
    }
}

let userChoice = prompt('pari o dispari?').toLowerCase();

    while (userChoice != 'pari' && userChoice != 'dispari') {
        alert('scelta non accettata, riprova!');
        userChoice = prompt('pari o dispari?').toLowerCase();
    }

let userNumber = parseInt(prompt('scegli un numero compreso tra 1 e 5'));

    while (isNaN(userNumber) == true || userNumber >= 6) {
        alert('scelta non accettata, riprova!');
        userNumber = parseInt(prompt('scegli un numero'));
    }

let pcNumber = getRandomNumber(1, 5);
let sum = parseInt(userNumber + pcNumber);

console.log('scelta utente', userChoice);
console.log(userNumber);
console.log('pc number', pcNumber);
console.log('somma', sum);


let risultato = evenOrOdd(sum);

// if(sum % 2 == 0) {
//     console.log('La somma è un numero Pari');
//     risultato = 'pari';
// } else {
//     console.log('la somma è un numero Dispari');
//     risultato = 'dispari';
// }

if (risultato == userChoice) {
    console.log("l'utente ha vinto!");
} else {
    console.log("Il pc ha vinto!");
}


