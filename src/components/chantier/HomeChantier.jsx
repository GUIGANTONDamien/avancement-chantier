import React from 'react';
import EditionFicheTravaux from './EditionFicheTravaux';
import EditionListeRaf from './EditionListeRaf';
import ImpressionBrady from './ImpressionBrady';
import ImpressionEtiquette from './ImpressionEtiquette';
import MajAvancement from './MajAvancement';
import MajDonnéesBase from './MajDonnéesBase';
import PlanningChantier from './PlanningChantier';
import Pointage from './Pointage';
import RemonteeFicheTravaux from './RemonteeFicheTravaux';
import VisualisationRaf from './VisualisationRaf';
import './HomeChantier.css';
import AnalyseData from '../projet/AnalyseData';
import Bareme from '../projet/Bareme';
import Projection from '../projet/Projection';
import Heures from '../projet/Heures';
import CalculRouting from '../projet/CalculRouting';

function HomeChantier(props) {
  return (
    <div className="container-global-chantier">
      <h1 className="titre">CHANTIER</h1>
      <div className='container-chantier'>
        <div className='container-etiquette'>
          <ImpressionEtiquette />
          <ImpressionBrady />
          <PlanningChantier />
          <Pointage />
          <MajDonnéesBase />
        </div>
        <div className='container-etiquette'>
          <MajAvancement />
          <EditionFicheTravaux />
          <RemonteeFicheTravaux />
          <EditionListeRaf />
          <VisualisationRaf />
        </div>
      </div>
      <h1 className="titre">PROJET</h1>
      <div className='container-chantier'>
        <div className='container-etiquette'>
          <AnalyseData />
          <Bareme />
          <Heures />
          <Projection />
          <CalculRouting />
        </div>
      </div>
    </div>
  );
}

export default HomeChantier;
