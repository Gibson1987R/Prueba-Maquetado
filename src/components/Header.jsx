import React from 'react';
import Navbar from './Navbar';
import Ball from '../images/Dragonball.svg';
import BallZ from '../images/dragonball-z.svg';
import BallSuper from '../images/Dragon_Ball_Super.svg';
import './styles/styles.css';

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row order-sm-2 order-md-1">
          <div className="col-sm-6 col-md-4  order-sm-0 order-md-0 Medio">
            <img className='Navbar-logo-1'
            src={Ball} alt="DragonBall"/>
          </div>
          <div className="col-sm-12 col-md-4 order-sm-2 order-md-1 Medio">
            <img className='Navbar-logo-1' 
            src={BallSuper} alt="Dragon Ball Super"/>
          </div>
          <div className="col-sm-6 col-md-4 order-sm-1 order-md-2  Medio">
            <img className='Navbar-logo-1'
            src={BallZ} alt="Dragon Ball Z"/>
          </div>
        </div>
        <div className="row order-sm-1 order-md-2">
          <div className="col-md-12">
            <Navbar/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;