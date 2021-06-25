import React from 'react';
import Etiquette from '../../images/logo_analysedata.png';

function AnalyseData(props) {
  return (
    <div className="categorie">
      <div className='container-img'>
        <img
          className='background-img'
          src={Etiquette}
          alt='impression etiquette'
        />
      </div>
      <h1>Analyse data</h1>
    </div>
  );
}

export default AnalyseData;
