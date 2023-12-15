import Card from 'react-bootstrap/Card';
import EditarPosteo from './../components/EditarPosteoComponente.jsx';
import { useParams } from "react-router-dom";

const postEditar=() =>{
    const { id } = useParams();




 return (
    <> 
      <Card.Body>
        <EditarPosteo id={id} />
      </Card.Body>
       
    </>
  )
}

export default postEditar;