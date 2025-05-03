let res = document.querySelector('section#resultado');

function bgRed () {
    document.body.style.backgroundColor = 'red';
    res.innerHTML = `<p>Voce mudou o background para vermelho!</p>`
}
function bgWhite () {
    document.body.style.backgroundColor = 'white';
    res.innerHTML = `<p>Voce mudou o background para branco!</p>`
}
function bgGrey () {
    document.body.style.backgroundColor = 'grey';
    res.innerHTML = `<p>Voce mudou o background para cinza!</p>`
}
function bgYellow () {
    document.body.style.backgroundColor = 'yellow';
    res.innerHTML = `<p>Voce mudou o background para amarelo!</p>`
}