let container = document.querySelector('.container')

let img = document.createElement('img')
img.src = 'https://www.purinashop.it/media/mageplaza/blog/post/s/v/svezzamento_gattini_1.jpg'
// container.append(img)

// let html = '<div>'
// html += "<img src=\"https://www.purinashop.it/media/mageplaza/blog/post/s/v/svezzamento_gattini_1.jpg\" >"
// html += '<div>'

let imgUrl = 'https://www.purinashop.it/media/mageplaza/blog/post/s/v/svezzamento_gattini_1.jpg'

container.innerHTML = `
    <div>
      <img src="${ imgUrl }">
    </div>
`

// container.innerHTML = ''
