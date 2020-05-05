import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Translate } from './components/Translate';
import { Container } from './components/Container';
import { Test } from './components/Test';

const App = () => {
  return (
    <Translate>
      <Router>
        <Container>
          <Route exact path="/" component={Test} />
        </Container>
      </Router>
    </Translate>
  );
};

export default App;
