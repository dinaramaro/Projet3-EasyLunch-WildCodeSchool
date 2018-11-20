import React, { Component } from 'react';
import Accueil from './components/Accueil';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Accueil} />
      </Switch>

    );
  }
}

export default App;
