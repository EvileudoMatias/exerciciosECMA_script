function contar() {
    let numero = 10;
    let res = document.getElementById('resultado');

    res.innerHTML += `<h3>Contagem de 10 para 1</h3>`

    while (numero >= 1) {
        res.innerHTML += `${numero}, `
        numero--
    }
}