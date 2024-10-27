import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ title, onSubmit, children }) => {

  return (
    <form
      onSubmit={onSubmit}
      className="d-flex flex-column align-items-start col-10 col-l-5 mx-auto pt-5"
    >
      <h2 className="text-center align-items-center mb-4 gap-2">{title}</h2>
      <div className="form-content w-200 d-flex flex-column align-items-center gap-4">
        {children}
      </div>
      <button
        type="submit"
        className="btn col-6 col-md-4 mx-auto mt-3 square border border-dark"
        style={{
          transition: "background-color 0.3s ease",
          backgroundColor: "white",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "black";
          e.currentTarget.style.color = "white";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.color = "black";
        }}
      >
        Login
      </button>
    </form>
  );
};

// Validación de props
Form.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;


