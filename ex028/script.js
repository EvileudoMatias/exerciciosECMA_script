const lista = [
    {
        nome: 'Evileudo Matias',
        idade: 40,
        genero: 'Masculino'
    },
    {
        nome: 'Eliane Sousa',
        idade: 39,
        genero: 'Feminino'
    },
    {
        nome: 'Vanessa França',
        idade: 36,
        genero: 'Feminino'
    },
]

let res = document.querySelector('section#saida');

for (let nomes of lista) {
   res.innerHTML += `<p>${nomes.nome}</p>`;
   res.innerHTML += `<p>${nomes.idade}</p>`;
   res.innerHTML += `<p>${nomes.genero}</p>`;
}