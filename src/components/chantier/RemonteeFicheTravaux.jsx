import React from 'react';
import Etiquette from '../../images/logo_remontee_fichetravaux.png';

function RemonteeFicheTravaux(props) {
  return (
    <div className="categorie">
      <div className="container-img">
        <img className="background-img" src={Etiquette} alt='impression etiquette' />
      </div>
      <h1>Remontée Fiche Travaux</h1>
    </div>
  );
}

export default RemonteeFicheTravaux;
