import React from 'react';
import Etiquette from '../../images/logo_impression_brady.jpg';

function ImpressionBrady(props) {
  return (
    <div>
      <div className="container-img">
        <img
          className='background-img'
          src={Etiquette}
          alt='impression etiquette'
        />
      </div>
      <h1>Impression BRADY</h1>
    </div>
  );
}

export default ImpressionBrady;
