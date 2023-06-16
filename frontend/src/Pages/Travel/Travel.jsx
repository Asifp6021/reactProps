import React from 'react';

import Austria from '../../../public/images/Austria.jpg';
import './travel.css';

const Travel = (props) => {
  console.log(props);

  let current;
  if (props.data.open === true) {
    current = 'active';
  } else {
    current = '';
  }
  return (
    <div className="first">
      <img className="img1" src={props.data.img} alt="travell"></img>
      <div className="two">
        <div className="two-child">
          <p> {props.data.country} </p>
          <p> {props.data.googleMap} </p>

          <p className="active"> {current} </p>
        </div>
        <h1> {props.data.destination} </h1>
        <p> {props.data.date} </p>
        <p>{props.data.dec}</p>
      </div>
    </div>
  );
};

export default Travel;
