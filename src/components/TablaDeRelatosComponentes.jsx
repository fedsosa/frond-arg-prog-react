import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from "react-router-dom";


const TablaDeRelatos = (props) => {
  const { lista } = props;
  const navigate = useNavigate();
  
  const Editar = (id) => {
    navigate('/editarPost/' + id)
  }

  const Borrar = (id) => {
    navigate('/eliminarPost/' + id )
  }

  
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Titulo</th>
          <th>Narrar</th>
          <th>Autor</th>
          <th>Comentarios</th>
          <th>Acciones</th>
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
              <td>{item.comentario}</td>
              <td>
              <ButtonGroup style={{maxWhidth :'20px'}} >
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