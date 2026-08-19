// Esempio 1
let user = {
  nome: "mario",
  cognome: "rossi",
  eta: 29,
  operazione: function () {
    console.log(this.nome + " " + this.cognome);
  },
};

user.operazione();

// Esempio 2
// calcolatrice con funzioni
let addizione = function (par1, par2) {
  let risultato = par1 + par2;
  return risultato;
};

function sottrazione(par1, par2) {
  let risultato = par1 - par2;
  return risultato;
}

function moltiplicazione(par1, par2) {
  let risultato = par1 * par2;
  return risultato;
}

function divisione(par1, par2) {
  let risultato = par1 / par2;
  return risultato;
}

function calcolatrice(add, sottr, mol, div, numero1, numero2, operazione) {
  let risultato;
  if (operazione === "addizione") {
    risultato = add(numero1, numero2);
  } else if (operazione === "sottrazione") {
    risultato = sottr(numero1, numero2);
  } else if (operazione === "moltiplicazione") {
    risultato = mol(numero1, numero2);
  } else if (operazione === "divisione") {
    risultato = div(numero1, numero2);
  } else {
  }
  return risultato;
}

calcolatrice(
  function (par1, par2) {
    let risultato = par1 + par2;
    return risultato;
  },
  sottrazione,
  moltiplicazione,
  divisione,
  5,
  2,
  "moltiplicazione"
);

// Esempio 3
// Copia o destrutturazione degli oggetti
let persona = {
  nome: "mario",
  cognome: "rossi",
};

let persona2 = persona;
persona2.nome = "luigi";

console.log(persona.nome);
console.log(persona2.nome);

let nazionalita = {
  nazione: "italia",
  sigla: "IT",
};

let persona3 = Object.assign({}, persona, { nome: "mario", eta: 29 });
persona3.nome = "chicco";
console.log(persona.nome);
console.log(persona3.nome);

let persona4 = { ...persona, eta: 29, ...nazionalita };
console.log(persona4);

persona4.nome = "giovanni";
console.log(persona.nome);
console.log(persona4.nome);
