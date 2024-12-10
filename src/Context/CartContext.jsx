import { createContext, useContext, useEffect, useState } from "react";
import { usePizzas } from "./PizzasContext";
import { fetchData } from "../utils/Fetch";
import { useUser } from "./UserContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [cartTotal, setCartTotal] = useState(0);
  const { findPizza } = usePizzas();
  const { token } = useUser();

  useEffect(() => {
    setCartTotal(
      cart.reduce((acc, { id, count }) => acc + findPizza(id).price * count, 0)
    );
  }, [cart, findPizza, setCartTotal]);

  const modifyCount = (id, type) => {
    setCart((prev) => {
      const itemIndex = prev.findIndex((el) => el.id === id);
      let newArr = [...prev];

      if (itemIndex === -1) {
        // Agregar un nuevo artículo al carrito
        newArr.push({ id, count: 1 });
      } else {
        // Modificar el conteo de un artículo existente
        const newCount =
          type === "add"
            ? newArr[itemIndex].count + 1
            : newArr[itemIndex].count - 1;
        newArr[itemIndex] = { id, count: newCount };
      }

      localStorage.setItem("cart", JSON.stringify(newArr));
      return newArr;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const buyCart = async () => {
    let result;
    await fetchData({
      data: {
        endpoint: "http://localhost:5000/api/checkouts",
        options: {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(cart),
        },
      },
      callback: () => clearCart(),
      errorCallback: async (error) => {
        result = { error: await error?.message };
      },
    });
    return result;
  };

  const context = { cart, cartTotal, setCart, modifyCount, clearCart, buyCart };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
