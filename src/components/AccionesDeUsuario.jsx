import { Card, } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

const UsePosteo = (props) => {
   // const [Dato,setDato] = useState ([])

 /* const PonerDatos= async () => {

    setDato([
    { relato:'blallblabla', usuario:'federico', comentario:'esoesoesoeso' },
    { relato:'xxxxxxxx', usuario:'olga', comentario:'rosario' },
    { relato:'byyyyyyyyyyy', usuario:'fmario', comentario:'rofo' },

    ])

}*/

/*useEffect ( ()=>{

    PonerDatos ();

}, []);*/





    const { dato } = props;

    const Postear = (id) => {
        console.log('va a Editar el elemento ' + id)
    }


    const Editar = (id) => {
        console.log('va a Editar el elemento ' + id)
    }

    const Borrar = (id) => {
        console.log('va a Borrar el elemento ' + id)
    }



    return (
        <>
            <Card style={{ width: '30rem' }}>
                
                <Card.Body>
                    <Card.Title>Relatar</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>titulo</ListGroup.Item>
                    <ListGroup.Item>comentario</ListGroup.Item>
                    <ListGroup.Item>fecha</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">postear</Card.Link>
                    <Card.Link href="#">editar</Card.Link>
                </Card.Body>
            </Card>


            <div>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" onClick={() => Postear(key)}>postear</Button>
                    <Button variant="danger" onClick={() => Editar(key)}>eleiminar</Button>
                    <Button variant="success" onClick={() => Borrar(key)}>editar</Button>
                </ButtonGroup>
            </div>


        </>

    );
}

export default UsePosteo