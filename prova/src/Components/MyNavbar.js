import { Container, Nav, NavDropdown, Navbar, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function MyNavbar() {
    return (
        <Navbar expand="lg" bg="light" >
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/medical-team"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Nome sito
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Chi siamo </Nav.Link>
            <Nav.Link href="#link">Staff </Nav.Link>
            <Nav.Link href="#link">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default MyNavbar;