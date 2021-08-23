const db = require("../config/database");

exports.listAllProducts  = async (req, res) => {
 const numero = req.params.documento;
 
 const rows = await db.query('SELECT loja_origem, documento, data, hora, codigovend, totaldesc, totalitens,totalgeral, operador, cancelado, alteracoes, bloqueado, tipo,origem\r\
    FROM public.erp_entradas\r\
    where documento = '+numero+'');
 
 return res.json(rows.rows);
  };
