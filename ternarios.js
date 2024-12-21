const idade = 18;
const temCNH = true;
const podeDirigir = idade >= 18 && temCNH;

// let numeroDePassageiros = 0;

if (podeDirigir) {
    console.log('O condutor está habilitado para dirigir.');
    // numeroDePassageiros = 4;
} else {
    console.log('O condutor não está habilitado para dirigir.');
}

const numeroDePassageiros = podeDirigir ? 4 : 0;

console.log(numeroDePassageiros);