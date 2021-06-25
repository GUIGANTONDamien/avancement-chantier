import React from 'react';
import Etiquette from '../../images/logo_maj_avancement.png';

function MajAvancement(props) {
  return (
    <div className="categorie">
      <div className="container-img">
        <img
          className='background-img'
          src={Etiquette}
          alt='impression etiquette'
        />
      </div>
      <h1>MAJ Avancement</h1>
    </div>
  );
}

export default MajAvancement;
