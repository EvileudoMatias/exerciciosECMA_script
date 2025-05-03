function contarPares () {
    let numero = 2;
    let res = document.querySelector('section#resultado');

    res.innerHTML += `<h3>Contado só os pares ate 10</h3>`

    while (numero <= 10) {
        res.innerHTML += `${numero}, `
        numero += 2    
    }
}