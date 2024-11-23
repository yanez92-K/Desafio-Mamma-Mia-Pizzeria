import { createContext, useContext, useEffect, useState } from "react";
import { PizzasContext } from "./PizzasContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const { findPizza } = useContext(PizzasContext);

  // Calcular el total del carrito
  useEffect(() => {
    const total = cart.reduce(
      (acc, { id, count }) => acc + findPizza(id).price * count,
      0
    );
    setCartTotal(total);
  }, [cart, findPizza, setCartTotal]);

  // Modificar la cantidad de un producto en el carrito
    const modifyCount = (id, action) => {
    setCart((prev) => {
        const existingItem = prev.find((item) => item.id === id);
        if (!existingItem) {
        return [...prev, { id, count: 1 }];
        }

        const updatedCart = prev.map((item) =>
        item.id === id
            ? {
                ...item,
                count:
                action === "add" ? item.count + 1 : Math.max(item.count - 1, 0),
            }
            : item
        );

        return updatedCart.filter((item) => item.count > 0);
    });
    };


  return (
    <CartContext.Provider value={{ cart, cartTotal, modifyCount, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
