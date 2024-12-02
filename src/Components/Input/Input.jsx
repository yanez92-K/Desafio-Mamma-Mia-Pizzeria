
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

export default Input;


