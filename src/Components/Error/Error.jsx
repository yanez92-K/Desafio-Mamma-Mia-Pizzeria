
const Error = ({ error: { name, message } }) => {
  return (
    <div className="row mt-5">
      <div className="col-md-4 mx-auto text-center">
        <p className="text-danger h2">{name}:</p>
        <p className="fs-3">{message}</p>
      </div>
    </div>
  );
};

export default Error;
