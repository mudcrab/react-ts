import classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/main.scss';
import { store } from './store';

const Home = () => {
  const dispatch: any = useDispatch();
  const site = useSelector((state: any) => state.site);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mx-auto my-auto p-4 shadow-md border border-gray-400">
        <h1 className="text-3xl uppercase flex items-center">
          Logged in
          <div
            className={classNames('ml-2 px-2 text-white', {
              'bg-green-500': site.loggedIn,
              'bg-red-500': !site.loggedIn
            })}
          >
            {site.loggedIn ? 'YES' : 'NO'}
          </div>
        </h1>

        <div className="flex mt-4">
          <button
            className={classNames('px-4 py-2 w-full text-white font-semibold uppercase', {
              'bg-green-500': !site.loggedIn,
              'bg-red-500': site.loggedIn
            })}
            onClick={() => dispatch.site.setLoggedIn(!site.loggedIn)}
          >
            {site.loggedIn ? 'Log out' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Main = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home} />
    </Router>
  </Provider>
);

const App = hot(Main);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});
