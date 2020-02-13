import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { store, State } from './store';

export const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export const useAppState = () => {
  const [state, setState] = useState<State>(store.value);

  useEffect(() => {
    const sub = store.state$.subscribe(s => setState(s));

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return state;
};
