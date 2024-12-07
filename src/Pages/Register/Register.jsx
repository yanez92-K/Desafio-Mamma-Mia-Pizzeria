import { useState } from "react";
import Swal from "sweetalert2";
import Form from "../../Components/Form/Form"
import Input from "../../Components/Input/Input";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    // Validación de campos vacíos
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Todos los campos son obligatorios",
        icon: "error",
      });
      return; 
    }

    // Validación de contraseñas iguales
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden",
      });
      return;
    }

    // Validación de longitud de la contraseña
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La contraseña debe tener al menos 6 caracteres",
      });
      return;
    }

    // Mensaje de éxito si todas las validaciones pasan
    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: "Tu cuenta ha sido creada correctamente",
    });
  };

  return (
    <main>
      <div className="col-10 col-lg-5 mx-auto pt-5">
        <Form title="Register" onSubmit={handleSubmit}>
          <div className="d-flex align-items-center w-100 gap-5">
            <label htmlFor="email" className="form-label">
              Email: <span className="text-danger">*</span>
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex align-items-center w-100 gap-3">
            <label htmlFor="password" className="form-label">
              Password: <span className="text-danger">*</span>
            </label>
            <Input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex align-items-center w-100 gap-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password: <span className="text-danger">*</span>
            </label>
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
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
          Register
          </button>
        </Form>
      </div>
    </main>
  );
};

export default Register;

