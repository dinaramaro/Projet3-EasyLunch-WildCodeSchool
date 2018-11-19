import React, { Component } from 'react';
import Concept from './components/apropos/Concept';
import Equipe from './components/apropos/Equipe';
import FAQ from './components/apropos/FAQ';
import Contact from './components/apropos/Contact';
import CGV from './components/apropos/CGV';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/concept' component={Concept} />
          <Route path='/equipe' component={Equipe} />
          <Route path='/cgv' component={CGV} />
          <Route path='/faq' component={FAQ} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
