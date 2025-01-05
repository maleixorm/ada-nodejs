interface AnimalInterface {
    nome: string;
    idadeEmMeses: number;
    comer: () => void;
}

class Animal {

    constructor(public nome: string, public idadeEmMeses: number) {}

    comer(): void {
        console.log('NHAC');
    }
}

const cachorro = new Animal('Mel', 38);
cachorro.comer();