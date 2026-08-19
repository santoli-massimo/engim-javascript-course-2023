console.log('Lezione 9')

// ESERCIZIO
// Loggare in console tutti gli elementi di un array
// 1 elemento per riga
// se order è minore di 0 loggare gli elementi in ordine inverso
// rendere il valore predefinito di order uguale a 0

// ESEMPIO 1
// logList([1,2,3])
//  1
//  2
//  3

// ESEMPIO 2
// logList([1,2,3], -1)
//  3
//  2
//  1

// ESEMPIO 3
// logList() non logga niente

function logList(list, order){
    for(let i=0; i<list.length; i++){
        console.log(list[i])
    }
}


// Creare un paragrafo con il testo 'Ciao Engim' ed inserirlo nel div con id uguale a 'hero'
let container = document.getElementById('hero')
let par = document.createElement('p')
par.innerText = '4 Ciao Engim'
par.style.color = 'blue'
if(container){ container.prepend(par) }

// ESMPIO Clone
let head = document.getElementById('header')
let parClone = par.cloneNode(true)
parClone.innerText = 'dopo'
head.append(parClone)

// ESEMPIO prepend
let parClone2 = par.cloneNode(true)
parClone2.innerText = 'prima'
head.prepend(parClone2)

// ESERCIZIO
// AL click sul bottone con id 'toggle' mostrare il div con id 'content'
let tg = document.getElementById('toggle')
let content = document.getElementById('content')

tg.addEventListener('click', function(){
    content.style.display = 'block'
})

// ESERCIZIO
// continuazione dell'esercizio precedente.
// al click sul bottone:
// se div con id 'content'è nascosto mostrarlo
// se è visibile naconderlo
