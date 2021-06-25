import React, { Component } from 'react';
import maquette from '../images/maquette_bateau.png';
import logo_entreprise from '../images/logo_entreprise.png';
import logo_deposer from '../images/logo_deposer.png';
import ProgressBar from '../ProgressBar';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='container-left'>
        <div className='up-windows'>
          <img
            className='logo_entreprise'
            src={logo_entreprise}
            alt='Logo entreprise'
          />
          <div className='container-depot'>
            <img
              className='logo_deposer'
              src={logo_deposer}
              alt='Logo entreprise'
            />
            <h1>
              Glisser / Déposer
              <br />
              Carnet de câble au format .xlsx
            </h1>
          </div>
        </div>
        <div className='down-windows'>
          <div className='container-down-windows-uptown'>
            <div className='down-windows-left'>
              <div className='down-windows-right-titre'>
                <h1>Câbles</h1>
                <h1>Mètres</h1>
                <h1>Appareils</h1>
                <h1>Locaux</h1>
                <h1>Surbaux</h1>
                <h1>Systèmes</h1>
              </div>
              <div className='list-right'>
                <div className='container-bar'>
                  <div className='bar'>
                    <h1>7500</h1>
                  </div>
                </div>
                <div className='container-bar'>
                  <div className='bar'>
                    <h1>7500</h1>
                  </div>
                </div>
                <div className='container-bar'>
                  <div className='bar'>
                    <h1>7500</h1>
                  </div>
                </div>
                <div className='container-bar'>
                  <div className='bar'>
                    <h1>7500</h1>
                  </div>
                </div>
                <div className='container-bar'>
                  <div className='bar'>
                    <h1>7500</h1>
                  </div>
                </div>
                <div className='container-bar'>
                  <div className='bar'>
                    <h1>7500</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='down-windows-right'>
              <div className='down-windows-right-titre'>
                <h1>Pose CDC</h1>
                <h1>Pose APP</h1>
                <h1>Câblage</h1>
                <h1>Raccordement</h1>
                <h1>Bouchage</h1>
                <h1>Contrôle</h1>
              </div>
              <div className='list-right'>
                <div className='container-bar'>
                  <div className='bar'>
                    <ProgressBar done='80' />
                  </div>
                </div>
                <div className='container-bar'>
                  <div className='bar'>
                    <ProgressBar done='30' />
                  </div>
                </div>
                <div className='container-bar'>
                  <div className='bar'>
                    <ProgressBar done='70' />
                  </div>
                </div>
                <div className='container-bar'>
                  <div className='bar'>
                    <ProgressBar done='25' />
                  </div>
                </div>
                <div className='container-bar'>
                  <div className='bar'>
                    <ProgressBar done='40' />
                  </div>
                </div>
                <div className='container-bar'>
                  <div className='bar'>
                    <ProgressBar done='10' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className='logo_bateau' src={maquette} alt='maquette bateau' />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
