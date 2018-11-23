import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Accueil from './components/Accueil';
import NavBar from './NavBar';
import Footer from './Footer';
import Concept from './components/apropos/Concept';
import Equipe from './components/apropos/Equipe';
import FAQ from './components/apropos/FAQ';
import Contact from './components/apropos/Contact';
import CGV from './components/apropos/CGV';
import Partenaires from './components/apropos/Partenaires';
import Politique from './components/apropos/Politique';

const App = () => (
  <div>
    <NavBar />
    <div className="content">
    <Switch>
      <Route exact path="/" component={Accueil} />      
      <Route path="/apropos/concept" component={Concept} />
      <Route path="/apropos/equipe" component={Equipe} />
      <Route path="/apropos/cgv" component={CGV} />
      <Route path="/apropos/faq" component={FAQ} />
      <Route path="/apropos/contact" component={Contact} />
      <Route path="/apropos/partenaires" component={Partenaires} />
      <Route path="/apropos/politique" component={Politique} />
    </Switch>
    </div>
    <Footer />
    </div>
)
export default App;
