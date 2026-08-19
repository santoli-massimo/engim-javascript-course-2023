
console.log('LEZIONE 5')



// let numero = 0
// while(numero < 10){
//     console.log('Iterazione')
//     console.log(numero)
//     numero = numero + 1
// }

// Stampare in console tutti gli elementi di un array utilizzando
// un ciclo while

let nomi = ['pippo', 'paperino', 'topolino', 'iron man', 'alladin', 'sdsdf']

// let min = 0
// let max = nomi.length - 1
//
// while(min <= max){
//     console.log(nomi[min])
//     min++
// }


// for(let i = 0; i < nomi.length; i++){
//     console.log(nomi[i])
// }

// Usando un ciclo for stampare in console solo gli elementi dell'array
// con indice pari
// for(let i = 0; i < nomi.length; i++){
//     if(i%2==0){
//         console.log(nomi[i])
//     }
// }

// for(let i = 0; i < nomi.length; i=i+2){
//     console.log(nomi[i])
// }


// for(let element of nomi){
//     console.log(element)
// }

// for(let index in nomi){
//     if(index%2===0) {
//         continue
//     }
//     console.log(nomi[index])
// }


// for(let index in nomi){
//     console.log(nomi[index])
//     if(index==2) {
//         break;
//     }
// }

// function stampaPippo(){
//     let nome = 'Massimo'
//     let cognome = 'Santoli'
//     let title = 'prof.'
//     let x = title+ '' +nome+ ' '+ cognome
//     return x
// }
//
//
// let risultato = stampaPippo()
//
// console.log(risultato)
//
// console.log( '---' + stampaPippo() + '---'  )


function nomeCompleto(nome, cognome, title='Mr.'){
    return title + ' ' +nome+ ' '+ cognome
}


let risultato = nomeCompleto('massimo', 'santoli')
console.log(risultato)
console.log(nomeCompleto('pippo', 'pluto'))
console.log(nomeCompleto('Sara', 'lapietra', 'Mrs.'))




