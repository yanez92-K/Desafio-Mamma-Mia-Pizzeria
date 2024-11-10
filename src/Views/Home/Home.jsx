import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import CardPizza from "../../Components/CardPizza/CardPizza";
// import { pizzas } from "../../pizzas";
import { CardGroup, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { fetchData } from "../../utils/Fetch";
import Error from "../../Components/Error/Error";

function Home() {
  const [listPizzas, setListPizzas] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData({
      data: { endpoint: "http://localhost:5000/api/pizzas" },
      callback: setListPizzas,
      errorCallback: setError,
    })
  }, [setListPizzas, setError])

  return (
    <main>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <Header />
          <Container className="p-4 py-md-5">
            <CardGroup>
              <Row
                xs={1}
                md={4}
                className=" d-flex flex-wrap gap-4 justify-content-center mt-5 h-50"
              >
                {listPizzas.map((pizza) => (
                  <CardPizza
                    key={pizza.id}
                    name={pizza.name}
                    price={pizza.price}
                    ingredients={pizza.ingredients}
                    img={pizza.img}
                  />
                ))}
              </Row>
            </CardGroup>
          </Container>
        </>
      )}
    </main>
  );
}

export default Home;
