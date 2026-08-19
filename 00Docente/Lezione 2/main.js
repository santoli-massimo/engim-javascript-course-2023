console.log('lezione 1')

// RIPASSO VARIABILI
console.log('-----------VARIABILI------------')
// Dichiarazione ed assegnazione in 2 step
let nomeVariabile, secondaVariabile
nomeVariabile = 'boh'
secondaVariabile = 'meh'

// Dichiarazione + assegnazione
let terzaVariabile = '?????'
const costante = 'pi'
// const costante  (ERRORE!!!!!!)

// RIPASSO ARRAY
console.log('-----------ARRAY------------')
let lettere = ['a', 'b', 'c']

let x = lettere[1] + lettere[0]
console.log(x)

lettere[1] = 'zzzzz'
console.log(lettere[1])
console.log(x)

// RIPASSO OGGETTI
console.log('-----------OGGETTI: Sintassi standard------------')
let persona = {
    nome: 'massimo',
    cognome: 'santoli',
    'user name': 'msantoli',
    "userName": 'massimos'
}

console.log(persona.nome)
let nomeCompleto = persona.nome + ' ' + persona.cognome
console.log(nomeCompleto)
persona.nome = 'bbbbbbbbb'
console.log(persona)

// Oggetti sintassi aternativa
console.log('-----------OGGETTI: Sintassi Alternativa------------')
let u = persona['user name']
console.log(u)


console.log('-----------OGGETTI: Sintassi alternativa con chiave dinamica------------')
let chiave = 'userName'
console.log(persona[chiave])

chiave = 'nome'
console.log(persona[chiave])
persona[chiave] = 'asdjkakj'

console.log(persona)

// Esempio di array di ogetti
let recensori = [
    {
        id: 5,
        nome: "Yotobi",
        voti: [
            { id: 15,  title: "Avengers Endgame",  voto: 8},
            { id: 20,  title: "Sharknado",  voto: 10},
            { id: 36,  title: "Joker",  voto: 8},
            { id: 49,  title: "In vacanza su marte",  voto: 4},
        ]
    },
    {
        id: 55,
        nome: "Synergo",
        voti: [
            { id: 15,  title: "Avengers Endgame",  voto: 3},
            { id: 20,  title: "Sharknado",  voto: 6},
            { id: 36,  title: "Joker",  voto: 7},
            { id: 49,  title: "In vacanza su marte",  voto: 1},
            { id: 65,  title: "1917",  voto: 9},
            { id: 10,  title: "L'esorciccio",  voto: 9},
        ]
    },
    {
        id: 90,
        nome: "BarbascuraX",
        voti: [
            { id: 20,  title: "Sharknado",  voto: 6},
            { id: 108, title: "Kung Fu Panda",  voto: 10},
        ]
    }
]

// Accesso
console.log('-----------ARRAY di Oggetti------------')
console.log(recensori)

console.log(recensori[1])
console.log( recensori[1].nome )
console.log( recensori[1].voti[1].title )

let k = recensori[1].voti[1].title
console.log(k)

// Modifica
recensori[1].voti[1].title = 'bambi'
console.log(k)
