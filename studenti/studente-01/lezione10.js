console.log('Lezione10')

//https:reqres.in/

fetch('https://reqres.in/api/user')
.then(function(Response){
    console.log('then 1;', Response)

    if (Response.ok){
        console.log('success')
        return Response.json
    }

    else{
        console.log('error')
    }
})

.then(function(data){
    console.log('then 2;', data)
})

.catch(function (error){
    console.log(error)
})

//utilizzare fetch per ottenere dati degli utenti da reqres.in
//per ongi utente creare una card con immagine, nome, email dell utente
//inserire la card creata nella pagina


fetch('https://reqres.in/api/users')
.then(function(Response){
    console.log('then 1;', Response)
    
    if (Response.status ===200){
        console.log('success')
        return Response.json
    }

    else{
        console.log('error')
    }
})

.then(function(data){
    console.log('then 2;',data)
    console.log(data,data)
    
})