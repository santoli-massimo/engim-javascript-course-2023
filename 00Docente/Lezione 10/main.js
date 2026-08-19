console.log('Lezione 10')

// https://reqres.in/

// fetch('https://reqres.in/api/users?page=2')
fetch('https://reqres.in/api/users')
    .then(function(response){
        console.log('then 1:', response)

        if(response.status === 200){
            console.log('success')
            return response.json()
        }
        else{
            console.log('Error')
        }
    })
    .then(function(data){
        console.log('Then 2 :', data)
    })
    .catch(function (error){
        console.log({error})
    })

// Utiltizzare fetch per ottenre dati degli utenti da reqres.in
// Per ongi utente creare una card con immagine, nome, email dell utente
// inserire le card create nella pagina


