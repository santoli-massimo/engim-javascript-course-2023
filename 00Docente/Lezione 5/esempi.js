//1. Scrivi un programma che controlli se un numero è pari o dispari.

let numero = 10;

if (numero % 2 === 0) {
  console.log("pari");
} else {
  console.log("dispari");
}

// 2. Scrivi un programma che controlli se un numero è divisibile per 3.
let numero3 = 9;

if (numero3 % 3 === 0) {
  console.log("Divisibile per 3");
} else {
  console.log("Non divisibile per 3");
}

// 3. Scrivi un programma che controlli se un numero è divisibile per 3 e per 5.
let numero35 = 15;
if (numero35 % 3 === 0 && numero35 % 5 === 0) {
  console.log("ok");
} else {
  console.log("no");
}

// 6. Scrivi un programma che trova il massimo tra 3 numeri.
let numerox = 16;
let numeroy = 15;
let numeroz = 14;
if (numerox > numeroy) {
  if (numerox > numeroz) {
    console.log("x è il maggiore");
  } else {
    console.log("numero z è il maggiore");
  }
} else if (numeroy > numeroz) {
  console.log("numeroy è il maggiore");
} else {
  console.log("numeroz è il maggiore");
}

if (numerox > numeroy && numerox > numeroz) {
  console.log("numero x è il maggiore");
} else if (numeroy > numeroz) {
  console.log("numery è il maggiore");
} else {
  console.log("numeroz è il maggiore");
}

// 8. Scrivi un programma che esegua operazioni matematiche tra 2 numeri
// in base all'operatore scelto dall'utente.

let operando1 = 20;
let operando2 = 15;
let operatore = "moltiplicazione";
let risultato;
// operazione 1
if (operatore === "addizione") {
  risultato = operando1 + operando2;
  console.log(
    "Il risultato dell'operazione \"" + operatore + '" è:',
    risultato
  );
}
// operazione 2
else if (operatore === "moltiplicazione") {
  risultato = operando1 * operando2;
  console.log(
    "Il risultato dell'operazione \"" + operatore + '" è:',
    risultato
  );
}
// operazione 3
else if (operatore === "divisione") {
  risultato = operando1 / operando2;
  console.log(
    "Il risultato dell'operazione \"" + operatore + '" è:',
    risultato
  );
}
// operazione 4
else if (operatore === "sottrazione") {
  risultato = operando1 - operando2;
  console.log(
    "Il risultato dell'operazione \"" + operatore + '" è:',
    risultato
  );
}
// nessuna operazione corretta
else {
  console.log('Operazione "' + operatore + '" errata');
}

/*******************************/
let nomi = [
  "studente1",
  "studente2",
  "studente3",
  "studente4",
  "studente5",
  "studente6",
  "studente7",
  "studente8",
  "studente9",
  "studente10",
];
let i = 0;
while (i < nomi.length) {
  console.log("indice i del ciclo:", i);
  console.log("l'alunno numero " + (i + 1) + " si chiama: " + nomi[i]);
  console.log("-----------------------------");
  i++;
}
i = 0;

while (nomi[i] !== "studente1") {
  console.log("il nome è:", nomi[i]);
  console.log("ciclo:", i);
  i++;
}

while (true) {
  if (nomi[i] === "studente8") break;
  console.log("il nome è:", nomi[i]);
  console.log("ciclo:", i);
  i++;
}
let max = 0;
let indice = 0;
i = 0;
let numeri = [23, 56, 3, 7, 1234, 59, 55, 8066, 333, 69, 865, 36385, 1, 875];
while (i < numeri.length) {
  if (max < numeri[i]) {
    max = numeri[i];
    indice = i;
  }
  i++;
}
console.log(
  "il massimo è: " + max + " e si trova nella posizione con indice: " + indice
);
