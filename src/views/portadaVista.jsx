
import Card from 'react-bootstrap/Card';
import TablaDeRelatos from '../components/TablaDeRelatosComponentes.jsx'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Miportada=() =>{
  const [lista,setLista] = useState ([])

  const PonerListas= async () => {
        const ListaDelBack =  await axios.get('http://localhost:3000/posteos')

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
        <TablaDeRelatos lista={lista} />
      </Card.Body>
      
    </>
  )
}

export default  Miportada
