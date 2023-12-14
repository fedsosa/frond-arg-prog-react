import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {guardarDatos,guardarToken,} from './../../utils/ingresarUsuarioToken.js'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAutent } from '../context/autentContex.jsx';

const IngresarUsuario=() => {
  const[usuario,setUsuario] = useState('')
  const[contraseña,setContraseña] = useState('')
  const[deshabilitarBoton, setDeshabilitarBoton] = useState(false);
  const[errores, setErrores] = useState({});

  const {login} = useAutent();
  const navigate = useNavigate();

   const usarUsuario = (e) => {
      const usuarioValue = e.target.value
    
    setUsuario(usuarioValue );
   }
   const usarContraseña = (e) => {
    const contraseñaValue = e.target.value
  
    setContraseña(contraseñaValue );
   }


   const verificarUsuario = async () => {
    let misErrores = {}
       if (usuario.length === 0) {
   
         misErrores.usuario = 'Debe introducir el Usuario'
       }
       if (contraseña.length === 0) {
   
         misErrores.contraseña = 'Debe introducir la contraseña'
       }
       setErrores( misErrores);
       
       if (Object.entries(misErrores).length === 0) {
   
         setDeshabilitarBoton(true);
   
        
   
           await mandarDatos();
       }
   
     }
   
     const mandarDatos = async () => {
       const url = 'http://localhost:3000/autenticar'
   
       const datos = {
         
         usuario: usuario,
         contraseña: contraseña,
       }
      try {

         const respuesta = await axios.post (url , datos)
        
   
       if (respuesta.status===200) {
         
         const {datos,token} = respuesta.data;

         login(datos,token);

         navigate('/verusua')

       } else {
         setErrores({ error: 'ocurrio un error al interno al registrarse' })
       }
    
      } catch (error) {
       setErrores({ error: 'ocurrio un error al interno al registrarse' })
      }
   
       setDeshabilitarBoton(false);
     }
   

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Usuario
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text'  onInput={usarUsuario} />
          {
            errores.usuario && (
              <span style={{ color: 'red' }}>
                {errores.usuario}
              </span>
            )
          }

        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
         contraseña
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password"  onInput={usarContraseña}/>
          {
            errores.usuario && (
              <span style={{ color: 'red' }}>
                {errores.usuario}
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

      <Button variant="success" onClick={verificarUsuario } disabled={deshabilitarBoton}>Ingresar</Button>{' '}
    </Form>
  );
}

export default IngresarUsuario;