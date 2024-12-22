const listaDeContatos = ['Paulo', 'Celina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natália', 'Bianca'];

let findOrNot = false;
let contador = 0;

while (!findOrNot) {
    const usuarioAtual = listaDeContatos[contador];
    if (usuarioAtual.startsWith('M')) {
        findOrNot = true;
        console.log(`Usuário encontrado: ${usuarioAtual}!`);
    }
    contador++;
    if (contador === listaDeContatos.length) {
        findOrNot = true;
        console.log('Usuário não encontrado.')
    }
}