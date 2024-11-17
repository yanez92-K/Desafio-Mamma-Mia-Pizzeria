import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import CardsList from "../../Components/CardsList/CardsList"
import { fetchData } from "../../utils/Fetch";
import Error from "../../Components/Error/Error";

function Home() {
  const [Pizzas, setListPizzas] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData({
      data: { endpoint: "http://localhost:5000/api/pizzas" },
      callback: setListPizzas,
      errorCallback: setError,
    });
  }, []);

  return (
    <main>
      <Header />
      {error ? <Error error={error} /> : <CardsList data={Pizzas} />}
    </main>
  );
}


export default Home;
