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
        <div className="row ">
          <div className="col-6 col-md-4  order-1 order-md-0 pr-0 pl-0  bg-info Medio">
            <img className='Navbar-logo-1'
            src={Ball} alt="DragonBall"/>
          </div>
          <div className="col-12 col-md-4 order-3 order-md-1 pr-0 pl-0 bg-info Medio">
            <img className='Navbar-logo-1' 
            src={BallSuper} alt="Dragon Ball Super"/>
          </div>
          <div className="col-6 col-md-4 order-2 order-md-2 pr-0 pl-0  bg-info Medio">
            <img className='Navbar-logo-1'
            src={BallZ} alt="Dragon Ball Z"/>
          </div>
          <div className="col-md-12 order-0 pr-0 pl-0 order-md-3">
            <Navbar/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;