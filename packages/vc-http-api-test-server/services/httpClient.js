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

const postJson = async (url, body, requestAuthorization) => {
  let headers = {
    Accept: 'application/ld+json,application/json',
    'Content-Type': 'application/json',
  };

  if (requestAuthorization && requestAuthorization.type === "oauth2-bearer-token") {
    headers.Authorization = `Bearer ${requestAuthorization.accessToken}`
  }

  const res = await fetch(url, {
    headers,
    method: 'post',
    body: JSON.stringify(body),
  });
  const resBody = await res.json();

  return {status: res.status, body: resBody};
};

module.exports = {
    postJson,
    getJson
};