import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from "react-router-dom";


const DatosRelatos = (props) => {
  const { lista } = props;

  const navigate = useNavigate();


  const Editar=(id) =>{
    //console.log( 'vas a editar este post'+ id)
    navigate("/posteo");

  }

  const Eliminar=(id) =>{
    //console.log( 'vas a eliminar este post'+ id)
    navigate("/eliminar");
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>N°</th>
          <th>Relatos</th>
          <th>Usuario</th>
          <th>Comentarios</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          lista.map((item, key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{item.relato}</td>
              <td>{item.usuario}</td>
              <td>{item.comentario}</td>
              <td>
                <ButtonGroup aria-label="Basic example" style={{maxWidth :'40px'}}>
                  <Button variant="primary" onClick={() => Editar(key)}>Editar</Button>
                  <Button variant="danger" onClick={() => Eliminar(key)}>Eliminar</Button>
                </ButtonGroup>
              </td>
            </tr>

          ))
        }


      </tbody>
    </Table>
  );
}

export default DatosRelatos;