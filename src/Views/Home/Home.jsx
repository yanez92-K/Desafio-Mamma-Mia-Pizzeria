import Header from "../../Components/Header/Header";
import CardPizza from "../../Components/CardPizza/CardPizza";
import { useState } from "react";
import { pizzas } from "../../pizzas";
import { CardGroup, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Home() {
  const [listPizzas, setLisPizzas] = useState(pizzas);

  return (
    <main>
      <Header />
      <Container className="p-4 py-md-4">
        <CardGroup>
          <Row
            xs={3}
            md={4}
            className="g-4 d-flex flex-wrap gap-4 justify-content-center mt-5 h-50"
          >
            {listPizzas.map((pizzas) => (
              <CardPizza
                key={pizzas.id}
                name={pizzas.name}
                price={pizzas.price}
                ingredients={pizzas.ingredients}
                img={pizzas.img}
              />
            ))}
          </Row>
        </CardGroup>
      </Container>
    </main>
  );
}

export default Home;
