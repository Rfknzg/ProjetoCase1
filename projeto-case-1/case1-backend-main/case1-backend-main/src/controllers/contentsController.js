import ContentsDAO from "../DAO/ContentsDAO.js"

class contentsController {
  static rotas(app){
    app.get('/kin', contentsController.listar)
    app.post('/kin', contentsController.inserir)
    app.delete('/kin/:id', contentsController.deletar)
    app.put('/kin/:id', contentsController.atualizar)
  }

  static async listar(req, res){
    const kins = await ContentsDAO.listar()

    res.send(kins)
  }

    static async inserir(req, res){
      const kin = {
        nome: req.body.nome,
        midia: req.body.midia,
        titulo: req.body.titulo,
        identificacao: req.body.identificacao
      }

    const result = await ContentsDAO.inserir(kin)

    if(result.erro) {
      res.status(500).send(result)
    }

    res.send(result)
  }

  static async deletar(req, res){
    const kin = await ContentsDAO.deletar(req.params.id)

    if(kin.erro){
        res.status(500).send('Erro ao deletar o conteúdo')
    }

    res.send({mensagem: 'Conteúdo removido com sucesso'})
  }

  static async atualizar(req, res){
    const kin = {
      nome: req.body.nome,
        midia: req.body.midia,
        titulo: req.body.titulo,
        identificacao: req.body.identificacao
    }

    const result = await ContentsDAO.atualizar(req.params.id, kin)

    if(result.erro){
        res.status(500).send('Erro ao atualizar o conteúdo')
    }

    res.send({mensagem: 'Conteúdo alterado com sucesso'})
  }
}

export default contentsController