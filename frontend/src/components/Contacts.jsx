import React from 'react';

import { catData } from './jokeData';
import '../App.css';

// we can also pass props using props const Contacts = (props) and pass it as props.name

// const Contacts = ({ name, img, phone, email }) => {
//   return (
//     <div className="contact-card">
//       <img src={img} alt="cat-img" />
//       <h3> {name} </h3>
//       <div className="info-group">
//         <p>{phone}</p>
//       </div>
//       <div className="ingo-group1">
//         <p>{email}</p>
//       </div>
//     </div>
//   );
// };

// export default Contacts;

const Contacts = (props) => {
  console.log(props);
  let infoOfCatForSell;
  if (props.cat.open === true) {
    infoOfCatForSell = 'OPEN FOR SELL';
  } else if (props.cat.open === false) {
    infoOfCatForSell = 'SOLD OUT';
  } else {
    infoOfCatForSell = 'NOT AVAILABLE';
  }

  return (
    <div className="contact-card">
      <div className="perchasetag">{infoOfCatForSell}</div>

      <img src={props.cat.img} alt="cat-img" />
      <h3>{props.cat.name} </h3>
      <div className="info-group">
        <p>{props.cat.phone}</p>
      </div>
      <div className="ingo-group1">
        <p>{props.cat.email}</p>
      </div>
    </div>
  );
};

export default Contacts;
