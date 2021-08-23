const db = require("../config/database");

exports.createProduct = async (req, res) => {
 const loja_origem = req.params.loja_origem;
 const documento = req.params.documento;
 const codigofab = req.params.codigofab;
 const codigopro = req.params.codigopro;
 const codigobas = req.params. codigobas;
 const qtde = req.params.qtde;
 const prcbasico = req.params.prcbasico;
 const desconto = req.params.desconto;
 const prcvenda = req.params.prcvenda;
 const operador = req.params.operador;
 const data = req.params.data;
 const hora = req.params.hora;
 const grupo = req.params.grupo;
 const id_revista = req.params.id_revista;
 

 var adata = "'"+data.toString()+"'";
 var ahora = "'"+hora.toString()+"'";
 


console.log(loja_origem, documento, codigofab, codigopro, codigobas,qtde, prcbasico, desconto, prcvenda, operador, data, hora, grupo, id_revista);

 const rows = await db.query('INSERT INTO public.erp_ientrada(loja_origem, documento, codigofab, codigopro, codigobas,qtde, prcbasico, desconto, prcvenda, operador, data, hora, grupo,id_revista) VALUES ('+loja_origem+', '+documento+', '+codigofab+', '+codigopro+', '+codigobas+', '+qtde+', '+prcbasico+', '+desconto+', '+prcvenda+', '+operador+', '+adata+', '+ahora+', '+grupo+', '+id_revista+')');


 return res.json(rows.rows);
  };

  