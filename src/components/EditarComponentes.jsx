import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const EditarUsuario = (props) => {
    const { id } = props;

    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
    const [errores, setErrores] = useState({});

    const navigate = useNavigate();



    const usarUsuario = (e) => {
        const usuarioValue = e.target.value

        setUsuario(usuarioValue);
    }
    const usarContraseña = (e) => {
        const contraseñaValue = e.target.value

        setContraseña(contraseñaValue);
    }
    const usarNombre = (e) => {
        const nombreValue = e.target.value

        setNombre(nombreValue);
    }
    const usarApellido = (e) => {
        const apellidoValue = e.target.value

        setApellido(apellidoValue);
    }


    const verificarUsuario = async () => {
        let misErrores = {}
        if (usuario.length === 0) {

            misErrores.usuario = 'Debe introducir el Usuario'
        }
        if (contraseña.length === 0) {

            misErrores.contraseña = 'Debe introducir la contraseña'
        }
        if (nombre.length === 0) {

            misErrores.nombre = 'Debe introducir un nombre'
        }
        if (apellido.length === 0) {

            misErrores.apellido = 'Debe introducir un apellid'
        }
        setErrores(misErrores);

        if (Object.entries(misErrores).length === 0) {

            setDeshabilitarBoton(true);

           

            await mandarDatos()
        }

    }

    const mandarDatos = async () => {
        const url = 'http://localhost:3000/editar'

        const datos = {
            id: id,
            usuario: usuario,
            contraseña: contraseña,
            nombre: nombre,
            apellido: apellido,
        }

        try {
            const respuesta = await axios.put(url, datos);

            if (respuesta.status === 200) {
                return navigate('/verUsua')
            } else {
                setErrores({ error: 'ocurrio un error al interno al editar' })
            }

        } catch (error) {
            setErrores({ error: 'ocurrio un error al editar' })
        }

        setDeshabilitarBoton(false);
         }

          const mostrardatos = async ()=>{
            const endpoint = 'http://localhost:3000/usuario' + '/' + id;

            try {
                const respuesta = await axios.get(endpoint )  
                const usuario = respuesta.data;            
            if (respuesta.status === 200) {
                setUsuario(usuario.usuario)
                setContraseña(usuario.contraseña)
                setNombre(usuario.nombre)
                setApellido(usuario.apellido)

            } else {
                setErrores({ error: 'ocurrio un error al traer datos' })
                setDeshabilitarBoton(true);
            }


                 } catch (error) {
                    setErrores({ error: 'ocurrio un error al interno al ver datos' })
                   }

          }
                     useEffect(() =>{
                        mostrardatos();
                     },[]);



        return (
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Usuario
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type='text' onInput={usarUsuario} defaultValue={usuario}/>
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
                        <Form.Control type="text" onInput={usarContraseña} defaultValue={contraseña}/>
                        {
                            errores.contraseña && (
                                <span style={{ color: 'red' }}>
                                    {errores.contraseña}
                                </span>
                            )
                        }

                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        nombre
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" onInput={usarNombre} defaultValue={nombre}/>
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
                       apellido
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" onInput={usarApellido} defaultValue={apellido}/>
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

                <Button variant="success" onClick={verificarUsuario} disabled={deshabilitarBoton}>Editar</Button>{' '}
            </Form>
        );
    }

export default EditarUsuario 