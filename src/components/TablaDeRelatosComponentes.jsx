import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from "react-router-dom";


const TablaDeRelatos = (props) => {
  const { lista } = props;

  
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Titulo</th>
          <th>Narrar</th>
          <th>Autor</th>
          <th>comentarios</th>
        </tr>
      </thead>
      <tbody>
        {
          lista.map((item, key) => (
            <tr key={key}>
              <td>{key+1}</td>
              <td>{item.titulo}</td>
              <td>{item.narrar}</td>
              <td>{'Autor'}</td>
              <td>
              <ButtonGroup style={{maxWhidth :'20px'}} >
                  <Button variant="primary" onClick={() => Postear(item._id )}>postear</Button>
                  <Button variant="danger" onClick={() => Borrar(item._id)}>eliminar</Button>
                  <Button variant="success" onClick={() => Editar (item._id )}>editar</Button>
                </ButtonGroup>
               
              </td>
            </tr>

          ))
        }


      </tbody>
    </Table>
  );
}

export default TablaDeRelatos ;