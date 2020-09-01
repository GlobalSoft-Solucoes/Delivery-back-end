const db = require("../database/conexao.js");

module.exports = {
  async cadastrar(req, res) {
    await db
      .insert(req.body)
      .into("LISTA_VENDA")
      .then(() => res.status(201))
      .catch(() => res.status(400));
  },
  async listar(req, res) {
    await db("LISTA_VENDA")
      .select()
      .then((dados) => res.status(200).send(dados))
      .catch(() => res.status(400));
  },
  async consultar(req, res) {
    await db("LISTA_VENDA")
      .where({ idItem: req.params.id })
      .then((dados) => res.status(200).send(dados))
      .catch(() => res.status(400));
  },
  async deletar(req, res) {
    await db("LISTA_VENDA")
      .where({ idItem: req.params.id })
      .del()
      .then((dados) => res.status(200).send(dados))
      .catch(() => res.status(400));
  },
  async atualizar(req, res) {
    res.send("Em desenvolvimento");
  },
};
