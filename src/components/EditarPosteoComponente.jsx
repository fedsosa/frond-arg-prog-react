import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const EditarPosteo = (props) => {
    const { id } = props;

    const [titulo, setTitulo] = useState('');
    const [narrar, setNarrar] = useState('');
    
    const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
    const [errores, setErrores] = useState({});

    const navigate = useNavigate();



    const usarTitulo = (e) => {
        const tituloValue = e.target.value

        setTitulo(tituloValue );
    }
    const usarNarrar = (e) => {
        const narrarValue = e.target.value

        setNarrar(narrarValue);
    }
    


    const verificarPosteo = async () => {
        let misErrores = {}
        if (titulo.length === 0) {

            misErrores.titulo = 'Debe introducir el titulo'
        }
        if (narrar.length === 0) {

            misErrores.narrar = 'Debe introducir una narracion '
        }
        
        setErrores(misErrores);

        if (Object.entries(misErrores).length === 0) {

            setDeshabilitarBoton(true);

           

            await mandarDatos()
        }

    }

    const mandarDatos = async () => {
        const url = 'http://localhost:3000/editarPost'

        const datos = {
            id: id,
            titulo: titulo,
            narrar: narrar,
            
        }

        try {
            const respuesta = await axios.put(url, datos);

            if (respuesta.status === 200) {
                return navigate('/')
            } else {
                setErrores({ error: 'ocurrio un error al interno al editar' })
            }

        } catch (error) {
            setErrores({ error: 'ocurrio un error al editar' })
        }

        setDeshabilitarBoton(false);
         }

          const mostrardatos = async ()=>{
            const endpoint = 'http://localhost:3000/posteos' + '/' + id;

            try {
                const respuesta = await axios.get(endpoint )  
                const posteos = respuesta.data;            
            if (respuesta.status === 200) {
                setTitulo(posteos.titulo)
                setNarrar(posteos.narrar)
                
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
                        Titulo
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type='text' onInput={usarTitulo} defaultValue={usuario}/>
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
                        <Form.Control type="text" onInput={usarNarrar} defaultValue={contraseña}/>
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

                <Button variant="success" onClick={verificarPosteo} disabled={deshabilitarBoton}>Editar</Button>{' '}
            </Form>
        );
    }

export default EditarPosteo ; 