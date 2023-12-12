
import { Navegador} from '../components/RelatosNavegComponentes.jsx'
import Card from 'react-bootstrap/Card';




const Plantilla = ({children}) =>{
  
  return (
    <>
    <h2>RECUERDOS DE VIAJES </h2>
      <div style={{ padding:5, width:'1300px' }} > 
       
       < Navegador/>
       <Card>
       {children}
       </Card>


       </div>

    </>
  )
}

export {Plantilla}
