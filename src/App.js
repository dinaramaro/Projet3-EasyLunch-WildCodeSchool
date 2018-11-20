import React, { Component } from 'react';
import Concept from './components/apropos/Concept';
import Equipe from './components/apropos/Equipe';
import FAQ from './components/apropos/FAQ';
import Contact from './components/apropos/Contact';
import CGV from './components/apropos/CGV';
import Partenaires from './components/apropos/Partenaires';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/apropos/concept' component={Concept} />
          <Route path='/apropos/equipe' component={Equipe} />
          <Route path='/apropos/cgv' component={CGV} />
          <Route path='/apropos/faq' component={FAQ} />
          <Route path='/apropos/contact' component={Contact} />
          <Route path='/apropos/partenaires' component={Partenaires} />
        </Switch>
      </div>
    );
  }
}

export default App;
