import React, { Component } from 'react';

// 1. Vanilla Pattern
import CaptainAmerica from './heros/CaptainAmerica';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CaptainAmerica />
      </div>
    );
  }
}

// ================================
// 2. Container / View Pattern
//
// import CaptainAmerica from './heros/CaptainAmericaCV';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <CaptainAmerica />
//       </div>
//     );
//   }
// }


// ================================
// 3. Container / Branch / View Pattern

// import CaptainAmerica from './heros/CaptainAmericaCBV';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <CaptainAmerica />
//       </div>
//     );
//   }
// }

// ================================
// 4. Higher Order Component Pattern
//
// import CaptainAmerica from './heros/CaptainAmericaContainer';
// import withHero from './heros/withHero';
// // import withBug from './heros/withBug';

// const CAWithHero = withHero(CaptainAmerica);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <CAWithHero />
//       </div>
//     );
//   }
// }


// ================================
// 5. Render Prop Pattern

// import FetchHero from './heros/FetchHero';
// import CaptainAmerica from './heros/CaptainAmericaContainer';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <FetchHero render={heroProps => (
//             <CaptainAmerica {...heroProps} />
//           )}
//         />
//       </div>
//     );
//   }
// }

// NOTE:
// 1. Func as children component is the same concept with render prop
// 2. Libraries use this pattern: React Router, React Motion,....

// ================================
// 6. Component Injection Pattern
//
// import CaptainAmerica from './heros/CaptainAmericaContainer';
// // import SpiderMan from './heros/SpiderManContainer';
//
// import FetchHero from './heros/FetchHeroCI';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <FetchHero Hero={CaptainAmerica} />
//       </div>
//     );
//   }
// }

export default App;
