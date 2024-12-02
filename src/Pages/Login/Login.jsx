
import { useState } from "react";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import { checkEmail, checkPassword } from "../../utils/Regex"; 
import Swal from "sweetalert2";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Inicializar un array para almacenar los mensajes de error
    const errors = [];

    // Verificar si los campos están vacíos y agrega mensajes de error
    if (!email.trim() && !password.trim()) {
      errors.push("Todos los campos son obligatorios.");
    } else {
      if (!email.trim()) {
        errors.push("El email es requerido.");
      }
      if (!password.trim()) {
        errors.push("La contraseña es requerida.");
      }
    }

    // Si hay errores, muestra el alert y sale de la función
    if (errors.length > 0) {
      Swal.fire({
        title: "Error!",
        text: errors.join(" "), 
        icon: "error",
      });
      return; 
    }

    // Validación usando regex
    const emailError = checkEmail(email);
    const passwordError = checkPassword(password);

    // Si hay errores de validación de regex
    if (emailError) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: emailError,
      });
      return; 
    }
    if (passwordError) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: passwordError,
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Login exitoso",
      text: "Has iniciado sesión correctamente.",
    });
  };

  return (
    <main>
      <div className="col-10 col-lg-5 mx-auto pt-5">
        <Form title="Login" onSubmit={handleSubmit}>
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
        </Form>
      </div>
    </main>
  );
};

export default Login;

