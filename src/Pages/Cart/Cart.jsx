
import "./Cart.css";

import { useContext } from "react";
import { currency } from "../../utils/NumberFormat";
import { Button } from "react-bootstrap";
import CartItem from "../../Components/CardItem/CardItem";
import { CartContext } from "../../Context/CartContext";
import { PizzasContext } from "../../Context/PizzasContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, cartTotal } = useContext(CartContext);
  const { findPizza } = useContext(PizzasContext);
  const pagoRealizado = () => {
    Swal.fire({
      title: "Pago realizado con exito!",
      text: "Presiona ok para continuar",
      icon: "success",
      confirmButtonText: "ok",
    });
  };

 return (
   <main>
     <div className="container my-10">
       <ul>
         <h2>Detalles del Pedido:</h2>
         {cartTotal === 0 ? (
           <p className="text-muted">El carrito está vacío.</p>
         ) : (
           <>
             {cart.map(({ id, count }) => (
               <CartItem key={id} pizza={findPizza(id)} count={count} />
             ))}
              <div className="Total">
                <h3>Total: {currency(cartTotal)}</h3>
                <Button variant="" className="Buy btn-dark">
                  Pagar
                </Button>
              </div>
           </>
         )}
       </ul>
     </div>
   </main>
 )
}

export default Cart;
