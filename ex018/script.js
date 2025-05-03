let res = document.querySelector('section#resultado');
let computator = 0;
let jogador = 0;

function gerar() {
    let min = 1;
    let max = 50;
    let dif = max - min;
    let aleatorio = Math.random();
    computador = min + Math.trunc(dif * aleatorio);
}
function jogar () {
    jogador = Number(window.prompt('Digite um numero'));

    if (jogador > computador) {
        res.innerHTML += `<p>Voce falou <mark>${jogador}</mark>, meu número é <strong>MENOR</strong></p>`
    }
    else if (jogador < computador) {
        res.innerHTML += `<p>Voce falou <mark>${jogador}</mark>, meu número é <strong>MAIOR</strong></p>`
    }
    else if (jogador == computador){
        res.innerHTML = `<p>Parabens! Voce acertou. Eu tinha sorteado <mark>${computador}</mark></p>`
    }
}