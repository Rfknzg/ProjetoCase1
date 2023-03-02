import { Modal, Button, Form } from 'react-bootstrap'
function CreateContentModal(props) {
  return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.isModalOpen}>
        <Form onSubmit={(event) => {
          props.createContent(event)
        }}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Adicionar Kin</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="nome">
            <Form.Label>
              Nome
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="midia">
            <Form.Label>
              Mídia
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="titulo">
            <Form.Label>
              Título
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="identificacao">
            <Form.Label>
              Identificação
            </Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
        </Form>
      </Modal >
    </div>
    
  )

  
}

export default CreateContentModal