const db = require("../config/database");

exports.listAllProducts  = async (req, res) => {
 const numero = req.params.documento;
 
 const rows = await db.query('SELECT id_ientrada, loja_origem, documento, codigofab, codigopro, codigobas, qtde, prcbasico, desconto, prcvenda, operador, data, hora, grupo, id_revista, forsec_forcod, forsec_forvin, defeito, motivo_defeito, documento_devolucao\r\
 FROM public.erp_ientrada\r\
 where documento = '+numero+'');
 
 return res.json(rows.rows);
  };
