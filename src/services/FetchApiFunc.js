const fetchApiFunc = async (method, URL, body) => {
  let res;

  if (method === 'GET') {
    res = await fetch(URL);
  } else if (method === 'POST') {
    res = await fetch(URL, {
      method: 'post',
      body: body,
      headers: { 'Content-Type': 'application/json' },
    });
  } else if (method === 'PUT') {
    res = await fetch(URL, {
      method: 'put',
      body: body,
      headers: { 'Content-Type': 'application/json' },
    });
  } else if (method === 'DELETE') {
    res = await fetch(URL, {
      method: 'delete',
      body: body,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return res;
};

export default fetchApiFunc;
