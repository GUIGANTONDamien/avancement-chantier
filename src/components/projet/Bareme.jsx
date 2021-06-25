import React from 'react';
import Etiquette from '../../images/logo_bareme.jpg';

function Bareme(props) {
  return (
    <div className="categorie">
      <div className='container-img'>
        <img
          className='background-img'
          src={Etiquette}
          alt='impression etiquette'
        />
      </div>
      <h1>Barèmes</h1>
    </div>
  );
}

export default Bareme;