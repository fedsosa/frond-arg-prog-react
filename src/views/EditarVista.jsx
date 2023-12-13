import Card from 'react-bootstrap/Card';
import EditarUsuario from '../components/EditarComponentes.jsx';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Editar=() =>{
    const { id } = useParams();




 return (
    <> 
      <Card.Body>
        <EditarUsuario id={id}/>
      </Card.Body>
       
    </>
  )
}

export default  Editar;