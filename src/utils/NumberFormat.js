export const currency = (valor = 0) =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(
    valor
  );
