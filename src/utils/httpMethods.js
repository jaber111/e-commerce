import { getToken } from "../utils";
import { CONST_ACCESS_TOKEN } from "../utils/const";
import axios from "axios";

export function get(url, headers = null, params = null) {
  if (!headers) {
    let token = getToken(CONST_ACCESS_TOKEN);
    console.log(token);
    headers = {
      "Content-Type": "application/json"
    };
    if (token) {
      headers["Authorization"] = `bearer ${token}`;
    }
  }

  return axios({
    url,
    // timeout: 5000,
    method: "GET",
    headers,
    params
  })
    .then(response => {
      return {
        ...response.data,
        status: response.status
      };
    })
    .catch(error => error);
}

export function post(url, data, headers = null) {
  if (!headers) {
    let token = getToken(CONST_ACCESS_TOKEN);
    headers = {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    };
    if (token) {
      headers["Authorization"] = `bearer ${token}`;
    }
  }

  return axios({
    url,
    // timeout: 5000,
    method: "POST",
    data: JSON.stringify(data),
    headers
  })
    .then(response => {
      return {
        ...response.data,
        status: response.status
      };
    })
    .catch(error => error);
}

export function put(url, data, headers = null) {
  if (!headers) {
    let token = getToken(CONST_ACCESS_TOKEN);
    headers = {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    };
    if (token) {
      headers["Authorization"] = `bearer ${token}`;
    }
  }

  return axios({
    url,
    // timeout: 5000,
    method: "PUT",
    data: JSON.stringify(data),
    headers
  })
    .then(response => {
      return {
        ...response.data,
        status: response.status
      };
    })
    .catch(error => error);
}
