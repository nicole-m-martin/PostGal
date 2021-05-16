const fetchApiFunc = async (method, URL, body) => {
  let res;

  if (method === 'GET') {
    res = await fetch(URL);
  } else {
    res = await fetch(URL, {
      method: method,
      body: body,
      headers: { 'Content-Type': 'application/json' },
    });

    return res;
  }
};
