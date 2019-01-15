import React from 'react';
import { NotificationContainer } from 'react-notifications';
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
import AdminContact from './components/admin/contact/AdminContact';
import Result from './components/result/Result';
import Participate from './components/participate/Participate';
import OrderPageOne from './components/result/OrderPageOne';
import OrderPageTwo from './containers/result/OrderPageTwo';
import AdminContactRestaurant from './components/admin/contactRestaurant/AdminContactRestaurant';
import Register from './components/Register';
import MyAccount from './components/MyAccount';
import PrivateRoute from './PrivateRoute';
import PrivateRouteAdmin from './PrivateRouteAdmin';
import OrderPageTwoParticipate from './containers/participate/OrderPageTwoParticipate';
import ReservationHistory from './components/commandHistory/ReservationHistory';


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
        <Route path="/commande-page1" component={OrderPageOne} />
        <Route path="/commande-page2" component={OrderPageTwo} />
        <Route path="/commande-participation" component={OrderPageTwoParticipate} />
        <PrivateRouteAdmin path="/admin/admin-menu" component={AdminMenu} />
        <PrivateRouteAdmin path="/admin/admin-cgv" component={AdminCVG} />
        <PrivateRouteAdmin path="/admin/admin-politique" component={AdminPolitic} />
        <PrivateRouteAdmin path="/admin/admin-equipe" component={AdminTeam} />
        <PrivateRouteAdmin path="/admin/admin-partenaires" component={AdminPartners} />
        <PrivateRouteAdmin path="/admin/admin-concept" component={AdminConcept} />
        <PrivateRouteAdmin path="/admin/admin-faq" component={AdminFAQ} />
        <PrivateRouteAdmin path="/admin/modif-faq/:id" component={ModificationFAQ} />
        <PrivateRouteAdmin path="/admin/ajout-faq" component={AjoutFAQ} />
        <PrivateRouteAdmin path="/admin/admin-contact" component={AdminContact} />
        <Route path="/admin/admin-restaurant" component={AdminContactRestaurant} />
        <Route path="/connexion" component={Login} />
        <Route path="/result" component={Result} />
        <Route path="/participation" component={Participate} />
        <Route path="/inscription" component={Register} />
        <PrivateRoute path="/mon-compte" component={MyAccount} />
        <PrivateRoute path="/historique-de-reservation" component={ReservationHistory} />
      </Switch>
      <NotificationContainer />
    </div>
    <Footer />
  </div>
);
export default App;
