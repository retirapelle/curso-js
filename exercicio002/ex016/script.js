function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pas = document.querySelector('#passo')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1!')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        }  else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
    }
}






/*function contar() {
var ini = parseInt(document.getElementById('inicio').value);
var fim = parseInt(document.getElementById('fim').value);
var pas = parseInt(document.getElementById('passo').value);

var res = document.getElementById('res')

if (pas <= 0){
    window.alert('O passo precisa ser maior do que 0. Considerando PASSO 1!')
    pas = 1
}

if (ini <= fim){
    for (var i = ini; i <= fim; i +=pas)
    res.innerHTML += `${i} `
} else {
    for (var i = ini; i >= fim; i -= pas)
    res.innerHTML += `${i} `
}

}*/