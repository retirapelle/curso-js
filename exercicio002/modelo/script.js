function gerar() {
    const num = document.getElementById('numero').value
    const mult = document.getElementById('multiplicador').value
    let res = document.querySelector('#res')
    let s = document.querySelector('input[name="sn"]:checked').value

     if (num === "" || mult === "") {
        window.alert ('Por favor, digite um número')
     } else {
        if (s === 'nao') {
        res.innerHTML =  `O resultado de ${num} x ${mult} é igual a ${num * mult}`
     } else if (s === 'sim') {
        let soma = 0
        for(let i = 0; i < mult; i++){
            soma += num;
        }
        res.innerHTML = `${num}x${mult} tem o mesmo valor que ${num}`
     }
    }
}