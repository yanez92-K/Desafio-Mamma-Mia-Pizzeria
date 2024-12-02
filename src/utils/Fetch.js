export const fetchData = async ({ data, callback, errorCallback }) => {
  const { endpoint, options = {} } = data;

  try {
    const res = await fetch(endpoint, options);

    if (!res.ok)
      throw {
        code: res.status,
        name: `Error ${res.status}`,
        message: res.statusText,
      };

    const result = await res.json();
    callback(result);
    errorCallback(null);
  } catch (err) {
    errorCallback(err);
  }
};
