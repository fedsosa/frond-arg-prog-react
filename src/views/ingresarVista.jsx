import Card from 'react-bootstrap/Card';
import IngresarUsuario from '../components/IngresarComponente.jsx';
import axios from 'axios';




const Ingresar = () => {


  return (
    <>
      <h1 style={{ color:'purple'}}>BIENVENIDO</h1>
      <Card.Body>
        <IngresarUsuario />
        <br />
        
      </Card.Body>

    </>
  )
}

export default Ingresar;
