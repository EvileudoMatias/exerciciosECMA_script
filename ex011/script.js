function media () {
    let name = window.prompt('Digite o nome do aluno');
    let n1 = Number(window.prompt('Digite a primeira nota'));
    let n2 = Number(window.prompt('Digite a segunda nota'));
    let med = (n1 + n2) / 2;

    let res = document.querySelector('section#resultado');
    res.innerHTML = `<p>Calculando o resultado do aluno(a): <mark>${name}</mark></p>`
    res.innerHTML += `<p>As notas do aluno(a) foram: <mark>${n1}</mark> e <mark>${n2}</mark></p>`
    res.innerHTML += `<p>A sua média foi de: <mark>${med}</mark></p>` 

    if (med >= 7) {
        res.innerHTML += `<p>O aluno está de parabéns!</p>` 
    } 
    else if (med >= 5) {
        res.innerHTML += `<p>Cuidado, recuperação!</p>`
    }
    else {
        res.innerHTML += `<p>Reprovado!! Estude mais.</p>`
    }
}