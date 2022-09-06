const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/', routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.listen(3000, () => console.log('Servidor iniciado!'));