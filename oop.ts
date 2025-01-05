import { Produto } from "./classes";

interface EstabelecimentoInterface {
    endereco: string;
    setor: string;
    filaDeEspera: number;
    retornaNomesDosProdutos: () => string[];
    diminuirFilaDeEspera(): void;
}

interface FarmaciaInteface extends EstabelecimentoInterface {
    compraRemedioPrescrito: (
        receita: ReceitaInterface, 
        produtosAComprar: string[]
    ) => void;
}

interface ReceitaInterface {
    remedios: string[];
    identificacaoDoMedico: string;
}

interface Remedio extends Produto {
    receitaObrigatoria?: boolean;
}

class Estabelecimento implements EstabelecimentoInterface {
    protected _filaDeEspera = 10;
    constructor(
        public endereco: string, 
        public setor: string, 
        protected produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera;
    }

    retornaNomesDosProdutos(): string[] {
        return this.produtos.map(produto => produto.nome);
    }

    get filaDeEspera() {
        return this._filaDeEspera;
    }
   
    set filaDeEspera(fila : number) {
        if (fila <= 0) {
            return;
        }
        this._filaDeEspera = fila;
    }
    
    diminuirFilaDeEspera() {
        if (this._filaDeEspera === 0) {
            return;
        }
        this._filaDeEspera--;
    }
}

class Farmacia extends Estabelecimento implements FarmaciaInteface {
    constructor(
        public endereco: string, 
        public setor: string, 
        protected produtos: Remedio[],
        filaDeEspera?: number
    ) {
        super(endereco, setor, produtos, filaDeEspera);
    }

    public compraRemedioPrescrito(receita: ReceitaInterface, produtosAComprar: string[]): void {
        
        const remediosDisponiveis = this.produtos.filter(produto => produtosAComprar.includes(produto.nome));
        const remediosAutorizados = remediosDisponiveis.filter(
            produto => !produto.receitaObrigatoria ? true : receita.remedios.includes(produto.nome));   

        if (remediosDisponiveis.length === 0) {
            console.log('Infelizmente não temos os produtos em estoque!')
        }

        console.log({remediosDisponiveis});
        console.log({remediosAutorizados});
    };
}

const supermercado = new Estabelecimento('Rua dos Ipês, 920 - bloco B', 'alimentação', [
    {nome: 'pão', valor: 1.5},
    {nome: 'rosca', valor: 9.9}, 
    {nome: 'leite', valor: 5.29}, 
    {nome:'brigadeiro', valor: 2},
    {nome: 'café-da-manhã', valor: 25}
], 25);

const farmaciaDoZe = new Farmacia(
    'Rua dos Jatobás, 2220 - bloco J', 
    'saúde', 
    [
        {nome: 'aspirina', valor: 3.99},
        {nome: 'dorflex', valor: 9.9}, 
        {nome: 'lorax', valor: 15.29, receitaObrigatoria: true}, 
        {nome: 'lexotan', valor: 12.79, receitaObrigatoria: true}, 
        {nome:'loratadina', valor: 5.99},
        {nome: 'multivitamínico', valor: 35}
    ], 
25);

supermercado.retornaNomesDosProdutos();
farmaciaDoZe.compraRemedioPrescrito({
    remedios: ['lorax'],
    identificacaoDoMedico: '123-456-111'
}, ['aspirina', 'lexotan', 'shampoo']);