import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import axios from 'axios';
import MostrarUsuario from './../components/verUsuarioComponente.jsx'
import { useAutent } from '../context/autentContex.jsx';


const VerUsuario=() =>{
  const [lista,setLista] = useState ([])
  const {usuario} = useAutent();
  const PonerListas= async () => {
        const ListaDelBack =  await axios.get('http://localhost:3000/usuarios')

    if(ListaDelBack.status===200){
      setLista(ListaDelBack.data)
    }
   
}

   useEffect ( ()=>{


  PonerListas ();
   
    }, []);



  return (
    <>
      <Card.Body>
        { usuario ? ('Bienvenid@ ' +  usuario.nombre) : ' no se inicio sesiôn'}
        <MostrarUsuario lista={lista} />
      </Card.Body>
      
    </>
  )
}

export default  VerUsuario;
