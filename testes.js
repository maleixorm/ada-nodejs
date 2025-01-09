const avaliacao = [
	{
		"nota": 1,
		"clientes": 2
	},
	{
		"nota": 2,
		"clientes": 15
	},
	{
		"nota": 3,
		"clientes": 18
	},
	{
		"nota": 4,
		"clientes": 25
	},
	{
		"nota": 5,
		"clientes": 40
	}
]

function calcularMediaAvaliacao(avaliacoes) {    
    return avaliacoes;
}

let somaDeNotas = 0;
let quantidadeDeClientes = 0;
for (let contador = 0; contador < avaliacao.length; contador++) {
	let valorAbsolutoDaNota = avaliacao[contador].nota * avaliacao[contador].clientes;
    somaDeNotas = somaDeNotas + valorAbsolutoDaNota;
    quantidadeDeClientes = quantidadeDeClientes + avaliacao[contador].clientes;
}
let avaliacoes = somaDeNotas / quantidadeDeClientes;

console.log(calcularMediaAvaliacao(avaliacoes));