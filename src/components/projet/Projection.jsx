import React from 'react';
import Etiquette from '../../images/logo_projection.png';

function Projection(props) {
  return (
    <div className="categorie">
      <div className='container-img'>
        <img
          className='background-img'
          src={Etiquette}
          alt='impression etiquette'
        />
      </div>
      <h1>Projection</h1>
    </div>
  );
}

export default Projection;