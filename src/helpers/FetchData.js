import {DEFAULT_ERROR_MESSAGE} from './Constants.js';

/* eslint-disable curly */
export const fetchData = ({
  url,
  method = 'POST',
  headers = {},
  body = {},
  checkResponseMode = (res, rej) => {
    if (res.ok) {
      const response = res.json();
      return response;
    } else if (res.status === 503)
      rej({
        status: false,
        appStatus: 'Maintenance',
        errors: {
          message: 'App is in maintanence mode, Please try again later',
        },
      });
    else if (res.status === 401)
      rej({
        status: false,
        appStatus: 'Unauthenticated',
        errors: {
          message: 'Your session has been expired, please login again!',
        },
      });
    else if (res.status === 422) {
      const response = res.json();
      rej(response);
    } else
      rej({
        status: false,
        errors: {
          message: DEFAULT_ERROR_MESSAGE,
        },
      });
  },
  interceptResponse = (resp, res, rej) => res(resp),
}) => {
  const networkParams =
    method === 'POST'
      ? {
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers,
          },
          body: JSON.stringify(body),
        }
      : {
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers,
          },
        };
  return new Promise((resolve, reject) => {
    fetch(url, networkParams)
      .then(response => checkResponseMode(response, reject))
      .then(response => interceptResponse(response, resolve, reject))
      .catch(e => reject(e));
  });
};
