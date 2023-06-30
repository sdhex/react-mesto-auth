/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-underscore-dangle */

import { apiConfig } from './constants';

export default class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Код ошибки: ${res.status}`);
  }

  _request(endpoint, options) {
    return fetch(`${this._baseUrl}/${endpoint}`, options).then(
      this._checkResponse
    );
  }

  getCards() {
    return this._request(`cards`, {
      headers: this._headers,
    });
  }

  addCard(data) {
    return this._request(`cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
  }

  deleteCard(cardId) {
    return this._request(`cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  getUserInfo() {
    return this._request(`users/me`, {
      method: 'GET',
      headers: this._headers,
    });
  }

  setUserInfo(data) {
    return this._request(`users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
  }

  setUserAvatar(data) {
    return this._request(`users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return this._request(`cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers,
      });
    }
    return this._request(`cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }
}

export const api = new Api(apiConfig);
