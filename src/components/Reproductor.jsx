import React from 'react';
import ReactPlayer from 'react-player';
import Fondo from '../images/Momentos.mp4';
class Reproductor extends React.Component {

  render() {
    return (
      <div className='contenedor'
      >
        <ReactPlayer
          url = {Fondo}
          width= '100%'
          height= '100%'
          // controls
          playing
          muted
          loop
          className='react-player'
        />
      </div>
    );
  }
}

export default Reproductor;