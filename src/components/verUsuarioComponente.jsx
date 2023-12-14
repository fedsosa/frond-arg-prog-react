import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from "react-router-dom";


const MostrarUsuario = (props) => {
  const { lista } = props;

  const navigate = useNavigate();

  const Postear = (id) => {
    navigate('/posteo')
  }


  const Editar = (id) => {
    navigate('/editar/' + id)
  }

  const Borrar = (id) => {
    navigate('/eliminar/' + id )
  }


  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>usuario</th>
          <th>nombre</th>
          <th>apellido</th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          lista.map((item, key) => (
            
            <tr key={key}>
              <td>{ key+1}</td>
              <td>{ item.usuario }</td>
              <td>{ item.nombre }</td>
              <td>{ item.apellido }</td>
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

export default MostrarUsuario;