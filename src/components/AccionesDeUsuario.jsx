
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState,  useEffect } from 'react';

const UsePosteo = () => {
    const [titulo, setTitulo] = useState('');
    const [narrar, setNarrar] = useState('');
    const [autor, setAutor] = useState('');
    const [errores, setErrores] = useState({});
    const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);

    const insertarTitulo = (e) => {
        const tituloValue = e.target.value ;
    
        setTitulo(tituloValue);
      }
      const insertarNarrar= (e) => {
        const narrarValue = e.target.value ;
    
        setNarrar(narrarValue);
      }
    
      const insertarAutor= (e) => {
        const autorValue = e.target.value ;
    
        setAutor(autorValue);
      }
     
       const mandarDatos = async() => {
           const url = ('http://localhost:3000/crearPost')

           const datos = {
            tutulo: titulo,
            narrar: narrar,
            autor: autor,  
          }
          try {
            const respuesta = await axios.post(url, datos);
        console.log(respuesta )
            if (respuesta.status===200) {
              return navigate('/')
            } else {
              setErrores({ error: 'ocurrio un error al interno al registrarse' })
            }
         
           } catch (error) {
            setErrores({ error: 'ocurrio un error al interno al registrarse' })
           }
        
            setDeshabilitarBoton(false);
          }
       
           


    const Editar = (id) => {
        console.log('va a Editar el elemento ' + id)
    }

    const Borrar = (id) => {
        console.log('va a Borrar el elemento ' + id)
    }

    
    useEffect ( ()=>{

      mandarDatos();
    
    }, []);


    return (
        <>

            <Form.Control  type="text" onInput={insertarTitulo}  placeholder="Escriba un titulo" />
            <br />
            <Form.Control type="text" onInput={insertarNarrar} placeholder="Narrar un relato" />
            <br />
            <Form.Control  type="text" onInput={insertarAutor} placeholder="Escribe en autor" />

            <br />

            <div>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" onClick={mandarDatos}>postear</Button>
                    <Button variant="danger" onClick={() => Editar(key)}>eliminar</Button>
                    <Button variant="success" onClick={() => Borrar(key)}>editar</Button>
                </ButtonGroup>
            </div>


        </>

    );
}

export default UsePosteo;