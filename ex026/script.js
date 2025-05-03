function contar () {
    let n = 0;
    let n1 = Number(document.getElementById('numero').value);
    let res = document.getElementById('resultado');

    res.innerHTML += `<h3>Contando até ${n1}</h3>`

    while (n <= n1) {
        res.innerHTML += `${n}, `
        n ++;
    }
}