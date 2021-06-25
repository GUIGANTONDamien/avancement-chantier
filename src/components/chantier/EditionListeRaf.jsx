import React from 'react';
import Etiquette from '../../images/logo_edition_listeRAF.png';

function EditionListeRaf(props) {
  return (
    <div className="categorie">
      <div className="container-img">
        <img className="background-img" src={Etiquette} alt='impression etiquette' />
      </div>
      <h1>Edition liste RAF</h1>
    </div>
  );
}

export default EditionListeRaf;
