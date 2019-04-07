console.log("Loading...");

const express = require('express');
const app = express();
const port = 80;

console.log('Starting server...');

app.set('view engine', 'pug');
app.use('/static', express.static('resources'))

app.get('/', (req, res) => res.render('index'));
app.get('/nine-to-noon', (req, res) => res.render('nine-to-noon'));
app.get('/wooten-stock-picks', (req, res) => res.render('wooten-stock-picks'));

app.listen(port, () => console.log(`Started server on port ${port}`));
