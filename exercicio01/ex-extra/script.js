function verificar(){    
    var msg = document.querySelector('p#resultado')
    var altura = (document.getElementById('altura').value)/100;
    var peso = document.getElementById('peso').value;
    var res = peso / (altura * altura);
    var total = res.toFixed(1);
    
    if (res < 18.5) {
        //abaixo do peso
    } else if (res >= 18.6 && res < 24.9) {
        //peso ideal
        //window.alert('Você está dentro do peso ideal')
    } else if (res < 29.9) {
        //levemnete acima do peso
        //window.alert('Você está levemente acima do peso')
    } else if (res < 34.9) {
        //obesidade grau 1
        //window.alert('Você está com obesidade de grau 1')
    } else if (res < 39.9) {
        //obesidade severa
       // window.alert('Você está com obesidade severa')
    } else {
        //obesidade mórbida
        //window.alert('Você está com obesidade mórbida')
    }
    msg.style.textAlign = 'center'
    msg.innerHTML = `Seu IMC é de ${total}`
}