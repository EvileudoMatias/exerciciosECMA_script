function contar () {
    let n1 = Number(document.getElementById('numero1').value);
    let n2 = Number(document.getElementById('numero2').value);
    let cont 

    let res = document.getElementById('resultado');

    res.innerHTML += `<h3>Contando de <mark>${n1}</mark> a <mark>${n2}</mark></h3>`

    if (n1 < n2) {
        cont = n1
        while (cont <= n2) {
            res.innerHTML += `${cont}, `
            cont++;
        }
    }
    else if (n1 > n2) {
        cont = n1;
        while (cont >= n2) {
            res.innerHTML += `${cont}, `
            cont--;
        }
    }
    else {
        res.innerHTML += `Valor invalido, números iguais!`
    }
}