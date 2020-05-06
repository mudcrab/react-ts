import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Test } from '../components/Test';

export default () => {
  return (
    <Router>
      <Route exact path="/" component={Test} />
    </Router>
  );
};
