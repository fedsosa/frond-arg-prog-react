import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";



const Eliminar = () => {
  const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
  const [error, setErrores] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();


  const volver = () => {
    navigate("/verusua");
  }
  const Eliminar = async () => {
    setErrores(false);
    setDeshabilitarBoton(true);

    try {
      const url = 'http://localhost:3000/eliminar';
      const datos = { id:id }

      const respuesta = await axios.delete(url, {data:{id:id}});
console.log(respuesta)
      if (respuesta.status === 200) {
        return navigate('/verusua')
      } else {
        setErrores('ocurrio un error al aleminar')
      }

    } catch (error) {
      setErrores('ocurrio un error al interno al eliminar')
    }
    setDeshabilitarBoton(false);


  }



  return (
    <>

      <Card.Body>
        <Alert variant="warning">
          Estas seguro que vas a eliminar el ususario con id {id}?
        </Alert>
        {
          error && (
            <Alert variant="danger">
              { error}                
              
            </Alert>
          )
        }

        <ButtonGroup >
          <Button variant="primary" onClick={volver} disabled={deshabilitarBoton} >
            volver</Button>
          <Button variant="danger" onClick={Eliminar} disabled={deshabilitarBoton} >
            Eliminar</Button>
        </ButtonGroup>
      </Card.Body>



    </>
  )
}

export default Eliminar;
