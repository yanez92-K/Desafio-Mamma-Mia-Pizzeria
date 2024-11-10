export const fetchData = async ({ data, callback, errorCallback }) => {
  const { endpoint, options = {} } = data;

  try {
    const res = await fetch(endpoint, options);

    if (!res.ok) {
      const errorMessages = {
        400: "Solicitud no exitosa",
        403: "Sin autorización para consultar",
        404: "No se encontró el servidor",
        500: "El servidor no pudo procesar la solicitud",
      };
      throw new Error(errorMessages[res.status] || res.statusText);
    }

    const result = await res.json();
    callback(result);
    errorCallback(null);
  } catch (err) {
    errorCallback(err);
  }
};
