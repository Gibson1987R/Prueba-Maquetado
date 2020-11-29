import React from 'react';
import Header from './Header';
import Reproductor from './Reproductor';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
// import Fondo from '../images/centrar-elementos-css.mp4';
import './styles/styles.css';



class Hero extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Reproductor/>
      </div>
    );
  }
}

export default Hero;