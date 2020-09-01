const express = require("express");
const Usuario = require("../controllers/controller-usuario.js");
const Produto = require("../controllers/controller-produto.js");
const Venda = require("../controllers/controller-venda.js");
const Empresa = require("../controllers/controller-empresa.js");
const Avaliacao = require("../controllers/controller-avaliacao.js");
const Categoria = require("../controllers/controller-categoria.js");
const Municipio = require("../controllers/controller-municipio.js");
const Endereco = require("../controllers/controller-endereco.js");
const Cupon = require("../controllers/controller-cupon.js");
const Funcionario = require("../controllers/controller-funcionario.js");

const app = express.Router();

app.get("/usuario/emailDisp", Usuario.emailDisp);
app.get("/usuario/", Usuario.validar);
app.post("/usuario", Usuario.cadastrar);
app.delete("/usuario/:id", Usuario.deletar);
app.put("/usuario", Usuario.atualizar);

app.post("/funcionario/emaildisp", Funcionario.emailDisp);
app.post("/funcionario/atualizarsenha",Funcionario.AlterarSenha);
app.post("/funcionario/validar", Funcionario.validar);
app.post("/funcionario", Funcionario.cadastrar);
app.delete("/funcionario/:id", Funcionario.deletar);
app.put("/funcionario", Funcionario.atualizar);

app.get("/produto", Produto.listar);
app.get("/produto/:id", Produto.consultar);
app.post("/produto", Produto.cadastrar);
app.delete("/produto", Produto.deletar);
app.put("/produto", Produto.atualizar);

app.get("/venda", Venda.listar);
app.get("/venda/:id", Venda.consultar);
app.post("/venda", Venda.cadastrar);
app.delete("/venda", Venda.deletar);
app.put("/venda", Venda.atualizar);

app.get("/empresa", Empresa.listar);
app.get("/empresa/:id", Empresa.consultar);
app.post("/empresa", Empresa.cadastrar);
app.delete("/empresa", Empresa.deletar);
app.put("/empresa", Empresa.atualizar);

app.get("/endereco", Endereco.listar);
app.get("/endereco/:id", Endereco.consultar);
app.post("/endereco", Endereco.cadastrar);
app.delete("/endereco", Endereco.deletar);
app.put("/endereco", Endereco.atualizar);

app.get("/categoria", Categoria.listar);
app.get("/categoria/:id", Categoria.consultar);
app.post("/categoria", Categoria.cadastrar);
app.delete("/categoria", Categoria.deletar);
app.put("/categoria", Categoria.atualizar);

app.get("/municipio", Municipio.listar);
app.get("/municipio/:id", Municipio.consultar);
app.post("/municipio", Municipio.cadastrar);
app.delete("/municipio", Municipio.deletar);
app.put("/municipio", Municipio.atualizar);

app.get("/cupon", Cupon.listar);
app.get("/cupon/:id", Cupon.consultar);
app.post("/cupon", Cupon.cadastrar);
app.delete("/cupon", Cupon.deletar);
app.put("/cupon", Cupon.atualizar);

app.get("/avaliacao", Avaliacao.listar);
app.get("/avaliacao/:id", Avaliacao.consultar);
app.post("/avaliacao", Avaliacao.cadastrar);
app.delete("/avaliacao", Avaliacao.deletar);
app.put("/avaliacao", Avaliacao.atualizar);

module.exports = app;
