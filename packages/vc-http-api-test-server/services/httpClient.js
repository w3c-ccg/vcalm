const fetch = require('node-fetch');

const getJson = async (url, requestAuthorization) => {
  let headers = {
    Accept: 'application/ld+json',
  };

  if (requestAuthorization && requestAuthorization.type === "oauth2-bearer-token") {
    headers.Authorization = `Bearer ${requestAuthorization.accessToken}`
  }

  const res = await fetch(url, {
    headers,
    method: 'get',
  });

  const resBody = await res.json();
  if(res.status > 300) {
    console.error('ERROR with GET: ', url);
    console.error(resBody);
  }
  return res;
};

const postJson = async (url, body, requestAuthorization = {}) => {
  console.log(url);
  console.log(requestAuthorization.headers);
  let headers = {
    Accept: 'application/ld+json,application/json',
    'Content-Type': 'application/json',
  };

  if (requestAuthorization && requestAuthorization.type === "oauth2-bearer-token") {
    headers.Authorization = `Bearer ${requestAuthorization.accessToken}`
  }

  if (requestAuthorization.headers) {
    headers = {
      ...headers,
      ...requestAuthorization.headers,
    };
  }

  let urlWithParams = url;
  const params = new URLSearchParams();
  if (requestAuthorization.query) {
    Object.entries(requestAuthorization.query).forEach(([key, value]) => {
      params.append(key, value);
    });
    urlWithParams = `${url}?${params.toString()}`;
  }

  const res = await fetch(urlWithParams, {
    headers,
    method: 'post',
    body: JSON.stringify(body),
  });
  console.log(urlWithParams, res);
  const resBody = await res.json();

  return {status: res.status, body: resBody};
};

module.exports = {
    postJson,
    getJson
};
