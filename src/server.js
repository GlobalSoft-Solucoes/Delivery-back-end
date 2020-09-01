const express = require('express');
const boryparser = require('body-parser');

const porta = 3000;
const app = express();

app.use(boryparser.json());

app.use(require('./routers/router.js'));

app.listen(porta, ()=> console.log('Servidor online'));