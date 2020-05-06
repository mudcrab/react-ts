import React, { createContext, ReactNode, useContext, useState } from 'react';

export interface State {
  count: number
}

export interface ContextState {
  state: State,
  dispatch?: (key: keyof State, value: State[keyof State]) => void;
  mergeDispatch?: (data: Partial<State>) => void;
}

const initialState: State = {
  count: 0
};

const store = createContext<ContextState>({
  state: initialState
});

const { Provider } = store;

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<State>({ count: 0 });

  const dispatch = (key: keyof State, value: State[keyof State]) => {
    setState({
      ...state,
      [key]: value
    });
  };

  const mergeDispatch = (data: Partial<State>) => {
    setState({ ...state, ...data });
  }

  return (
    <Provider value={{ state, dispatch, mergeDispatch }}>{ children }</Provider>
  )
}

export const useStore = () => useContext(store);

export const useAppState = () => {
  const { state } = useStore();

  return state;
}
