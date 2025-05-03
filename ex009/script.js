let numero = 0;
let res = document.querySelector('section#resultado');

function contar () {
    numero ++
    res.innerHTML = `<p>O contador está em <mark>${numero}</mark> cliques</p>`
}
function voltar () {
    numero --
    res.innerHTML = `<p>O contador está em <mark>${numero}</mark> cliques</p>`
}
function zerar() {
    numero = 0;
    res.innerHTML = `<p>O contador está em <mark>${numero}</mark> cliques</p>`
}


