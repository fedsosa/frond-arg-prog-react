import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from "react-router-dom";


const MostrarUsuario = (props) => {
  const { lista } = props;

  const navigate = useNavigate();

  const Postear = (id) => {
    //navigate('/posteo' + id)
  }


  const Editar = (id) => {
    //navigate('/editar' + id)
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
          <th>contraseña</th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          lista.map((item, key) => (
            <tr key={key}>
              <td>{ item._id }</td>
              <td>{ item.usuario }</td>
              <td>{ item.contraseña }</td>
              <td>
                <ButtonGroup style={{maxWhidth :'20px'}} >
                  <Button variant="primary" onClick={() => Postear(item.id )}>postear</Button>
                  <Button variant="danger" onClick={() => Borrar(item._id)}>eleiminar</Button>
                  <Button variant="success" onClick={() => Editar (item.id )}>editar</Button>
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