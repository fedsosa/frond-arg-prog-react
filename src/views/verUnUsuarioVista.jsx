import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";


const Ver= () =>{
  const { id } = useParams();
  

  /*const PonerListas= async () => {
        const ListaDelBack =  await axios.get('http://localhost:3000/usuarios')

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
       
      </Card.Body>
      
    </>
  )
}

export default  Ver;
