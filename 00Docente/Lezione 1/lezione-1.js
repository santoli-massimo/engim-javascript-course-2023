console.log("Prima riga")

// ****************
// Variabili LET
// ****************
let mioNome = "Massimo"
console.log(mioNome)

mioNome = 100
console.log(mioNome)

let mioCognome = undefined
console.log(mioCognome)

mioCognome = null
console.log(mioCognome)


// ****************
// Variabili CONST
// ****************
const docente = 'Santoli'
console.log(docente)
// const yyyy  // ERRORE!
// let xxxx    // OK

let score = 120
score = score + 20
const finalScore = score


// ****************
// Typeof
// ****************
let nome = 'Massimo Santoli'
let anni = 20
let peso
let vivo = true

let tipo = typeof(nome)
console.log(tipo)

console.log(typeof(anni))

console.log(typeof(peso))

console.log(typeof(vivo))


// ****************
// Arrray
// ****************
let lista = ['massimo', 'giorgio', 'luca']
console.log(lista)

let x = lista[1]
console.log(x)

lista[3] = 'andrea'
console.log(lista)
