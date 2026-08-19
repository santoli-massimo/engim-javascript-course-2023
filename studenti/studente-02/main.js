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



let container = document.getElementById("cardCont");
let html=""

fetch('https://reqres.in/api/users')
    .then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            console.log('ERROR')
        }
    })
    .then((data) => {
        console.log(data)
        for (let i = 0; i < data.data.length; i++) {

            html += `
            <div class="card">
                <h3 class="card-title">${data.data[i].first_name}</h3>
                <p class="card-email">${data.data[i].email}</p>
                <img src="${data.data[i].avatar}" class="card-img" alt="image not found">
                <a href="mailto:${data.data[i].email}" class="card-link">Contact</a>
            </div>
            `
        }
        container.innerHTML=html
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(() => {
        console.log('END');
    })



