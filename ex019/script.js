function calcular () {
    let n1 = Number(window.prompt('Digite um valor'));
    let n2 = Number(window.prompt('digite outro valor'));
    let res = document.getElementById('resultado');
    let escolha = Number(window.prompt(`Você escolheu ${n1} e ${n2} \nQual operação voce escolhe? \n[1] - Somar \n[2] - Subtrair \n[3] - Multiplicar \n[4] - Dividir`));

    switch (escolha) {
        case 1: 
        res.innerHTML = `<p>A soma entre <mark>${n1} e ${n2}</mark> é = <mark>${n1 + n2}</mark></p>`
            break;
        case 2:
        res.innerHTML = `<p>A subtração entre <mark>${n1} e ${n2}</mark> é = <mark>${n1 - n2}</mark></p>`
            break;
        case 3:
        res.innerHTML = `<p>A multiplicação entre <mark>${n1} e ${n2}</mark> é = <mark>${n1 * n2}</mark></p>`
            break;
        case 4:
        res.innerHTML = `<p>A divisão entre <mark>${n1} e ${n2}</mark> é = <mark>${n1 / n2}</mark></p>`
            break;
        default:
            res.innerHTML = `<p>Opção inválida!!</p>`
            break;
    }
}