import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/Fetch";

const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState();

  // const findPizza = (id) => pizzas.find((el) => el.id === id) || {};
  const findPizza = (id) => {
    const pizza = pizzas.find((el) => el.id === id);
    return pizza || {};
  };


  useEffect(() => {
    fetchData({
      data: { endpoint: "http://localhost:5000/api/pizzas" },
      callback: setPizzas,
      errorCallback: setError,
    });
  }, [setPizzas, setError]);

  const context = { pizzas, error, findPizza };
  return <PizzasContext.Provider value={context}>{children}</PizzasContext.Provider>
};
export const usePizzas = () => useContext(PizzasContext);


export default PizzasProvider;
