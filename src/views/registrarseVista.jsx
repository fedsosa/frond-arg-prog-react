import Card from 'react-bootstrap/Card';
import LoginUsuario from '../components/loginComponente';
import { useState,useEffect } from 'react';
import axios from 'axios';


const Registrar=() =>{

  /*const [lista,setLista] = useState ([])

  const PonerListas= async () => {
       // const ListaDelBack =  await axios.get('http://localhost:3000/crearLogin')

    if(ListaDelBack.status===200){
      setLista(ListaDelBack.data)
    }
   
}

useEffect ( ()=>{

  PonerListas ();

}, []);*/



 return (
    <> 
      <Card.Body>
        <LoginUsuario />
      </Card.Body>
       
    </>
  )
}

export default  Registrar;
