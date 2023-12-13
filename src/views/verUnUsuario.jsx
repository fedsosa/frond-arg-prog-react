
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import  {datosDeUnUsuarioPorId} from './../../utils/llamadosAReutilizar.js'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Ver = () => {
    const { id } = useParams();

    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')


   const traeLosDatos= async ()=>{

    const endpoint = 'http://localhost:3000/usuario' + '/' + id;
    const respuesta = await axios.get(endpoint ) 
   const usuario = respuesta.data; 
   console.log(usuario)
       if (respuesta) {
        setUsuario(usuario.usuario);
        setContraseña(usuario.contraseña);
       } else {
                   console.log('no se encontro el usuario ID' + id);
       }    
   }
   useEffect (()=>{
    traeLosDatos();
   },[]);


    return (
        <>
            <Card.Body>
                <Card>
                    <Card.Header as="h5">BIENVENIDO </Card.Header>
                    <Card.Body>
                        <Card.Title>{usuario} {contraseña}</Card.Title>
                        <Card.Text>
                            DETALLE
                        </Card.Text>
                        <Button variant="primary">POSTEAR</Button>
                    </Card.Body>
                </Card>
               


            </Card.Body>

        </>
    );

}

export default Ver;