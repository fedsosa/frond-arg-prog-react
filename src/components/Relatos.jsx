import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navegador=()=> {
  return (
   <>
   <div > 
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{background:"grey" }}>
        <Navbar.Brand href="/">Relatos de viajes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Ver mas relatos</Nav.Link>
            <Nav.Link href="/registrar">Registrarse</Nav.Link>
            <Nav.Link href="/Ingresar">Ingresar Usuario</Nav.Link>
            <NavDropdown title="realizar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
   
   </>

  )
}

export {Navegador};