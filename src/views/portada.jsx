
import Card from 'react-bootstrap/Card';

import TablaDeRelatos from './../components/TablaDeRelatos.jsx'
import { useState,useEffect } from 'react';


const Miportada=() =>{
  const [lista,setLista] = useState ([])

  const PonerListas= async () => {

    setLista([
    { relato:'blallblabla', usuario:'federico', comentario:'esoesoesoeso' },
    { relato:'xxxxxxxx', usuario:'olga', comentario:'rosario' },
    { relato:'byyyyyyyyyyy', usuario:'fmario', comentario:'rofo' },

    ])

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
