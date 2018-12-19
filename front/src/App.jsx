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
import AdminMenu from './components/admin/AdminMenu';
import AdminCVG from './components/admin/AdminCGV';
import Restaurant from './components/about/Restaurant';
import AdminPoli from './components/admin/AdminPoli';
import AdminTeam from './components/admin/AdminTeam';
import Login from './components/Login';
import AdminPartners from './components/admin/AdminPartners';
import AdminConcept from './components/admin/AdminConcept';
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
        <Route path="/apropos/concept" component={Concept} />
        <Route path="/apropos/equipe" component={Team} />
        <Route path="/apropos/cgv" component={CGV} />
        <Route path="/apropos/faq" component={FAQ} />
        <Route path="/apropos/contact" component={Contacts} />
        <Route path="/apropos/partenaires" component={Partners} />
        <Route path="/apropos/politique" component={Politic} />
        <Route path="/admin/AdminCGV" component={AdminCVG} />
        <Route path="/admin/AdminPolitique" component={AdminPoli} />
        <Route path="/admin/AdminEquipe" component={AdminTeam} />
        <Route path="/admin/AdminPartenaires" component={AdminPartners} />
        <Route path="/admin/AdminConcept" component={AdminConcept} />
        <Route path="/admin/adminfaq/question/:id" component={ModificationFAQ} />
        <Route path="/admin/adminfaq/question" component={AjoutFAQ} />
        <Route path="/admin/Adminfaq" component={AdminFAQ} />
        <Route path="/Login" component={Login} />
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
        <Route path="/resultat" component={Result} />
      </Switch>
    </div>
    <Footer />
  </div>
);
export default App;
