import ky, { Options, ResponsePromise } from 'ky';
import { useEffect, useState } from 'react';
import { Payload } from '../props';

export enum RequestType {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Delete = 'delete'
}

export interface RequestState<P> {
  isLoading: boolean;
  isError: boolean;
  error?: Error;
  result?: P;
}

export const useRequest = <T, P>(type: RequestType, uri: string, data?: P) => {
  const [state, setState] = useState<RequestState<P>>({
    isLoading: false,
    isError: false
  });

  useEffect(() => {
    setState({ ...state, isLoading: true });

    const payload: Options = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    };

    if (data !== undefined) {
      payload.json = data;
    }

    (ky[type.toString()](uri, payload) as ResponsePromise)
      .json<any>()
      .then((result) =>
        setState({
          ...state,
          isLoading: false,
          result
        })
      )
      .catch((error) => setState({ ...state, isLoading: false, isError: true, error }));
  }, []);

  return state;
};

export const useGet = <T>(uri: string) => useRequest<T, T>(RequestType.Get, uri);

export const usePost = <T, P>(uri: string, data: P) => useRequest<T, P>(RequestType.Post, uri, data);

export const usePut = <T, P>(uri: string, data: P) => useRequest<T, P>(RequestType.Put, uri, data);

export const useDelete = (uri: string) => useRequest<any, any>(RequestType.Delete, uri);
