fetch('http://localhost:5000').then(
    response => response.text().then(
        data => console.log(data)
    )
);

async function makeRequest() {
    const response = await fetch ('http://localhost:5000');
    const data = await response.text();
    console.log(data)
}

makeRequest();