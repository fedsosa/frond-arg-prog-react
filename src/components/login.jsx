import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';




const LoginUsuario=() => {
  const [Usuario, setUsuario] =useState('') ;
  const [Contraseña, setContraseña] =useState('') ;

  const CambiarUsuario= (e) =>{

   setUsuario(e.target.value);

  }
  const CambiarContraseña= (e) =>{
  
    setContraseña(e.target.value);
  
    }

     const LoginRealizado=()=>{
      console.log(Usuario);
      console.log(Contraseña);
     }

     useEffect(()=> {
      LoginRealizado();
     },[]);


  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Usuario
        </Form.Label>
        <Col sm="10">
          <Form.Control type='email' placeholder="agregue su usuario" 
          onInput={CambiarUsuario}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Contraseña
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="ingrese una contraseña"
          onInput={CambiarContraseña} />
        </Col>
      </Form.Group>
      <Button variant="success" onClick={LoginRealizado}>registar</Button>{' '}
    </Form>
  );
}

export default LoginUsuario;