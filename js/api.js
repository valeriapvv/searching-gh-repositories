const load = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return response;
};

const send = async ({
  urlEndPoint,
  searchString,
  onSuccess,
  onFail,
  onFinal,
}) => {
  const query = `q=${encodeURIComponent(`${searchString} in:name`)}`;

  try {
    const response = await load(`${urlEndPoint}?${query}`);

    const data = await response.json();

    onSuccess(data);
  } catch(error) {
    onFail(error);
  }

  onFinal();
};

export {
  send,
};
