// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)

let userWord = prompt('Inserisci una parola').toLowerCase();
// let splitUserWord = userWord.split('');
// splitUserWord = splitUserWord.reverse();
// let palindrome = splitUserWord.join('');


let palindrome = palindromo(userWord);

if (userWord == palindrome) {
    alert('bravo!')
} else {
    alert('sbagliato!')
}

function palindromo(parola) {
    return parola.split('').reverse().join('');
}

console.log(userWord);
console.log(palindrome);