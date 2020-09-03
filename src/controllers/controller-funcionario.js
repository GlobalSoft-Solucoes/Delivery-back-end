const db = require("../database/conexao");

module.exports = {
  async atualizar(req, res) {},


  async cadastrar(req, res) {
    if (req.body.nome == null || req.body.nome == "")
        res.status(400).send({
            salvou: false,
            erro: "Nome de usuário é informação de preechimento obrigatório",
        });
    else if (req.body.email == null) {
        res.status(400).send({
            salvou: false,
            erro: "E-mail é informação de preenchimento obrigatório"
        })
    } else if (req.body.senha == null)
        res.status(400).send({
            salvou: false,
            erro: "Senha é informação de preenchimento obrigatório",
        });
    else
        await db
        .insert(req.body)
        .into("FUNCIONARIO")
        .then(() => res.status(201).send({ status: "Cadastrado com sucesso" }))
        .catch(() => res.status(400).send({ status: "Erro ao cadastrar!!" }));
},
/*
  async cadastrar(req, res) {

    if (req.body.nome == null || req.body.nome == "")
    
    res.status(400).send({
        erro: "Nome de usuário é informação de preemchimento obrigatório",
      });

    else if (req.body.senha == null || req.body.senha == "")
      res.status(400).send({
        erro: "Senha é informação de preemchimento obrigatório",
      });

    else {

      req.body.email = req.body.email.toLowerCase();
      await db
        .insert(req.body)
        .into("FUNCIONARIO")
        .then(() => res.status(201))
        .catch(() => res.status(400));
    }
  },*/

  async deletar(req, res) {
    await db("FUNCIONARIO")
      .where({ idUsuario: req.params.id })
      .del()
      .then(() => res.status(200))
      .catch(() => res.status(400));
  },

  async validar(req, res) {

    if (req.body.email == null || req.body.senha == null)
      res
        .status(400)
        .send({ validou: "Erro, o campo email ou senha estão nulo" });

    else {
      const result = await db("FUNCIONARIO").where({
        email: req.body.email,
        senha: req.body.senha,
      });

      if (result.length == 0) res.status(400).send({ validou: false });
      else res.status(200).send({ id: result.idUsuario });
    }

  },

  // =============== ALTERAR A SENHA DO E-MAIL INFORMADO ================
  async AlterarSenha(req, res) {
    db('FUNCIONARIO')
        .where({ email: req.params.email })
        .update(req.body)
        .then(() => res.status(201).send({ Status: "Senha alterada com sucesso!" }))
        .catch(() => res.status(400).send({ status: "ERRO" }));
},

  async buscarDados(req, res) {
    const result = await db("FUNCIONARIO").where({
      email: req.body.nome,
      senha: req.body.senha,
    });
  },

  // =========== VERIFICA SE O IMÓVEL ESTÁ DISPONÍVEL PARA CADASTRAR USUÁRIO ===========
    async emailDisp(req, res) {
        if (req.body.email == null)
            res.status(400).send({ validou: "Erro, o campo email esta vazio" });
        else {
            const result = await db("FUNCIONARIO").where({
                email: req.body.email,
            });

            if (result.length != 0) res.status(400).send({ validou: "E-mail já está sendo usado" });
            else res.status(200).send({ validou: "E-mail disponível!" });
        }
    },



  // async emailDisp(req, res) {
  //   if (req.body.email == null)
  //     res.status(400).send({ validou: "Erro, o campo email esta vazio" });
  //   else {
  //     const result = await db("FUNCIONARIO").where({
  //       email: req.body.email,
  //     });

  //     if (result.length != 0) res.status(400);
  //     else res.status(200);
  //   }
  // },
};
