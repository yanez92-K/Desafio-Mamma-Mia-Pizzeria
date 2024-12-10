export const fetchData = async ({data: { endpoint, options = {} }, callback, errorCallback,}) => {
  
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
