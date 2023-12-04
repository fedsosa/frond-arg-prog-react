import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Eliminar= () => {

    const navigate = useNavigate();

  const volver =() => {
    navigate("/");
  }
  const Eliminar =() => {
    navigate("/eliminar");
  }

    return (
        <>

            <Card.Body>
                <Alert  variant="warning">
                   Estas seguro que vas a eliminar ?
                </Alert>
                <ButtonGroup >
                  <Button variant="primary" onClick={volver}>volver</Button>
                  <Button variant="danger" onClick={Eliminar}>Eliminar</Button>
                </ButtonGroup>
            </Card.Body>



        </>
    )
}

export default Eliminar;
