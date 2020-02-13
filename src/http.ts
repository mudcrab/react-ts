interface Payload<T> {
  status: boolean;
  payload: T;
}

import ky from 'ky';

export const get = <T>(uri: string) =>
  ky
    .get('/api/' + uri, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .json<Payload<T>>()
    .then(data => data.payload);

export const put = <T>(uri: string, json: T) =>
  ky
    .put('/api/' + uri, {
      json,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .json<Payload<T>>()
    .then(d => d.payload);

export const post = <T>(uri: string, json: T) =>
  ky
    .post('/api/' + uri, {
      json,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .json<Payload<T>>()
    .then(d => d.payload);

export const del = <T>(uri: string) =>
  ky
    .delete('/api/' + uri, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .json<Payload<T>>()
    .then(d => d.payload);
