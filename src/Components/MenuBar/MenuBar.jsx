import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import { useCart } from "../../Context/CartContext";
import { currency } from "../../utils/NumberFormat";
import { useUser } from "../../Context/UserContext";

const MenuBar = () => {
  const { token, logout } = useUser();
  const { cartTotal } = useCart();

  const linkClassName = ({ isActive }) =>
    "nav-link" + (isActive ? " text-light" : "");
  const cartButtonClassName = ({ isActive }) =>
    "mx-auto btn " + (isActive ? "btn-info" : "btn-outline-info");
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
            <NavLink to="/" className={linkClassName}>
              🍕 Home
            </NavLink>
            {token ? (
              <>
                <NavLink to="/profile" className={linkClassName}>
                  🔓 Profile
                </NavLink>
                <button className="nav-link" onClick={logout}>
                  🔒 Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={linkClassName}>
                  🔐 Login
                </NavLink>
                <NavLink to="/register" className={linkClassName}>
                  🔐 Register
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <NavLink to="/cart" className={cartButtonClassName}>
        🛒 Total: {currency(cartTotal)}
      </NavLink>
    </Navbar>
  );
};

export default MenuBar;
