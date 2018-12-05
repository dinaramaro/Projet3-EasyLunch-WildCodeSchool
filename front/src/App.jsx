import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/home/Home';
import NavBar from './NavBar';
import Footer from './Footer';
import Result from './components/result/Result';
import Concept from './components/about/Concept';
import Team from './components/about/Team';
import FAQ from './components/about/FAQ';
import Contacts from './components/about/Contacts';
import CGV from './components/about/CGV';
import Partners from './components/about/Partners';
import Politic from './components/about/Politic';
import AdminMenu from './components/admin/AdminMenu';
import AdminCVG from './components/admin/AdminCGV';
import Restaurant from './components/about/Restaurant';
import AdminPoli from './components/admin/AdminPoli';
import AdminTeam from './components/admin/AdminTeam';
import Login from './Login';
import AdminPartners from './components/admin/AdminPartners';
import AdminConcept from './components/admin/AdminConcept';

const App = () => (
  <div>
    <NavBar />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resultat" component={Result} />
        <Route path="/a-propos/concept" component={Concept} />
        <Route path="/a-propos/equipe" component={Team} />
        <Route path="/a-propos/cgv" component={CGV} />
        <Route path="/a-propos/faq" component={FAQ} />
        <Route path="/a-propos/contact" component={Contacts} />
        <Route path="/a-propos/partenaires" component={Partners} />
        <Route path="/a-propos/politique" component={Politic} />
        <Route path="/a-propos/restaurateur" component={Restaurant} />
        <Route path="/admin/admin-menu" component={AdminMenu} />
        <Route path="/admin/admin-cgv" component={AdminCVG} />
        <Route path="/admin/admin-politique" component={AdminPoli} />
        <Route path="/admin/admin-equipe" component={AdminTeam} />
        <Route path="/admin/admin-partenaires" component={AdminPartners} />
        <Route path="/admin/admin-concept" component={AdminConcept} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
    <Footer />
  </div>
);
export default App;
