const express = require('express');
const boryparser = require('body-parser');
const cors = require('cors');

const porta = 3000;
const app = express();

app.use(boryparser.json());
app.use(cors());

app.use(require('./routers/router.js'));

app.listen(porta, ()=> console.log('Servidor online'));