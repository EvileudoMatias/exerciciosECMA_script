function contar() {
    let numero = 15;

    let res = document.getElementById('resultado');

    res.innerHTML += `<h3>Contagem regressiva de números impares</h3>` 

    while (numero >= 1) {
        res.innerHTML += `${numero}, `
        numero = numero - 2;
    }
}