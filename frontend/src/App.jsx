// import React from 'react';

// const App = () => {
//   const firstName = 'computer';
//   const lastName = 'world';
//   const date = new Date();

//   return (
//     <h1>
//       Hello {firstName}  {lastName}
//       it is currently about {date.getHours() % 12} o' clock
//     </h1>
//   );
// };

// export default App;

// example 2

// import React from 'react';

// const App = () => {
//   const date = new Date();
//   const hours = date.getHours();

//   let timeOfDay;
//   if (hours < 12) {
//     timeOfDay = 'morning';
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = 'afternoon';
//   } else {
//     timeOfDay = 'night';
//   }

//   return <h1> {timeOfDay} </h1>;
// };

// export default App;

// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// import CatOne from './assets/images/catOne.jpg';
// import CatTwo from './assets/images/catTwo.jpg';
// import CatThree from './assets/images/catThree.jpg';
// import CatFour from './assets/images/catFour.jpg';
// import { Contacts, JokeProp } from './components/allComponetExport';

// created copy of the contacts component and provided props
// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={
//             <Contacts
//               img={CatOne}
//               name="Mr CatOne"
//               phone="12324322543"
//               email="CatFour@gmail.com"
//             />
//           }
//         />
//       </Routes>
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={
//             <Contacts
//               img={CatTwo}
//               name="CatTwo"
//               phone="13223454353"
//               email="CatOne@gmail.com"
//             />
//           }
//         />
//       </Routes>
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={
//             <Contacts
//               img={CatThree}
//               name="CatThree"
//               phone="3454565654634"
//               email="CatThree@gmail.com"
//             />
//           }
//         />
//       </Routes>
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={
//             <Contacts
//               img={CatFour}
//               name="Mr CatFour"
//               phone="12324322543"
//               email="CatFour@gmail.com"
//             />
//           }
//         />

//         {/* 2nd component  */}
//       </Routes>
//       <Routes>
//         <Route
//           exact
//           path="/jokepro"
//           element={
//             <JokeProp joke="hello i am the king" punch="ok" isFunny={false} />
//           }
//         />
//       </Routes>
//       <Routes>
//         <Route
//           exact
//           path="/jokepro"
//           isFunny={false}
//           element={
//             <JokeProp joke="hello i am the king" punch="ok" isFunny={true} />
//           }
//         />
//       </Routes>

//       <h1 style={{ padding: '80px', paddingLeft: '370px' }}>
//         this is prop practice
//       </h1>
//     </div>
//   );
// };

// by using curly braces we can pass any type of value as props. ex age={4}

// export default App;

// import React from 'react';

// import { Contacts, JokeProp } from './components/allComponetExport';
// import { catData, jokeData } from './components/jokeData';

// const App = () => {
//   const allTheJokes = jokeData.map((joke) => {
//     return <JokeProp key={joke.id} setup={joke.setup} punch={joke.punch} />;
//   });

//   const allCats = catData.map((cat) => {
//     return (
//       <Contacts
//         key={cat.id}
// img={cat.img}
// name={cat.name}
// email={cat.email}
// phone={cat.email}
// open={cat.open}
// rather than passing prop like above we can give all object by passing map parameter
// cat={cat}

// and another way is using spread es6 syntax {...item}
//     />
//   );
// });

//   return (
//     <>
//       <div>
//         <h1> {allTheJokes} </h1>
//       </div>
//       {allCats}
//     </>
//   );
// };

// export default App;

// task
import React from 'react';

import Navbar from './Pages/navbar/Navbar';
import Footer from './Pages/footer/Footer';
import Travel from './Pages/Travel/Travel';
import { travelData } from './Pages/Data/travelData';

const App = () => {
  const data = travelData.map((getdata) => {
    return <Travel key={getdata.id} data={getdata} />;
  });
  return (
    <div>
      <Navbar />
      {data}
      <Footer />
    </div>
  );
};

export default App;
