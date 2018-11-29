import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/home/Home';
import NavBar from './NavBar';
import Footer from './Footer';
import Concept from './components/about/Concept';
import Team from './components/about/Team';
import FAQ from './components/about/FAQ';
import Contacts from './components/about/Contacts';
import CGV from './components/about/CGV';
import Partners from './components/about/Partners';
import Politic from './components/about/Politic';
import Result from './components/result/Result';

const App = () => (
  <div>
    <NavBar />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/apropos/concept" component={Concept} />
        <Route path="/apropos/equipe" component={Team} />
        <Route path="/apropos/cgv" component={CGV} />
        <Route path="/apropos/faq" component={FAQ} />
        <Route path="/apropos/contact" component={Contacts} />
        <Route path="/apropos/partenaires" component={Partners} />
        <Route path="/apropos/politique" component={Politic} />
        <Route path="/resultat" component={Result} />
      </Switch>
    </div>
    <Footer />
  </div>
);
export default App;
