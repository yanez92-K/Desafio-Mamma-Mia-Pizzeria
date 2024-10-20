import Container from "react-bootstrap/Container";
import { currency } from "../../utils/NumberFormat";
import Nav from "react-bootstrap/Nav";
import { Button, Navbar } from "react-bootstrap";

const MenuBar = () => {
  const token = false; // Cambia a true si el usuario está logueado
  const total = 25000; // Total de la compra

  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
      className="px-2 px-lg-4"
    >
      <Container>
        <Navbar.Brand href="/">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
            <Button variant="outline-light" href="/">
              🍕 Home
            </Button>
            {token ? (
              <>
                <Button variant="outline-light">🔒 Logout</Button>
                <Button variant="outline-light">🔓 Profile</Button>
              </>
            ) : (
              <>
                <Button variant="outline-light">🔐 Login</Button>
                <Button variant="outline-light">🔐 Register</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant="outline-info" className="mx-0">
        🛒 Total: {currency(total)}
      </Button>
    </Navbar>
  );
};

export default MenuBar;
