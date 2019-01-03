import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/home/Home';
import NavBar from './NavBar';
import Footer from './Footer';
import Concept from './components/about/Concept';
import Team from './components/about/Team/Team';
import FAQ from './components/about/FAQ';
import Contacts from './components/about/Contacts';
import CGV from './components/about/CGV';
import Partners from './components/about/Partners/Partners';
import Politic from './components/about/Politic';
import AdminMenu from './components/admin/AdminMenu';
import AdminCVG from './components/admin/cgv/AdminCGV';
import Restaurant from './components/about/Restaurant';
import AdminPolitic from './components/admin/politic/AdminPolitic';
import AdminTeam from './components/admin/team/AdminTeam';
import Login from './components/Login';
import AdminPartners from './components/admin/partners/AdminPartners';
import AdminConcept from './components/admin/concept/AdminConcept';
import AdminFAQ from './components/admin/FAQ/AdminFAQ';
import ModificationFAQ from './components/admin/FAQ/ModificationFAQ';
import AjoutFAQ from './components/admin/FAQ/AddFAQ';
import Result from './components/result/Result';

const App = () => (
  <div className="App">
    <NavBar />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
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
        <Route path="/admin/admin-politique" component={AdminPolitic} />
        <Route path="/admin/admin-equipe" component={AdminTeam} />
        <Route path="/admin/admin-partenaires" component={AdminPartners} />
        <Route path="/admin/admin-concept" component={AdminConcept} />
        <Route path="/admin/admin-faq" component={AdminFAQ} />
        <Route path="/admin/admin-faq/question/:id" component={ModificationFAQ} />
        <Route path="/admin/admin-faq/question" component={AjoutFAQ} />
        <Route path="/login" component={Login} />
        <Route path="/result" component={Result} />
      </Switch>
    </div>
    <Footer />
  </div>
);
export default App;
