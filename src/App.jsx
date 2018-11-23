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

const App = () => (
  <div>
    <NavBar />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about/concept" component={Concept} />
        <Route path="/about/team" component={Team} />
        <Route path="/about/cgv" component={CGV} />
        <Route path="/about/faq" component={FAQ} />
        <Route path="/about/contact" component={Contacts} />
        <Route path="/about/partners" component={Partners} />
        <Route path="/about/politic" component={Politic} />
      </Switch>
    </div>
    <Footer />
  </div>
);
export default App;
