function maior () {
    let n1 = Number(window.prompt('Digite um numero:'));
    let n2 = Number(window.prompt('Digite outro numero:'));

    let res = document.querySelector('section#resultado');

    if (n1 > n2) {
        res.innerHTML = `<p>Entre os números digitados <mark>${n1}</mark> e <mark>${n2}</mark>, o maior é <mark>${n1}</mark></p>`
    }
    else {
        res.innerHTML = `<p>Entre os números digitados <mark>${n1}</mark> e <mark>${n2}</mark>, o maior é <mark>${n2}</mark></p>`
    }
}