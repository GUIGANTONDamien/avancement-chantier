import React from 'react';
import Etiquette from '../../images/logo_edition_fiche.png';

function EditionFicheTravaux(props) {
  return (
    <div className="categorie">
      <div className="container-img">
        <img
          className='background-img'
          src={Etiquette}
          alt='impression etiquette'
        />
      </div>
      <h1>Edition fiche travaux</h1>
    </div>
  );
}

export default EditionFicheTravaux;
