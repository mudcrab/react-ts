import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Translate } from './components/Translate';
import { Container } from './components/Container';

const App = () => {
  return (
    <Translate>
      <Router>
        <Container>
          <Route exact path="/">
            <div>Hello</div>
          </Route>
        </Container>
      </Router>
    </Translate>
  );
};

export default App;
