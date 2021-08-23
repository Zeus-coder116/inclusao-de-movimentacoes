const db = require("../config/database");

exports.createProduct  = async (req, res) => {
const loja_origem = req.params.loja_origem;
const documento= req.params.documento;
const codigofab = req.params.codigofab;
const codigopro = req.params.codigopro;
const codigobas = req.params.codigobas;
const qtde = req.params.qtde;
const prcbasico = req.params.prcbasico;
const desconto = req.params.desconto;
const operador = req.params.operador;
const prcvenda = req.params.prcvenda;
const data = req.params.data;
const hora = req.params.hora;
const grupo = req.params.grupo;
const id_revista = req.params.id_revista;
 


 var adata = "'"+data.toString()+"'";
 var ahora = "'"+hora.toString()+"'";

  console.log();


 const rows = await db.query('INSERT INTO public.erp_idfabric(loja_origem, documento, codigofab, codigopro, codigobas,qtde, prcbasico, desconto, operador, prcvenda, data, hora, grupo,id_revista) VALUES ('+loja_origem+', '+documento+', '+codigofab+', '+codigopro+', '+codigobas+', '+qtde+', '+prcbasico+', '+desconto+', '+prcvenda+', '+operador+', '+adata+', '+ahora+', '+grupo+', '+id_revista+')');

 return res.json(rows.rows);
  };