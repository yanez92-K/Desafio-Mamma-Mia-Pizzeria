
import Header from "../../Components/Header/Header";
import CardsList from "../../Components/CardsList/CardsList"
import Error from "../../Components/Error/Error";
import { usePizzas } from "../../Context/PizzasContext";

function Home() {
  const { error, pizzas } = usePizzas()

  return (
    <main>
      <Header />
      {error ? <Error error={error} /> : <CardsList data={pizzas} />}
    </main>
  );
};

export default Home;
