/* eslint-disable consistent-return */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable arrow-body-style */
const BASE_URL = 'https://auth.nomoreparties.co';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Код ошибки: ${res.status}`);
}

function request(endpoint, options) {
  return fetch(`${BASE_URL}/${endpoint}`, options).then(checkResponse);
}

export const register = ({ email, password }) => {
  return request(`signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export const login = ({ email, password }) => {
  return request(`signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    if (res.token) {
      localStorage.setItem('jwt', res.token);
      return res;
    }
  });
};
export const checkToken = (token) => {
  return request(`users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
