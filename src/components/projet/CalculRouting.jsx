import React from 'react';
import Etiquette from '../../images/logo_calculrouting.png';

function CalculRouting(props) {
  return (
    <div className="categorie">
      <div className='container-img'>
        <img
          className='background-img'
          src={Etiquette}
          alt='impression etiquette'
        />
      </div>
      <h1>Calcul de Routing</h1>
    </div>
  );
}

export default CalculRouting;