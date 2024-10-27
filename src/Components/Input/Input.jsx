
import PropTypes from "prop-types";


const Input = ({ type, id, invalid, value, onChange, errorMessage }) => {
  return (
    <div>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className={`form-control ${invalid ? "is-invalid" : ""}`}
      />
      {invalid && <div className="text-danger mt-1">{errorMessage}</div>}{" "}
    </div>
  );
};


Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default Input;
