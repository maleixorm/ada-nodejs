const url =  require('node:url');
const querystring = require('node:querystring');
const { parse } = require('node:path');

const baseUrl = 'https://siteviagem.com.br';

const uri = querystring.stringify({
    destino: 'Rio de Janeiro',
    periodo: 'Verão'
});

const fullUrl = `${baseUrl}/${uri}`;

console.log(fullUrl);

const parsedUri = querystring.parse(uri);
console.log(uri);
console.log(parsedUri);
console.log(parsedUri.destino);
console.log(url.parse(fullUrl));

const uri2 = querystring.escape('São Paulo');
console.log(uri2);
const unescapedUri2 = querystring.unescape(uri2);
console.log(unescapedUri2);