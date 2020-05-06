import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { StateProvider } from './hooks/storeHooks';
import { useIsAuthenticated } from './hooks/userHooks';
import { LanguageStateProvider } from './i18n';

const Authenticated = lazy(() => import('./app/AppContainer'));
const Unauthenticated = lazy(() => import('./auth/AuthContainer'));

const Entry = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Suspense fallback={<div>loading</div>}>
      <LanguageStateProvider language="en">
        <StateProvider>
          { isAuthenticated ? <Authenticated /> : <Unauthenticated /> }
        </StateProvider>
      </LanguageStateProvider>
    </Suspense>
  )
};

const App = hot(Entry);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});
