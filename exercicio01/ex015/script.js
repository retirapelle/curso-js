function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if (nasc.value.lenght == 0 || Number(nasc.value) > ano) {
        window.alert ('[ERROR] Verifique as informações e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src', 'crianças.jpg')
            }else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'jovem-h.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'crianças.jpg')
            }else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-f.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
        res.appendChild(img)
        res.appendChild(img).style.borderRadius = '10px'
        res.appendChild(img).style.boxShadow = '5px 5px 10px black'
    }
}