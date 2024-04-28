import logo from './logo.svg';
import './App.css';
import { Col, Container, Row, Button, Alert } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MyNavbar from './Components/MyNavbar';

function App() {
  return (
    <Router>
      <Container fluid >
        <Row>
          <Col>
            <MyNavbar/>
          </Col>
        </Row>
      </Container>
    </Router>

  );
}

export default App;
