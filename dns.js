const dns = require('node:dns');

// dns.resolve4(searchedUrl, (error, addresses) => {
//     if (error) {
//         console.log('URL não encontrada.');
//         return;
//     }
//     console.log(addresses);
// });

async function bootstrap() {
    const searchedUrl = 'google.com';
    console.time('Pesquisando URL por DNS padrão');
    const addresses = await dns.promises.resolve4(searchedUrl);
    console.timeEnd('Pesquisando URL por DNS padrão');
    console.log(addresses);

    const nameServers = await dns.promises.resolveNs(searchedUrl);
    console.log(nameServers);
    
    const ipNs = await dns.promises.resolve4(nameServers[1]);
    
    const resolver = new dns.Resolver();
    resolver.setServers(ipNs);
    
    console.time('Pesquisando URL por DNS específico');
    resolver.resolve4(searchedUrl, (error, addresses) => {
        if (error) {
            console.log('Não foi possível encontrar o IPV4.');
        }
        console.timeEnd('Pesquisando URL por DNS específico');
        console.log(addresses);
    });
}

bootstrap();