import Card from 'react-bootstrap/Card';
import IngresarUsuario from '../components/IngresarComponente.jsx';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Ingresar = () => {


  return (
    <>
      <h1>BIENVENIDO</h1>
      <Card.Body>
        <IngresarUsuario />
        <br />
        <ButtonGroup aria-label="Basic example" style={{ maxWidth: '40px' }}>
          <Button variant="primary" onClick={() => Editar(key)}>Editar</Button>
          <Button variant="danger" onClick={() => Eliminar(key)}>Eliminar</Button>
        </ButtonGroup>

      </Card.Body>

    </>
  )
}

export default Ingresar;
