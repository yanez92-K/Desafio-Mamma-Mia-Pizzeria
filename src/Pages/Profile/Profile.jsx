
import { Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

import avatar from "./avatar.gif";

const Profile = () => {
  return (
    <main>
      <Container className="mt-3 d-flex flex-column align-items-center">
        <Col xs={12} className="text-center mb-3">
          <Image src={avatar} roundedCircle fluid />
        </Col>
        <Col xs={12} className="text-center fs-5 mb-3">
          <span className="fw-semibold">Email:</span> usuario@example.com
        </Col>
        <Col xs={12} className="text-center">
          <Link to="/logout" className="btn btn-outline-dark">
            <HiOutlineLogout size="1.7rem" className="pb-1" /> Cerrar sesión
          </Link>
        </Col>
      </Container>
    </main>
  );
};


export default Profile;
