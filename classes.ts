type Produto = {
    nome: string,
    valor: number
}

class Estabelecimento {
    public filaDeEspera: number;
    constructor(
        public endereco: string, 
        public setor: string, 
        private produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? 10
    }

    retornaNomesDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    }

    diminuirFilaDeEspera() {
        if (this.filaDeEspera === 0) {
            return;
        }
        this.filaDeEspera--;
    }
}

const padaria = {
    endereco: 'Rua dos Laranjais, 1320 - bloco D',
    setor: 'alimentação',
    produtos: [
        {nome: 'pão', valor: 1.25},
        {nome: 'rosca', valor: 16.5}, 
        {nome: 'leite', valor: 4.99}, 
        {nome:'brigadeiro', valor: 2.5},
        {nome: 'café-da-manhã', valor: -15}
    ],
    retornaNomesDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    }
}

const padaria2 = new Estabelecimento('Rua dos Abacates, 1120 - bloco A', 'alimentação', [
    {nome: 'pão', valor: 1.15},
    {nome: 'rosca', valor: 12.9}, 
    {nome: 'leite', valor: 4.69}, 
    {nome:'brigadeiro', valor: 2.25},
    {nome: 'café-da-manhã', valor: 19.9}
], 3);

const padaria3 = new Estabelecimento('Rua dos Ipês, 920 - bloco B', 'alimentação', [
    {nome: 'pão', valor: 1.5},
    {nome: 'rosca', valor: 9.9}, 
    {nome: 'leite', valor: 5.29}, 
    {nome:'brigadeiro', valor: 2},
    {nome: 'café-da-manhã', valor: 25}
], 27);

console.log(padaria);
console.log(padaria.retornaNomesDosProdutos());
console.log(padaria2);
console.log(padaria2.retornaNomesDosProdutos());
padaria2.diminuirFilaDeEspera();
padaria2.diminuirFilaDeEspera();
padaria2.diminuirFilaDeEspera();
padaria2.diminuirFilaDeEspera();
console.log(padaria3.filaDeEspera);
console.log(padaria2.endereco);
console.log(padaria2.filaDeEspera);