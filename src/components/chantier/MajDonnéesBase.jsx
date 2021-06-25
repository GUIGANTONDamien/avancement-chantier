import React from 'react';
import Etiquette from '../../images/logo_maj_donneesbase.png';

function MajDonnéesBase(props) {
  return (
    <div className="categorie">
      <div className="container-img">
        <img
          className='background-img'
          src={Etiquette}
          alt='impression etiquette'
        />
      </div>
      <h1>MAJ Données base</h1>
    </div>
  );
}

export default MajDonnéesBase;
