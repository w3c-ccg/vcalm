const fetch = require('node-fetch');
const { AbortError } = require('node-fetch');
const AbortController = require('abort-controller');

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

  // Abort request if it takes more than 1s
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 1000);
  try {
    const res = await fetch(urlWithParams, {
      headers,
      method: 'post',
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    const resBody = await res.json();
    return { status: res.status, body: resBody };
  } catch (error) {
    if (error && error.type === 'aborted') {
      return { status: 408 };
    }
  } finally {
    clearTimeout(timeout);
  }

};

module.exports = {
    postJson,
    getJson
};
