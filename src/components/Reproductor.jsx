import React from 'react';
import ReactPlayer from 'react-player';
import Fondo from '../images/Momentos.mp4';
class Reproductor extends React.Component {

  render() {
    return (
      <div wrapper
      style={{
        width :'100%', 
        height:'100%', 
        position:'absolute', 
        zIndex: '-1',
        top:'50%',
        left:'50%',
        objectFit:'cover',
        transform: 'translate(-50%,-50%)',
      }}>
        <ReactPlayer
          url = {Fondo}
          width= '100%'
          height= '100%'
          // controls
          playing
          muted
          loop
        />
      </div>
    );
  }
}

export default Reproductor;