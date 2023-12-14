import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAutent } from './../context/autentContex.jsx';


const Navegador=()=> {
  const {usuario, logout} = useAutent();
 const desconectarUsuario = () =>{
      logout();
 }



  return (
   <>
   <div > 
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{ background:"powderblue"   }}>
        <Navbar.Brand href="/">Relatos de viajes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Ver los relatos</Nav.Link>
            
            {
               usuario ? (
                 <>
                 <Nav.Link onClick={desconectarUsuario}>Cerrar sesiôn</Nav.Link>
                 <Nav.Link href="/posteo">Post</Nav.Link> 
                 </>
                 ) : (
                      <>
                      <Nav.Link href="/registrar">Registrarse</Nav.Link>
                      <Nav.Link href="/Ingresar">Iniciar sesion</Nav.Link>
                      </>

                 )
             }
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
   
   </>

  )
}

export {Navegador};