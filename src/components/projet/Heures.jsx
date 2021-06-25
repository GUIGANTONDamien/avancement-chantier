import React from 'react';
import Etiquette from '../../images/logo_heures.png';

function Heures(props) {
  return (
    <div className="categorie">
      <div className='container-img'>
        <img
          className='background-img'
          src={Etiquette}
          alt='impression etiquette'
        />
      </div>
      <h1>Heures produites / pointées</h1>
    </div>
  );
}

export default Heures;
