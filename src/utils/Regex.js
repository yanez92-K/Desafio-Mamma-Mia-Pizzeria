const checkRegex = (str, title, error, pattern) => {
  if (!str?.trim()) return `${title} es obligatorio`; 
  return pattern.test(str) ? null : error; 
};

// Valida el email
export const checkEmail = (str) =>
  checkRegex(
    str,
    "Email",
    "Por favor, ingrese una dirección de correo válida",
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  );

// Valida el password
export const checkPassword = (str) =>
  checkRegex(
    str,
    "Password",
    "La contraseña debe tener al menos 6 caracteres",
    /^.{6,}$/ 
  );
