import { pizzas } from "../../utils/pizzas";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState(
    pizzas.map((pizzas) => ({ ...pizzas, cantidad: 1 })).slice(0, 3)
  );

  const updateQuantity = (id, dess) => {
    setCart((prevCart) =>
      prevCart
        .map((cart) =>
          cart.id === id
            ? { ...cart, cantidad: Math.max(0, cart.cantidad + dess) }
            : cart
        )
        .filter((cart) => cart.cantidad > 0)
    );
  };

  const sumaTotal = cart.reduce(
    (sum, render) => sum + (render.price || 0) * (render.cantidad || 0),
    0
  );

  const pagoRealizado = () => {
    Swal.fire({
      title: "Pago realizado con exito!",
      text: "Presiona ok para continuar",
      icon: "success",
      confirmButtonText: "ok",
    });
  };

  const formatoTotal = sumaTotal.toLocaleString("es-Es");

  return (
    <>
      <div className="container my-10">
        <ul>
          <h2>Detalles del Pedido:</h2>
          {cart.map((pizzas) => (
            <li key={pizzas.id} className="card">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src={pizzas.img}
                    className="img-fluid"
                    alt={pizzas.name}
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">{pizzas.name}</h5>
                    <p className="card-text">
                      Precio: ${pizzas.price * pizzas.cantidad}
                    </p>
                    <div className="botones">
                      <Button
                        variant="outline-primary"
                        className="btn me-2 square border border-2 border-primary"
                        onClick={() => updateQuantity(pizzas.id, 1)}
                      >
                        +
                      </Button>
                      <p>{pizzas.cantidad}</p>
                      <Button
                        variant="outline-danger"
                        className="btn square border border-2 border-danger"
                        onClick={() => updateQuantity(pizzas.id, -1)}
                      >
                        -
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="Total">
        <h3>Total: ${formatoTotal}</h3>
        <Button onClick={() => pagoRealizado()} className="Buy btn-dark">
          Pagar
        </Button>
      </div>
    </>
  );
}
export default Cart;
