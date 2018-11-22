import React from 'react';
import Accueil from './components/Accueil';
import NavBar from './NavBar';
import Footer from './Footer';

const App = () => (
  <div>
    <NavBar />
    <div className="content">
      <Accueil />
      <Footer />
    </div>
  </div>
);

export default App;
