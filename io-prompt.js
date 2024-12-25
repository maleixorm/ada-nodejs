const rl = require('readline');

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

const promptPromisse = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question((pergunta), (resposta) => resolve(resposta));
        } catch (error) {
            reject(error);
        }
    }),
    close: () => prompt.close()
}

// prompt.question('Qual o seu número favorito?: ', (resposta) => {
//     console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`);
//     prompt.question('Qual a sua cor favorita?: ', (resposta) => {
//         console.log(`Sua cor favorita é: ${resposta}`);
//     })
//     prompt.close();
// })

async function askUser() {
    const numero = await promptPromisse.question('Qual o seu número favorito?: ');
    console.log(`O dobro do seu número favorito é: ${parseInt(numero) * 2}`);

    const cor = await promptPromisse.question('Qual a sua cor favorita?: ');
    console.log(`Sua cor favorita é: ${cor}`);

    promptPromisse.close();
}

askUser();