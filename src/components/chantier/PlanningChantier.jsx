import React from 'react';
import Etiquette from '../../images/logo_planning_chantier.jpg';

function PlanningChantier(props) {
  return (
    <div className="categorie">
      <div className="container-img">
        <img
          className='background-img'
          src={Etiquette}
          alt='impression etiquette'
        />
      </div>
      <h1>Planning Chantier</h1>
    </div>
  );
}

export default PlanningChantier;