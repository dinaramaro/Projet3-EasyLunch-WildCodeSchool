import React from 'react';
import './HomeInputs.css';
import { Input, Button } from 'reactstrap';

const imgSrc = '/medias/hero-image.png';
const HomeInputs = () => (
  <div className="banner">
    <div className="background" style={{ backgroundImage: `url(${imgSrc})`, height: '34vw' }}>
      <h2 className="border-text banner-text">Commandez et payez avant et soyez servis dès votre arrivé au restaurant</h2>
      <Input className="search1" placeholder="Restaurant" style={{ width: '25vw' }} />
      <Input className="search2" type="select" placeholder="Nombre de personnes" style={{ width: '25vw' }}>
        <option>Pour combien ?</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </Input>
      <Button className="search-button">Rechercher</Button>
      <Button className="participe-button">Je participe</Button>

    </div>
  </div>

);

export default HomeInputs;
