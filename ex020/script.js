function iniciar() {
    let mes = window.prompt('Digite um mes: (Exemplo: Janeiro)');
    let res = document.getElementById('resultado');
    let estacao

    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'Inverno'
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'Primavera'
            break;
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'Verão'
            break;
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'Outono'
            break;
        default:
            estacao = 'Inválida'
            break;
    }
    res.innerHTML = `<p>No mês de <mark>${mes}</mark> estamos no <mark>${estacao}</mark></p>`
}