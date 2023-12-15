import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {guardarDatos,guardarToken,} from '../../utils/ingresarUsuarioToken.js'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAutent } from '../context/autentContex.jsx';

const IngresarPosteo=() => {
  const[titulo,setTitulo] = useState('')
  const[narrar,setNarrar] = useState('')

  const[deshabilitarBoton, setDeshabilitarBoton] = useState(false);
  const[errores, setErrores] = useState({});

  const {token} = useAutent();
  const navigate = useNavigate();

   const cambiarTitulo = (e) => {
      const tituloValue = e.target.value
    
    setTitulo(tituloValue );
   }
   const cambiarNarrar = (e) => {
    const narrarValue = e.target.value
  
    setNarrar(narrarValue );
   }


   const verificarUsuario = async () => {
    let misErrores = {}
       if (titulo.length === 0) {
   
         misErrores.titulo = 'Debe introducir un titulo'
       }
       if (narrar.length === 0) {
   
         misErrores.narrar = 'Debe introducir una narracion'
       }
       setErrores( misErrores);
       
       if (Object.entries(misErrores).length === 0) {
   
         setDeshabilitarBoton(true);
   
        
   
           await mandarDatos();
       }
   
     }
   
     const mandarDatos = async () => {
       const url = 'http://localhost:3000/crearPost'
   
       const datos = {
        titulo : titulo,
         narrar: narrar 
         
       }

       const headers = {
        token: token
       }

      try {

         const respuesta = await axios.post (url , datos, {headers:headers})
        
   
       if (respuesta.status===200) {
         
         const {datos,token} = respuesta.data;

         login(datos,token);

         return navigate('/'); 

       } else {
         setErrores({ error: 'ocurrio un error al postear' })
       }
    
      } catch (error) {
       setErrores({ error: 'ocurrio un error al interno al postear' })
      }
   
       setDeshabilitarBoton(false);
     }
   

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Titulo
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text'  onInput={cambiarTitulo} />
          {
            errores.titulo && (
              <span style={{ color: 'red' }}>
                {errores.titulo}
              </span>
            )
          }

        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
         Narrar
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text"  onInput={cambiarNarrar}/>
          {
            errores.narrar && (
              <span style={{ color: 'red' }}>
                {errores.narrar}
              </span>
            )
          }

        </Col>
      </Form.Group>
      {
        errores.error && (
          <Alert variant="warning">
            errores.error
          </Alert>

        )
      }

      <Button variant="success" onClick={verificarUsuario } disabled={deshabilitarBoton}>
        postear
        </Button> { }
    </Form>
  );
}

export default IngresarPosteo;