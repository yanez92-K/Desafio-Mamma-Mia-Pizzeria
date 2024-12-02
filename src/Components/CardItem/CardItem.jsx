import { Button, Row, Col } from "react-bootstrap";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { BsTrash3Fill } from "react-icons/bs";
import { useCart } from "../../Context/CartContext";

const CartItem = ({ pizza, count }) => {
  const { modifyCount } = useCart();
  const { id, name, price, img } = pizza;

  return (
    <Row className="align-items-center my-3">
      <img src={img} alt={name} className="col-4 col-md-3 img-fluid" />
      <Col className="col-md-6">
        <h5 className="text-capitalize">{name}</h5>
        <p>
          Price: <strong>${price * count}</strong>
        </p>
        <small className="text-muted">Unit Price: ${price}</small>
      </Col>
      <Col className="col-md-3 d-flex align-items-center">
        <Button
          variant="outline-danger"
          className="px-2"
          onClick={() => modifyCount(id, "rem")}
        >
          {count > 1 ? <IoMdRemove /> : <BsTrash3Fill />}
        </Button>
        <span className="mx-2">{count}</span>
        <Button
          variant="outline-primary"
          className="px-2"
          onClick={() => modifyCount(id, "add")}
        >
          <IoMdAdd />
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;
