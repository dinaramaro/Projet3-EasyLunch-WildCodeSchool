import React from 'react';
import { CardImg } from 'reactstrap';
import './CardPartner.scss';


const CardsPartners = ({ partner: { link, picture } }) => (
  <div className="CardPartner">
    <div className="div-img">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardImg
          className="img-sqal"
          src={picture}
          alt="Card image cap"
        />
      </a>
    </div>
  </div>
);

export default CardsPartners;
