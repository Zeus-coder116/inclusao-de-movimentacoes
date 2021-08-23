const db = require("../config/database");

exports.createProduct  = async (req, res) => {
const loja_origem = req.params.loja_origem;
 const documento= req.params.documento;
 const data = req.params.data;
 const hora = req.params.hora;
 const codigovend = req.params.codigovend;
 const totaldesc = req.params.totaldesc;
 const totalitens = req.params.totalitens;
 const totalgeral = req.params.totalgeral;
 const operador = req.params.operador;
 const cancelado = req.params.cancelado;
 const alteracoes = req.params.alteracoes;
 const bloqueado = req.params.bloqueado;
 const tipo = req.params.tipo;
 const destino = req.params.destino;
 const notaemitida = req.params.notaemitida;
 
 var adata = "'"+data.toString()+"'";
 var ahora = "'"+hora.toString()+"'";
 var acancelado = "'"+cancelado.toString()+"'";
 var adestino = "'"+destino.toString()+"'";
 var abloqueado = "'"+bloqueado.toString()+"'";
 var atipo = "'"+tipo.toString()+"'";
 
 console.log(loja_origem, documento, adata, ahora, codigovend, totaldesc, totalitens, totalgeral, operador, acancelado, alteracoes, abloqueado, atipo, adestino, notaemitida);
 
 const rows = await db.query('INSERT INTO public.erp_dfabrica(loja_origem, documento, data, hora, codigovend, totaldesc, totalitens,totalgeral, operador, cancelado, alteracoes, bloqueado, tipo, destino, notaemitida) VALUES ('+loja_origem+', '+documento+', '+adata+', '+ahora+', '+codigovend+', '+totaldesc+', '+totalitens+', '+totalgeral+', '+operador+', '+acancelado+', '+alteracoes+', '+abloqueado+', '+atipo+','+adestino+', '+notaemitida+')');


 return res.json(rows.rows);
  };
