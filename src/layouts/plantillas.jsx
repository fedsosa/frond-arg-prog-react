
import { Navegador} from './../components/Relatos.jsx'
import Card from 'react-bootstrap/Card';



const Plantilla = ({children}) =>{
  

  return (
    <>
      <div style={{ padding:40 }}>    
       < Navegador/>
       <Card>
       {children}
       </Card>

    <Card>
      <Card.Body>Relatos</Card.Body>
    </Card>
       </div>

    </>
  )
}

export {Plantilla}
