import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Error from "../../Components/Error/Error";
import { TiArrowBack } from "react-icons/ti";
import ErrorGif from "./error.gif";

function NotFound() {
  const error = {
    name: "Error 404",
    message: "Página no encontrada",
  };
  return (
    <main>
      <Container className="d-flex flex-column align-items-center">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-4">
            <Error error={error} img={ErrorGif} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <Link to="/" className="btn btn-lg btn-dark mt-3">
              <TiArrowBack size="3rem" className="pb-2" />
              Volver al Inicio
            </Link>
          </Col>
        </Row>
      </Container>
    </main>
  );
}


export default NotFound;



