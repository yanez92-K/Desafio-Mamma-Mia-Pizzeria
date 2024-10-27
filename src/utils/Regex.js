// regex.js

const checkRegex = (str, title, error, pattern) => {
  if (!str) return `${title} is required`;
  return pattern.test(str) ? null : error;
};

export const checkEmail = (str) =>
  checkRegex(
    str,
    "Email",
    "Porfavor Ingrese una dirección de mail válido",
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  );

export const checkPassword = (str) =>
  checkRegex(
    str,
    "Password",
    "El password debe tener al menos 6 caracteres",
    /^.{6,}$/
  );
