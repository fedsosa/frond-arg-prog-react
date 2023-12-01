
import { Navegador} from './../components/Relatos.jsx'
import Card from 'react-bootstrap/Card';



const Plantilla = ({children}) =>{
  
  return (
    <>
      <div   style={{ padding:40 }}> 
       
       < Navegador/>
       <Card>
       {children}
       </Card>

    
      <Card.Body>
        .....
      </Card.Body>
    
       </div>

    </>
  )
}

export {Plantilla}
