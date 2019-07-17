const express = require('express');
const sum = require('./utils/sum');
const app = express();
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    let total = sum(100, 1);
    res.send('Hello NodeJs automation on Heroku ' + total);
});

app.get('/one', (req, res) => {
    res.send('Hello from route one-1');
});

app.get('/three', (req, res) => {
    res.send('Hello from route three and more and more');
});

app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`Example app listening on port ${PORT}!`);
    /* eslint-enable no-console */
});