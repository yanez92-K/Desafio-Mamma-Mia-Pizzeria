import { Col, Button, Container, Image } from "react-bootstrap";
import { HiOutlineLogout } from "react-icons/hi";
import { useEffect, useState } from "react";

import avatar from "./avatar.gif";
import { useUser } from "../../Context/UserContext";

const Profile = () => {
  const { storedEmail, logout, me } = useUser();
  const [email, setEmail] = useState();

  useEffect(() => {
    if (storedEmail) {
      setEmail(storedEmail);
      return;
    }
    const callback = ({ email }) => setEmail(email);
    const errorCallback = (err) => err && setEmail("ERROR al recuperar Datos");
    me(callback, errorCallback);
  }, [storedEmail, me]);

  return (
    <main>
      <Container className="mt-3 d-flex flex-column align-items-center">
        <Col xs={12} className="text-center mb-3">
          <Image src={avatar} className="col-6 col-md-2 mx-auto" />
        </Col>
        <Col xs={12} className="text-center fs-5 mb-3">
          <span className="fw-semibold">Email:</span> {email}
        </Col>
        <Col xs={12} className="text-center">
          <Button
            variant="outline-dark"
            className="col-6 col-md-2 mt-4 mt-md-0"
            onClick={logout}
          >
            <HiOutlineLogout size="1.7rem" className="pb-1" /> Cerrar sesión
          </Button>
        </Col>
      </Container>
    </main>
  );
};

export default Profile;
