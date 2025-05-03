function contar () {
    let numero = 1
    let res = document.getElementById('resultado');

    res.innerHTML += `<h3>Contando de 1 até 10</h3>`

    while (numero <= 10) {
        res.innerHTML += `${numero}&#x1F449;`
        numero++ 
    }
    res.innerHTML += ` &#x1F3C1;`
}