import { Col, Container, Image, Row } from "react-bootstrap";

const Error = ({ error: { name, message }, img }) => {
  return (
    <Container className={img ? "mt-2" : "mt-4"}>
      {img && (
        <Row>
          <Image src={img} className="col-6 col-md-2 mx-auto" />
        </Row>
      )}
      <Row>
        <Col className="col-md-6 mx-auto text-center">
          <p className="text-danger h2">{name}:</p>
          <p className="fs-3">{message}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
