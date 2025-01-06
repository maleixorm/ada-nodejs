// import products from './products.json';
import fs from 'node:fs';
import path from 'node:path';

const productJson = JSON.stringify(
    [
        {
            "nome": "T-shrit",
            "unit": 400,
            "value": 45
        },
        {
            "nome": "Socks",
            "unit": 200,
            "value": 15
        }
    ], null, 2
)

const fileOutPath = path.join(__dirname, 'generated-products.json');

fs.writeFileSync(fileOutPath, productJson);