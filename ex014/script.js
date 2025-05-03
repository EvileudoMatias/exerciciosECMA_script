function info() {

    let agora = new Date;
    let saida = document.getElementById('saida');

    saida.innerHTML = `<p>As informações do sistema são: <mark>${agora}</mark></p>` 
}