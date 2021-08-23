const express = require('express');

const entradas = require('./controllers/entradas');
const ientrada = require('./controllers/ientrada');
const dfabrica = require('./controllers/dfabrica');
const idfabric = require('./controllers/idfabric');
const Insertentradas = require('./controllers/Insertentradas');
const Insertientrada = require('./controllers/Insertientrada');
const Insertdfabrica = require('./controllers/Insertdfabrica');
const Insertidfabric = require('./controllers/Insertidfabric');

const routes = express.Router();


routes.get('/entradas/:documento/', entradas.listAllProducts);
routes.get('/ientrada/:documento/', ientrada.listAllProducts);
routes.get('/dfabrica/:documento/', dfabrica.listAllProducts);
routes.get('/idfabric/:documento/', idfabric.listAllProducts);

routes.post('/Insertentradas/:loja_origem/:documento/:hora/:data/:codigovend/:totaldesc/:totalitens/:totalgeral/:operador/:cancelado/:bloqueado/:tipo/:origem/:alteracoes',Insertentradas.createProduct);
routes.post('/Insertientrada/:loja_origem/:documento/:codigofab/:codigopro/:codigobas/:qtde/:prcbasico/:desconto/:prcvenda/:operador/:data/:hora/:grupo/:id_revista',Insertientrada.createProduct);
routes.post ('/Insertdfabrica/:loja_origem/:documento/:data/:hora/:codigovend/:totaldesc/:totalitens/:totalgeral/:operador/:cancelado/:alteracoes/:bloqueado/:tipo/:destino/:notaemitida', Insertdfabrica.createProduct);
routes.post ('/Insertidfabric/:loja_origem/:documento/:codigofab/:codigopro/:codigobas/:qtde/:prcbasico/:desconto/:operador/:prcvenda/:data/:hora/:grupo/:id_revista', Insertidfabric.createProduct);


module.exports = routes; 