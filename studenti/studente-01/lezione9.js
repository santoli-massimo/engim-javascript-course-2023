console.log('lezione 9')

// essercizi

//loggare in console tutti gli elementi di un array
// 1 elemento per riga
//se order è minore di 0 loggare gli elementi in ordine inverso
// rendere il valore predefinoto di order uguale a 0


//ESEMPI0 1
//loglist([1,2,3])
//1
//2
//3

//ESEMPIO 2
//loglist8([1,2,3], -1)
//3
//2
//1


//ESEMPIO3
//loglist()

let a=[10,24,37,49,59,100];

function loglist(list, order){
    if(order>0){
        for(let i=0; i<list.length;i++){
            console.log(list[i])
        }
    }
    
    else{
        for(let i=list.length;i>0;i--){
        console.log(list[i])
    }
    }
}

loglist(a,0)




//creare un paragrafo con il testo 'Ciao Engim' ed inaserire nel div con il Id uguale a hero //

let paragrafo = document.createElement('p')
paragrafo.innerText = "Sono un nuovo paragrafo"
paragrafo.style.color = 'blue'
let container = document.getElementById('hero')
container.append(paragrafo)


//al clik sul bottone con id 'toggle' mostrare il div con id 'content'

let bottone = document.getElementById('tuggle')
let contenuto = document.getElementById('content')
bottone.addEventListener = ('click'), function(event) {
    if(contenuto.style= 'nome')
}
