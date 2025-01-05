import { Produto } from "./classes";

interface EstabelecimentoInterface {
    endereco: string;
    setor: string;
    filaDeEspera: number;
    retornaNomesDosProdutos: () => string[];
    diminuirFilaDeEspera(): void;
}

class Estabelecimento implements EstabelecimentoInterface {
    private _filaDeEspera = 10;
    constructor(
        public endereco: string, 
        public setor: string, 
        private produtos: Produto[],
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

const supermercado = new Estabelecimento('Rua dos Ipês, 920 - bloco B', 'alimentação', [
    {nome: 'pão', valor: 1.5},
    {nome: 'rosca', valor: 9.9}, 
    {nome: 'leite', valor: 5.29}, 
    {nome:'brigadeiro', valor: 2},
    {nome: 'café-da-manhã', valor: 25}
], 25);