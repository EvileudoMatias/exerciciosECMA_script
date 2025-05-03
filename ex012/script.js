function tipo () {
    let numero = Number(window.prompt('Digite o numero:'));

    let res = document.querySelector('section#resultado');

    if (numero % 2 === 0) {
        res.innerHTML = `<p>O numero digitado <strong>${numero}</strong> é <strong>PAR</strong></p>`
    }
    else {
        res.innerHTML = `<p>O número digitado <strong>${numero}</strong> é <strong>IMPAR</strong></p>`
    }
}