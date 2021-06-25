import React from 'react';
import Etiquette from '../../images/logo_impression_etiquette.png';
import './ImpressionEtiquette.css'

function ImpressionEtiquette() {
  return (
    <div className="categorie">
      <div className="container-img">
        <img className="background-img" src={Etiquette} alt='impression etiquette' />
      </div>
      <h1>Impression Etiquette</h1>
    </div>
  );
}

export default ImpressionEtiquette;
