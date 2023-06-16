import React from 'react';

import download from '../../../public/images/plane.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <img className="travel" src={download} alt="travel"></img>
      <h3 className="travel"> My Destinations</h3>
    </div>
  );
};

export default Navbar
