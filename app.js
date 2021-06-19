const express = require('express');
const app = express();
const port = 3000;
const root = 'http://localhost';

app.get('/', (req, res) => {
    res.send('Home')
});

app.get('/contact', (req, res) => {
    res.send('Contactanos')
});

app.get('/products', (req, res) => {
    res.send('Productos')
});

app.get('/products/abc123', (req, res) => {
    res.send('Productos abc123')
});

app.listen(port, () => {
    console.log(`Server works on ${root}:${port}`)
});