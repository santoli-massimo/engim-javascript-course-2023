fetch ('https://reqres.in/api/users')
.then(function(response){
    console.log("then 1:", response)
    if (response.status ===200){
        console.log('success')
        return response.json()
    }
    else{
        console.log('error')
    }

})
.then(function(data){
    console.log("then 2:", data)

    for(i = 0; i< data.data.length; i++){
        let card = document.createElement('div')
        card.classList="card"
        first_name = document.createElement('h1')
        first_name.innerText =data.data[i].first_name
        card.append(first_name)
        last_name = document.createElement('h2')
        last_name.innerText =data.data[i].last_name
        card.append(last_name)
        email = document.createElement('p')
        email.innerText = data.data[i].email
        card.append(email)
        id = document.createElement('h2')
        id.innerText = data.data[i].id
        card.append(id)
        foto = document.createElement('img')
        foto.style = "width:200px"
        foto.src = data.data[i].avatar
        card.append(foto)
        let container = document.getElementById('container')
        container.append(card)


    }

    
    
    })
    .catch(function (error){
        console.log({error});
})





//
let nome = 'pippo'

let container = document.querySelector('.container')
container.innerHTML = `
    <<div class="card">
    <div class="avatar">
      <img src="https://pyxis.nymag.com/v1/imgs/bb2/701/c4787eccc4a76307518ae0632fb9196faa-rick-and-morty.rsquare.w700.jpg" alt="">
    </div>
    <div class="info">
      <span class="name">Rick Sanchez</span>
      <span class="email">rick.sanchez@gmail.com</span>
      <div class="footer">
        <a class="contact" href="mailto:rick.sanchez@gmail.com">Contact</a>
      </div>
    </div>
  </div>
`

//