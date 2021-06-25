import React from 'react';
import Etiquette from '../../images/logo_pointage.png';

function Pointage(props) {
  return (
    <div className="categorie">
      <div className="container-img">
        <img
          className='background-img'
          src={Etiquette}
          alt='impression etiquette'
        />
      </div>
      <h1>Pointage</h1>
    </div>
  );
}

export default Pointage;
