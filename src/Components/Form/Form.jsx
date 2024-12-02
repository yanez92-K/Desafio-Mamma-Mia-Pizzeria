
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
    </form>
  );
};

export default Form;

