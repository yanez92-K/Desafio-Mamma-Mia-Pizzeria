import Input from "../../Components/Input/Input";
import { showSweetAlert } from "../../utils/Sweet-Alert";
import { Row, FormLabel, Button, Col } from "react-bootstrap";

const Form = ({ children, inputs, setValue, submit, reset }) => {
  const resetForm = () => reset?.callback();

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      if (inputs) {
        const errors = inputs
          .map(({ invalid }) => invalid())
          .filter((el) => el);
        if (errors.length) throw { errors };
      }

      const result = await submit.callback();
      if (result?.error) throw { errors: [result.error] };

      showSweetAlert({
        message: submit.success || "Datos enviados al servidor",
        success: true,
      });
    } catch ({ errors }) {
      showSweetAlert({
        message: `Ocurrieron los siguientes errores:`,
        list: errors,
      });
    }
  };
  return (
    <form
      onSubmit={sendForm}
      onReset={resetForm}
      className="d-flex flex-column justify-content-center gap-3 mt-3"
    >
      {children}

      {inputs?.map(({ id, label, prop, type, invalid, required }) => (
        <Row key={id} className="form-group">
          <FormLabel htmlFor={id} className="col-md-4">
            {label}: {required && <span className="text-danger">*</span>}
          </FormLabel>
          <Input
            className="col-md-8"
            type={type}
            id={id}
            invalid={invalid && invalid()}
            setValue={{ callback: setValue, prop }}
          />
        </Row>
      ))}

      <Row className="justify-content-center align-items-center">
        <Col xs={6} md={4} className="d-flex justify-content-center">
          <Button
            type="submit"
            variant={submit.variant || "outline-dark"}
            className="btn"
            style={{
              height: "55px",
              width: "150px",
              fontSize: "16px",
            }}
            disabled={submit.disabled}
          >
            {submit.title}
          </Button>
        </Col>

        {reset && (
          <Col xs={6} md={4} className="d-flex justify-content-center">
            <Button
              type="reset"
              variant="outline-dark"
              className="btn"
              style={{
                height: "55px",
                width: "150px",
                fontSize: "16px",
              }}
            >
              {reset.title}
            </Button>
          </Col>
        )}
      </Row>
    </form>
  );
};

export default Form;
