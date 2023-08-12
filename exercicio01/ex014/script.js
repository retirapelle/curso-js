function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${min}:${sec}.`
    if (hora >=0 && hora < 5) {
        img.src = 'madrugada.jpg'
        document.body.style.background = '#060B1B'
    }
     else if (hora >= 5 && hora < 12 ) {
        img.src = 'manhã.png'
        document.body.style.background = '#EACEB6'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#F4A754'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#20240B'
    }
}