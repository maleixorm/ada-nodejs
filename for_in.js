const user = {
    name: 'JoSÉ mAria',
    mail: 'JOSE.m1@gmail.com',
    age: 23,
    address: '5th Street'
};

for (const key in user) {
    if (key === 'name') {
        const names = user[key].split(' ');
        user[key] = '';
        for (const name of names) {
            const normalizedName = name.toLowerCase();
            const [primeiraLetra, ...restoDoNome] = normalizedName;
            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('');
            user[key] = user[key].trim();
        }
    }
    
    if (key === 'mail' || key === 'address') {
        user[key] = user[key].toLowerCase();
    }
}

console.log(user);