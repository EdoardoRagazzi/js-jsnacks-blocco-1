//-------JSnack1---------

//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// Se uguale lunghezza dire sono uguali e stamparle entrambe.

/*var wordFirst = prompt();
var wordSecond = prompt();

var longFirst = wordFirst.length;
var longSecond = wordSecond.length;

if (longFirst === longSecond) {
    document.getElementById('lista').innerHTML = 'Sono uguali' + ' ' + wordFirst + ' ' + wordSecond;
} else if (longFirst < longSecond) {
    document.getElementById('lista').innerHTML = wordFirst + ' ' + wordSecond;
} else {
    document.getElementById('lista').innerHTML = wordSecond + ' ' + wordFirst;
}


//--------JSnack2-------
//25 minuti
//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
// Variante: stampare solo i numeri pari


//-----CICLO FOR----


var N = 5; // valori da sommare
var count = 1;   // conta i valori letti
var somma = 0;   // somma dei valori letti
var num;         // ultimo valore letto

for (count = 1; count <= N; count++) {
    num = parseInt(prompt("inserite"));
    somma = (somma + num);
}
document.getElementById('lista').innerHTML += somma;


//------CICLO WHILE-------
var somma = 0;
var i = 0;

while (i < 5) {
    num = parseInt(prompt("inserite"));
    somma += num;
    i++;
}
document.getElementById('lista').innerHTML += somma;

//------BONUS-----
for (var i = 0; i < 5; i++) {
    num = parseInt(prompt("inserite"));
    if (num % 2 == 0) {
        document.getElementById('lista').innerHTML += num;
    }
}


//-----JSnack3------
// 20 minuti
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var array = [];
var numero;
console.log(numero);

for (var i = 0; i < 6; i++) {
    numero = parseInt(prompt("inserisci il numero:"));
    if (numero % 2 != 0) {
        array.push(numero);
        console.log(numero);
        document.getElementById('lista').innerHTML += numero;
    }
}
*/
//-------JSnack4-------
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var invitati = ['Teodoro', 'Cassiano', 'Vecchialenza', 'HarryPotter'];

var nomeUtente = prompt();

for (i = 0; i < invitati.length; i++) {

    if (nomeUtente == invitati[i]) {
        console.log('puoi');
        document.getElementById('lista').innerHTML += 'Puoi partecipare alla festa' + ' ' + nomeUtente;
    } else {
        console.log('non puoi');

    }
}




















