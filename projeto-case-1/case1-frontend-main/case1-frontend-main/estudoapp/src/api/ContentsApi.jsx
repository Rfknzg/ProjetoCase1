const ContentsApi = () => {
  const url = 'http://localhost:3000'

  return {
      getContents () {
          return fetch(`${url}/kin`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          })
      },
      deleteContent (contentId) {
        return fetch(`${url}/kin/${contentId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          }
       })
      },
      createContent (nome, midia, titulo, identificacao) {
        return fetch(`${url}/kin`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              nome: nome,
              midia: midia,
              titulo: titulo,
              identificacao: identificacao
            }
          )
       })
      },
      updateContent(contentId, nome, midia, titulo, identificacao) {
        return fetch(`${url}/kin/${contentId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              nome: nome,
              midia: midia,
              titulo: titulo,
              identificacao: identificacao
            }
          )
       })
      },
  }
}

export default ContentsApi