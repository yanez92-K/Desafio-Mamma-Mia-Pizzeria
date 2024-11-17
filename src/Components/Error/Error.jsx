import { Col, Container, Image, Row } from "react-bootstrap";

const Error = ({ error: { name, message }, img }) => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          {img && <Image src={img} className="mb-3 w-50" fluid />}
          <p className="text-danger h2">{name}:</p>
          <p className="fs-4">{message}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
