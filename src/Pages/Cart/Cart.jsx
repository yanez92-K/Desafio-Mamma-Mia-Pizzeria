
import "./Cart.css";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

import { currency } from "../../utils/NumberFormat";
import CartItem from "../../Components/CardItem/CardItem";
import { useCart } from "../../Context/CartContext";
import { usePizzas } from "../../Context/PizzasContext";
import { useUser } from "../../Context/UserContext";

const Cart = () => {
  const { cart, cartTotal } = useCart()
  const { findPizza } = usePizzas()
  const { token } = useUser();
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
               <p className="h1 mt-2 text-center text-md-start">
                 Total: {currency(cartTotal)}
               </p>
               <Button
                 variant="dark"
                 className="Buy btn-dark"
                 disabled={!token}
               >
                 Pagar
               </Button>
             </div>
           </>
         )}
       </ul>
     </div>
   </main>
 );
}

export default Cart;
