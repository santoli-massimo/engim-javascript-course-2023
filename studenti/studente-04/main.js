console.log("ENGIM FINAL TEST 2023");

// OBBIETTIVO DEL TEST:
// Creare un layout simile a quelo indicato nell immagine layout.png utilizzando i dati forniti dall api 'https://reqres.in/api/users'

// PARTE A1 (obbligatoria) (50 punti)
// Effetture una richiesta http all api 'https://reqres.in/api/users'
// stampare i dati degli utenti ricevuti dal server in console

// PARTE A2 (obbligatoria) (20 punti)
// Utilizzando i dati ricevuti dal server nel punto precedente:
// Per ogni utente ricevuto dal server, creare una card contenente un elemento per ogni proprietà dell'utente:
// first_name, last_name, email, id, avatar

// PARTE B (Facoltativa) (10 punti)
// In ogni card creare un elemento cliccabile con un mailto che apra il mailer di default con l'email dell'utente preimpostata
// ES: <a href="mailto:useremail@gmail.com">Contact</a>

// PARTE C (Facoltativa) (20 punti)
// Ripodurre il layout presente nell immagine layout.png presente in questa directory
// La scritta contact presente in ogni card deve essere cliccabile e eseguire il mailto con l email dell utente

// Parte D (Facoltativa) (20 punti)
// Creare una paginazione che permetta di visualizzare gli utenti successivi/precedenti utilizzando 2 bottoni

// NOTE:
// IL massimo punteggio raggiungibile è: 100 punti.
// Le parti A1 e A2 sono obbligatorie, le altre sono facoltative e possono essere svolte indipendentemente tra loro.
// Se non riesci a completare una parte facoltativa, puoi comunque provare a completare le altre.
// Puoi ottenere punti anche se non completi al 100% una parte per cui consiglio di provare comunque.

fetch('https://reqres.in/api/users?page=1')
    .then((response) => {
        console.log('then 1: ', response)
        if (response.status === 200) {
            console.log('success')
            return response.json()
        } else {
            console.log('error')
        }
    })
    .then((data) => {
        let container = document.getElementById('container')

        for (let index = 0; index < data.data.length; index++) {

            let box = document.createElement('div')
            box.id = 'box'
            container.append(box)

            let header = document.createElement('div')
            header.id = 'header'
            header.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"/>
                    </svg>
                `
            box.append(header)
            let dati = document.createElement('div')
            dati.id = 'dati'

            box.append(dati)
            let nome = document.createElement('h3')
            nome.innerText = data.data[index].first_name
            dati.append(nome)

            let mail = document.createElement('p')
            mail.innerText = data.data[index].email
            dati.append(mail)
            header.append(dati)

            let img = document.createElement('img')
            img.src = data.data[index].avatar
            box.append(img)

            let contact = document.createElement('a')
            contact.innerText = 'Contact'
            contact.href = 'mailto:' + data.data[index].email
            box.append(contact)
        }

        let pulsante = getElementById('pulsante')
        pulsante.addEventListener('click', function (event) {
            container.style.backgroundColor='blue'
        })

        console.log('then 2: ', data.data)
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('END');
    })









