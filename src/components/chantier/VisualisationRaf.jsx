import React from 'react';
import Etiquette from '../../images/logo_visualisationRAF.png';

function VisualisationRaf(props) {
  return (
    <div className="categorie">
      <div className="container-img">
        <img className="background-img" src={Etiquette} alt='impression etiquette' />
      </div>
      <h1>Visualisation RAF</h1>
    </div>
  );
}

export default VisualisationRaf;
