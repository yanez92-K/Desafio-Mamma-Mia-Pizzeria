import { useState } from "react";
import Form from "../../components/Form/Form";
import { checkEmail, checkPassword } from "../../utils/regex";
import { useUser } from "../../Context/UserContext";


const Register = () => {
  const { register } = useUser();
  const [registerData, setRegisterData] = useState({});
  const { email, password, confirmPassword } = registerData;

  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      prop: "email",
      required: true,
      invalid: () => checkEmail(email),
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      prop: "password",
      required: true,
      invalid: () => checkPassword(password),
    },
    {
      id: "confirm-password",
      label: "Confirm password",
      type: "password",
      prop: "confirmPassword",
      required: true,
      invalid: () =>
        password && password === confirmPassword
          ? null
          : "Las contraseñas no coinciden",
    },
  ];

  const handleSubmit = () => register(registerData);

  return (
    <main>
      <div className="col-10 col-md-5 mx-auto pt-5">
        <h2>Register</h2>
        <Form
          inputs={inputs}
          setValue={setRegisterData}
          submit={{
            callback: handleSubmit,
            title: "Register",
            success: "Registro exitoso!!",
          }}
        />
      </div>
    </main>
  );
};

export default Register;

