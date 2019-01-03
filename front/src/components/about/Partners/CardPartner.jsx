import React from 'react';
import { CardImg } from 'reactstrap';
import './CardPartner.scss';


const CardsPartners = ({ link, img }) => (
  <div className="CardPartner">
    <div className="div-img">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardImg
          className="img-sqal"
          src={img}
          alt="Card image cap"
        />
      </a>
    </div>
  </div>
);

export default CardsPartners;
