function contar() {
    let num = 1;
    let res = document.getElementById('resultado');

    res.innerHTML += `<h3>Contando de 1 ate 10 marcando os pares</h3>`

    while (num <= 10) {
        res.innerHTML += `${num}, `
        num++
    }
}