function contar() {
var ini = parseInt(document.getElementById('inicio').value);
var fim = parseInt(document.getElementById('fim').value);
var pas = parseInt(document.getElementById('passo').value);

var res = document.getElementById('res')

if (pas <= 0){
    window.alert('O passo precisa ser maior do que 0')
    return;
}

if (ini <= fim){
    for (var i = ini; i <= fim; i +=pas)
    res.innerHTML += `${i} `
} else {
    for (var i = ini; i >= fim; i -= pas)
    res.innerHTML += `${i} `
}

}