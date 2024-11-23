import { useContext } from "react";
import { currency } from "../../utils/NumberFormat";

import IngredientList from "../IngredientList/IngredientList";
import {
  Button,
  Container,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";


const CardPizza = ({ pizza: { id, name, price, ingredients, img } }) => {
  const { modifyCount } = useContext(CartContext)

  return (
    <Container className="p-4 py-md-5">
      <Card>
        <Card.Img variant="top" src={img} className="h-100" />
        <Card.Body>
          <Card.Title className="mb-0">Pizza {name}</Card.Title>
        </Card.Body>
        <ListGroup className="rounded-0 border-0 text-center">
          <ListGroupItem className="border-start-0 border-end-0">
            <p className="fs-3 fw-bold text-dark mb-1">Ingredientes:</p>
            <IngredientList ingredients={ingredients} className="" />
          </ListGroupItem>
          <ListGroupItem className="border-start-0 border-end-0 border-bottom-0">
            <p className="h4 my-2">Precio:{currency(price)}</p>
          </ListGroupItem>
        </ListGroup>
        <Card.Footer className="d-flex justify-content-evenly mb-3 bg-white">
          <Button variant="outline-dark">Ver más 👀</Button>
          <Button variant="dark" onClick={() => modifyCount(id, "add")}>
            Añadir 🛒
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default CardPizza;
