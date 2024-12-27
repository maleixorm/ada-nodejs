const dns = require('node:dns');

const searchedUrl = 'google.com';

// dns.resolve4(searchedUrl, (error, addresses) => {
//     if (error) {
//         console.log('URL não encontrada.');
//         return;
//     }
//     console.log(addresses);
// });

async function bootstrap() {
    const addresses = await dns.promises.resolve4(searchedUrl);
    console.log(addresses);

    const nameServers = await dns.promises.resolveNs(searchedUrl);
    console.log(nameServers);
}

bootstrap();