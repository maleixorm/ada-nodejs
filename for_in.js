const user = {
    name: 'JoSÉ mAria',
    mail: 'JOSE.m1@gmail.com',
    age: 23,
    address: '5th Street'
};

for (const key in user) {
    if (key === 'name' || key === 'mail' || key === 'address') {
        user[key] = user[key].toLowerCase();
    }
}

console.log(user);