function sortear () {

    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    let res = document.getElementById('resultado');
    res.innerHTML += `<p>Eu pensei nesse numero <mark>${num}</mark>!</p>`

}
function limpar () {
    let res = document.getElementById('resultado');
    res.innerHTML = `<p>Aqui vai aparecer abaixo...</p>`
}