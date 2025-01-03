const padaria = {
    endereco: 'Rua dos Laranjais, 1320 - bloco D',
    tipo: 'alimentação',
    produtos: [
        {nome: 'pão', valor: 1.25},
        {nome: 'rosca', valor: 16.5}, 
        {nome: 'leite', valor: 4.99}, 
        {nome:'brigadeiro', valor: 2.5},
        {nome: 'café-da-manhã', valor: -15}
    ],
    nomesDosProdutos: this.produtos.map(produto => produto.nome)
}

console.log(padaria);
console.log(padaria.nomesDosProdutos());