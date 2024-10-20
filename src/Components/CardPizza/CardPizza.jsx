import PropTypes from "prop-types";
import { currency } from "../../utils/NumberFormat";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import CardFooter from "react-bootstrap/CardFooter";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Container className="p-4 py-md-5">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="mb-0">Pizza {name}</Card.Title>
        </Card.Body>
        <ListGroup className="rounded-0 border-0 text-center">
          <ListGroupItem className="border-start-0 border-end-0">
            <p className="fs-5 fw-light text-secondary mb-1">Ingredientes:</p>
            <p className="mb-1">🍕 {ingredients.join(", ")}</p>
          </ListGroupItem>
          <ListGroupItem className="border-start-0 border-end-0 border-bottom-0">
            <p className="h4 my-2">Precio:{currency(price)}</p>
          </ListGroupItem>
        </ListGroup>
        <CardFooter className="d-flex justify-content-evenly mb-3 bg-white">
          <Button variant="outline-dark">Ver más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </CardFooter>
      </Card>
    </Container>
  );
};
// Validación de PropTypes
CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPizza;
