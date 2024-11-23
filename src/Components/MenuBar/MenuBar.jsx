import { useContext } from "react";
import Container from "react-bootstrap/Container";
import { currency } from "../../utils/NumberFormat";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

const MenuBar = () => {
  const token = true; // Cambia a true si el usuario está logueado
  const { cartTotal } = useContext(CartContext)

    return (
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
        className="px-1 px-lg-4"
      >
        <Container>
          <Link to="/" className="navbar-brand">
            Pizzería Mamma Mia!
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                🍕 Home
              </Link>
              {token ? (
                <>
                  <Link to="/profile" className="nav-link">
                    🔓 Profile
                  </Link>
                  <Link to="/logout" className="nav-link">
                    🔒 Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link">
                    🔐 Login
                  </Link>
                  <Link to="/register" className="nav-link">
                    🔐 Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Link to="/cart" className="mx-auto btn btn-outline-info">
          🛒 Total: {currency(cartTotal)}
        </Link>
      </Navbar>
    );
};

export default MenuBar;
