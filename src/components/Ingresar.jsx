import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const IngresarUsuario=() => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Usuario
        </Form.Label>
        <Col sm="10">
          <Form.Control type='email' placeholder="ingrese su usuario" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
         contraseña
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="ingrese su contraseña" />
        </Col>
      </Form.Group>
      <Button variant="success">registar</Button>{' '}
    </Form>
  );
}

export default IngresarUsuario;