
import "./Cart.css";

import { currency } from "../../utils/NumberFormat";
import CartItem from "../../Components/CardItem/CardItem";
import { useCart } from "../../Context/CartContext";
import { usePizzas } from "../../Context/PizzasContext";
import { useUser } from "../../Context/UserContext";
import Form from "../../components/Form/Form";

const Cart = () => {
  const { cart, cartTotal, buyCart, clearCart } = useCart()
  const { findPizza } = usePizzas()
  const { token } = useUser();

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
             <Form
               submit={{
                 callback: buyCart,
                 title: "Pagar",
                 success: "Compra realizada con exito!!",
                 variant: "dark",
                 disabled: !token,
               }}
               reset={{
                 callback: clearCart,
                 title: "🛒Vaciar carro",
               }}
             >
               <p className="h1 m-0 text-center text-md-start">
                 Total: {currency(cartTotal)}
               </p>
             </Form>
           </>
         )}
       </ul>
     </div>
   </main>
 );
}

export default Cart;
