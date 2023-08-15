import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/Home">India Tours & Travels ✈️</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Contact">Contactus</Nav.Link>
            <Nav.Link href="/ListEmp">ListEmp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            
    </>
  );
}