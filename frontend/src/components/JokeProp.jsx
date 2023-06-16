import React from 'react';

import { jokeData } from './jokeData';

// jsx returns javascript object

// const JokeProp = (props) => {
//   console.log(props.isFunny);

//   return (
//     <div>
//       <h3>{props.joke}</h3>
//       <h5>{props.punch}</h5>
//       <hr />
//     </div>
//   );
// };

// how can we pass jsx and how can we write javascript in jsx with conditions and render jsx
// const JokeProp = () => {
//   const participant = ['florin', 'ivan', 'liam', 'ameer', 'me', 'you'];

//   return <div> {participant} </div>;
// };

// export default JokeProp;

// example 2
// const JokeProp = () => {
//   const participant = [
//     <h1>florin</h1>,
//     <h1>ivan</h1>,
//     <h1>liam</h1>,
//     <h1>ameer</h1>,
//     <h1>me</h1>,
//     <h1>you</h1>,
//   ];
//   return <div> {participant} </div>;
// };

// export default JokeProp;

// example 3 -> putting all the data in exteranal file and mapping on that external data producing jsx for displaying on screen

const JokeProp = (props) => {
  console.log(props);

  return (
    <div>
      <h3>{props.setup}</h3>
      <h6>{props.punch}</h6>
      <hr />
    </div>
  );
};

export default JokeProp;
