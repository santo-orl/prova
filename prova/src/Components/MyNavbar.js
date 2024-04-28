import { Container, Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function MyNavbar() {
    return (
        <Navbar expand="lg" bg="light" >
        <Container>
        <Navbar.Brand href="#home">Nome sito + ico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us </Nav.Link>
            <Nav.Link href="#link">Staff </Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default MyNavbar;