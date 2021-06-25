import React from 'react';
import HomeChantier from './components/chantier/HomeChantier';
import Home from './components/Home';
import './GeneralStyle.css';

const App = () => {
  return (
    <div className="container-global">
      <Home />
      <HomeChantier />
    </div>
  );
};

export default App;
