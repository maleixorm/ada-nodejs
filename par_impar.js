const listaDeNumeros = [25, 88, 71, 192, 333, 222, 10, 11, 62];
const listaDePares = [];
const listaDeImpares = [];
let contador = 0;

while (contador < listaDeNumeros.length) {
    let numeroAtual = listaDeNumeros[contador];
    if (numeroAtual % 2 == 0) {
        listaDePares.push(numeroAtual);
    } else {
        listaDeImpares.push(numeroAtual);
    }
    contador++;
}

console.log(listaDeNumeros);
console.log(listaDePares);
console.log(listaDeImpares);