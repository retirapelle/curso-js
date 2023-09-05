function calcular(){
var num = parseInt(document.getElementById('numero').value)
var tab = document.getElementById('seltab')
if (num.value == 0){ 
    window.alert('Por favor, digite um número!')
}else{
    tab.innerHTML = ''
    for(let c = 1; c <=10; c++){
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        item.value = `${c}`
        tab.appendChild(item)
    }
}
}

/*let c = 1
    while (c <= 10){
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        tab.appendChild(item)
        c++
    }*/