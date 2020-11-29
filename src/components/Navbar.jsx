import React from 'react';


class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-glass">
        <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div 
          className="collapse navbar-collapse" 
          id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item col-md active">
                <a className="nav-link" 
                href="#">
                  Home 
                  <span className="sr-only">
                    (current)
                  </span></a>
              </li>
              <li className="nav-item dropdown col-md active">
                <a className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="true">
                  Goku
                </a>
                <div 
                className="dropdown-menu" 
                aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Normal</a>
                  <a className="dropdown-item" href="#">Sayayin</a>
                  <a className="dropdown-item" href="#">Blue</a>
                </div>
              </li>
              <li className="nav-item dropdown col-md active">
                <a className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                  Vegeta
                </a>
                <div className="dropdown-menu active" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Normal</a>
                  <a className="dropdown-item" href="#">Sayayin</a>
                  <a className="dropdown-item" href="#">Blue</a>
                </div>
              </li>
              <li className="nav-item dropdown col-md active">
                <a className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                  Gohan
                </a>
                <div className="dropdown-menu active" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Bebe</a>
                  <a className="dropdown-item" href="#">Normal</a>
                  <a className="dropdown-item" href="#">Sayayin</a>
                </div>
              </li>
              <li className="nav-item dropdown col-md active">
                <a className="nav-link dropdown-toggle" 
                href="#" id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                  Tron
                </a>
                <div className="dropdown-menu active" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown col-md active">
                <a className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                ata-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                  Goten
                </a>
                <div className="dropdown-menu active" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown col-md active">
                <a className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                  Pikoro
                </a>
                <div className="dropdown-menu active" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown col-md active">
                <a className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                  Tenchijan
                </a>
                <div className="dropdown-menu active" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown col-md active">
                <a className="nav-link dropdown-toggle" 
                href="#" id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                  Freezer
                </a>
                <div className="dropdown-menu active" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown col-md active">
                <a className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                  Boo
                </a>
                <div className="dropdown-menu active" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;