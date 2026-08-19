
//creazione di elementi
let contenitore = document.createElement('div')
contenitore.classList.add('contenitore')
let paginatore1 = document.createElement('button')
let paginatore2 = document.createElement('button')


//funzione generica per creare una card, si usa dentro del fetch
let creaOggetto = (utente) => {
     
    let card = document.createElement('div')
    let nome = document.createElement('p')
    let email = document.createElement('p')
    let immag = document.createElement('img')
    let contact = document.createElement('a')
    let contenitContact = document.createElement('p')
    contenitContact.append(contact)

    nome.innerText = utente.first_name + " " + utente.last_name
    email.innerText = utente.email
    immag.src = utente.avatar
    contact.href = "mailto:" + utente.email
    contact.innerText= 'Contact'
    
    card.classList.add('card')
    immag.classList.add('immag')
    nome.classList.add('nome')
    email.classList.add('mail')
    contact.classList.add('contact')
    paginatore1.classList.add('paginatore')
    paginatore2.classList.add('paginatore')

    card.append(immag, nome , email, contenitContact)

    //gestiona quando card è selezionata
    let status = false;
    card.addEventListener('click', function(event) {
        if (status == false) {
            card.classList.add('selected')
            status = true
        } else {
            card.classList.remove('selected')
            status = false    
        }    
    })
    
    
    
    return card
}

//connessione al sito e gestione dati
fetch('https://reqres.in/api/users')
    .then((r) =>{
        //console.log(r)

        if(r.status === 200) {
            console.log('success')
        } else {
            console.log('error')
        }
        return r.json()
    })
    .then((data) => {
        console.log(data)
        
        //generazioni di utenti
        for(let i=0; i<data.data.length; i++) {
            let utenteA = creaOggetto(data.data[i]);
            contenitore.append(utenteA)
        }
        
        //generazioni di bottoni per paginazione
        let corpo = document.getElementById('corpo')
        paginatore1.innerText = "Pagina precedenti"
        paginatore2.innerText = "Pagina successiva"
        
        //aggiunta al DOM
        corpo.append(contenitore, paginatore1, paginatore2)

        //logica per paginazione successiva
            let nextPage = data.page + 1
            let urlNext = 'https://reqres.in/api/users?page=' + nextPage
        
            paginatore2.addEventListener('click', function(event){
                contenitore.innerHTML = ''
                fetch(urlNext)
                .then((r) =>{
                    console.log(r)
        
                    if(r.status === 200) {
                        console.log('success')
                    } else {
                        console.log('error')
                    }
                    return r.json()
                })
                .then((data) => {
                    console.log(data)
                
                    //generazioni di utenti
                    for(let i=0; i<data.data.length; i++) {
                        let utenteA = creaOggetto(data.data[i]);
                        contenitore.append(utenteA)
                    }
                
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    console.log("end")
    
            })
        })
        
            //logica per paginazione precedente
            let prevPage = data.page - 1
            let urlPrev = 'https://reqres.in/api/users?page=' + prevPage
            
            paginatore1.addEventListener('click', function(event){
                contenitore.innerHTML = ''
                fetch(urlPrev)
                .then((r) =>{
                    console.log(r)
            
                    if(r.status === 200) {
                        console.log('success')
                    } else {
                        console.log('error')
                    }
                    return r.json()
                })
                .then((data) => {
                    console.log(data)
                    
                    //generazioni di utenti
                    for(let i=0; i<data.data.length; i++) {
                        let utenteA = creaOggetto(data.data[i]);
                        contenitore.append(utenteA)
                    }
                    
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    console.log("end")
        
            })
        })
        
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("end")
    })

    
    
    