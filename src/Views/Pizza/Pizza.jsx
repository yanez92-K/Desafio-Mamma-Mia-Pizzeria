import { useEffect, useState } from "react";
import { Button, Container, Image, Row } from "react-bootstrap";

import Error from "../../Components/Error/Error";
import Header from "../../Components/Header/Header";
import { fetchData } from "../../utils/Fetch";
import { currency } from "../../utils/NumberFormat";
import IngredientList from "../../Components/IngredientList/IngredientList";

const Pizza = () => {
  const [pizza, setListPizza] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData({
      data: { endpoint: "http://localhost:5000/api/pizzas/p001" },
      callback: setListPizza,
      errorCallback: setError,
    });
  }, [setListPizza, setError]);

  const { name, price, desc, ingredients, img } = pizza;

  return (
    <main>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <Header />
          <Container className="p-3 p-md-4 py-md-5">
            <Row>
              <Image
                src={img}
                alt={`Imagen de pizza ${name}`}
                className="col-12 col-md-6 order-md-last mb-4"
              />
              <Row className="col-12 col-md-6 mb-md-5 pb-md-5">
                <h2 className="text-capitalize">Pizza {name}</h2>
                <p className="fs-5 mt-3">
                  <span className="text-secondary fw-bold text-dark">
                    💵 Precio:
                  </span>{" "}
                  {currency(price)}
                </p>
                <IngredientList ingredients={ingredients} />
                <p className="fs-5 fw-bold text-dark text-secondary mt-3 mb-2">
                  📝 Descripción:
                </p>
                <p>{desc}</p>
                <Button
                  variant="dark"
                  className="col-5 col-md-3 mx-auto mt-2 mb-3"
                >
                  Añadir 🛒
                </Button>
              </Row>
            </Row>
          </Container>
        </>
      )}
    </main>
  );
};

export default Pizza;
