import db from '../infra/db.js'

class ContentsDAO {
    static listar() {
        const query = 'SELECT * FROM kins';
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows)
            });
        });
    }

    static inserir(kin) {
        const query = 'INSERT INTO kins (nome, midia, titulo, identificacao) VALUES (?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.run(query, [kin.nome, kin.midia, kin.titulo , kin.identificacao], function (err) {
                if (err) {
                    reject({
                        mensagem: 'Erro ao inserir o conteúdo',
                        erro: err
                    })
                }

                resolve({
                    mensagem: 'Conteúdo criado com sucesso',
                    contentId: this.lastID
                 })
            });
        });
    }

    static deletar(id) {
      const query = 'DELETE FROM kins WHERE id = ?';
      return new Promise((resolve, reject) => {
          db.run(query, [id], (err) => {
              if (err) {
                  reject({
                      mensagem: 'Erro ao deletar o conteúdo',
                      erro: err
                  })
              }

              resolve({ mensagem: 'Conteúdo deletado com sucesso' })
          });
      });
    }

    static atualizar(id, kin) {
      const query = 'UPDATE kins SET nome = ?, midia = ?, titulo = ?, identificacao = ? WHERE id = ?';
      return new Promise((resolve, reject) => {
          db.run(query, [kin.nome, kin.midia, kin.titulo, kin.identificacao, id], (err) => {
              if (err) {
                  reject({
                      mensagem: 'Erro ao atualizar o conteúdo',
                      erro: err
                  })
              }

              resolve({ mensagem: 'Conteúdo atualizado com sucesso' })
          });
      });
    }
}

export default ContentsDAO;