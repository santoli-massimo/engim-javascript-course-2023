
// function nomeCompleto(nome, cognome, title='Mr.', callback){
//     let risultato = title + ' ' +nome+ ' '+ cognome
//     if(callback!==undefined){
//         risultato = callback(risultato)
//     }
//     return risultato
// }
//
//
// function upperCase(text){ return text.toUpperCase() }
// function lowerCase(text){ return text.toLowerCase() }
// function toTitle(text){ return '<h1>' + text + '</h1>' }
//
// console.log( nomeCompleto('Massimo', 'Santoli') )
// console.log( nomeCompleto('Massimo', 'Santoli', undefined, upperCase) )
// console.log( nomeCompleto('Massimo', 'Santoli', 'Signor', lowerCase) )
// console.log( nomeCompleto('Massimo', 'Santoli', 'Signor', toTitle) )
// // con funzione anonima
// console.log( nomeCompleto('Massimo', 'Santoli', 'Signor', function(){return '<p>' + text + '</p>'}) )
//
//
// function logPippo(){ console.log('pippo') }
// setTimeout(logPippo, 3000)
//
// setTimeout(function(){
//     console.log('pippo')
//     console.log('pippo')
//     console.log('pippo')
//     console.log('pippo')
//     console.log('pippo')
// }, 3000)

let contenitore = document.getElementById('contenitore')
// console.log({contenitore: contenitore})

console.log(contenitore.style)
contenitore.style.backgroundColor = '#4e4e4e'

console.log(contenitore.style.backgroundColor)

let y = document.querySelector('#contenitore > div > :first-child')
console.log(y)

// ERSERCIZIO
// CREARE un immagine nella pagina
// usando un setInterval cambiare il contenuto dell immagine (src) ogni 3 secondi



// setInterval(function(){
//     let immagine = document.getElementById('immagine')
//     let a = 'https://www.focusjunior.it/content/uploads/2018/08/gattini-foto-19.jpg'
//     let b = 'https://cdn.gelestatic.it/deejay/sites/2/2022/09/gattini-internet-video-divertenti.jpg'
//     let current = immagine.src
//     if(current === a) immagine.src = b
//     else immagine.src = a
//     // immagine.src = 'https://cdn.gelestatic.it/deejay/sites/2/2022/09/gattini-internet-video-divertenti.jpg'
//
// } ,3000)


function carousel(immagini, id){
    let index = 1
    let immagine = document.getElementById(id)
    immagine.src = immagini[0]

    setInterval(function(){
        if(index >= immagini.length) index = 0
        immagine.src = immagini[index]
        index++
    }, 1000)
}

let immagini = [
    'https://www.focusjunior.it/content/uploads/2018/08/gattini-foto-19.jpg',
    'https://cdn.gelestatic.it/deejay/sites/2/2022/09/gattini-internet-video-divertenti.jpg',
    'https://www.focusjunior.it/content/uploads/2018/08/gattini-foto-21.jpg',
    'https://st.ilfattoquotidiano.it/wp-content/uploads/2015/05/Gattini-per-Salvini-su-Twitter-17-675x399.jpg'
];
carousel(immagini, 'immagine')

let immagini2 = [
    'https://st.ilfattoquotidiano.it/wp-content/uploads/2015/05/Gattini-per-Salvini-su-Twitter-17-675x399.jpg',
    'https://www.focusjunior.it/content/uploads/2018/08/gattini-foto-19.jpg',
    'https://www.focusjunior.it/content/uploads/2018/08/gattini-foto-21.jpg',
    'https://cdn.gelestatic.it/deejay/sites/2/2022/09/gattini-internet-video-divertenti.jpg',

];
carousel(immagini2, 'immagine2')











