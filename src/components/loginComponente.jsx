import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";



const LoginUsuario = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
  const [errores, setErrores] = useState({});

  const navigate = useNavigate();

  const insertarUsuario = (e) => {
    const usuarioValue = e.target.value;

    setUsuario(usuarioValue);
  }
  const insertarContraseña = (e) => {
    const contraseñaValue = e.target.value;

    setContraseña(contraseñaValue);
  }

  const insertarNombre = (e) => {
    const nombreValue = e.target.value;

    setNombre(nombreValue);
  }

  const insertarApellido = (e) => {
    const apellidoValue = e.target.value;

    setApellido(apellidoValue);
  }


  const verificarLogin = async () => {
    let misErrores = {}
    if (usuario.length === 0) {

      misErrores.usuario = 'Debe introducir un Usuario'
    }
    if (contraseña.length === 0) {

      misErrores.contraseña = 'Debe introducir una contraseña'
    }
    if (nombre.length === 0) {

      misErrores.nombre = 'Debe introducir un nombre'
    }
    if (apellido.length === 0) {

      misErrores.apellido = 'Debe introducir un apellido'
    }
    setErrores(misErrores)

    if (Object.entries(misErrores).length === 0) {

      setDeshabilitarBoton(true);



      await mandarDatos()
    }

  }

  const mandarDatos = async () => {
    const url = ('http://localhost:3000/ingresar')

    const datos = {
      usuario: usuario,
      contraseña: contraseña,
      nombre: nombre,
      apellido: apellido,
    }
    try {
      const respuesta = await axios.post(url, datos);

      if (respuesta.status === 200) {
        return navigate('/verusua')
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
          <Form.Control type='text' onInput={insertarUsuario} />
          {
            errores.usuario && (
              <span style={{ color: 'red' }}>
                {errores.usuario}
              </span>
            )
          }

        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          contraseña
        </Form.Label>
        <Col sm="10">
          <Form.Control type='password' onInput={insertarContraseña} />
          {
            errores.contraseña && (
              <span style={{ color: 'red' }}>
                {errores.contraseña}
              </span>
            )
          }

        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Nombre
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' onInput={insertarNombre} />
          {
            errores.nombre && (
              <span style={{ color: 'red' }}>
                {errores.nombre}
              </span>
            )
          }

        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Apellido
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onInput={insertarApellido} />
          {
            errores.apellido && (
              <span style={{ color: 'red' }}>
                {errores.apellido}
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


      <Button variant="success" onClick={verificarLogin} disabled={deshabilitarBoton} >
        registar
      </Button>
    </Form>
  );
}

export default LoginUsuario;