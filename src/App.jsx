import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Accueil from './components/Accueil';

const App = () => (
  <Switch>
    <Route exact path="/" component={Accueil} />
  </Switch>
);

export default App;
