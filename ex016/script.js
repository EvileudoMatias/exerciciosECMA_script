function calcularIdade () {
    let agora = new Date;
    let ano = agora.getFullYear();

    let nasc = Number(window.prompt('Digite o ano que voce nasceu:'));
    let resultado = ano - nasc;
    
    let idade = document.querySelector('section#saida');

    idade.innerHTML = `<p>Voce que nasceu em <strong>${nasc}</strong> completará <strong>${resultado}</strong> anos de idade esse ano.</p>`
}