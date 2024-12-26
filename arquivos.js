const path = require('node:path');
const fs = require('node:fs');

const filePath = path.join(process.cwd(), 'texto.txt');
const fileOutPath = path.join(process.cwd(), 'texto_com_linhas.txt');

fs.readFile(filePath, {}, (erro, dados) => {
    if (erro) {
        console.log(`Erro na leitura do arquivo, no endereço: ${filePath}.`);
        return;
    }
    const texto = dados.toString();
    const linhas = texto.split('\n');

    const linhasAjustadas = linhas.map((linha, index, arrayDeLinhas) => `${index + 1} - ${linha}`);

    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro) => {
        if (erro) {
            console.log(`Erro na escrita do arquivo, no endereço: ${fileOutPath}.`);
            return;
        }
    });
});