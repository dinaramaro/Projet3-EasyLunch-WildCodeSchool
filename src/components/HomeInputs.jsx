import React from 'react';
import './HomeInputs.css';
import { Input } from 'reactstrap';

const imgSrc = '/medias/hero-image.png';
const HomeInputs = () => (
  <div className="banner">
    <div className="background" style={{ backgroundImage: `url(${imgSrc})`, height: '34vw' }}>
      <h2 className="border-text banner-text">Gagnez du temps au restaurant !</h2>
      <Input className="search1" placeholder="Nombre de personnes" style={{ width: '35vw' }} />
      <Input className="search2" placeholder="Nom restaurant, quartier" style={{ width: '35vw' }} />
    </div>
  </div>

);

export default HomeInputs;
