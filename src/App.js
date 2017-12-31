import React, { Component } from 'react';

// 1. Vanilla Pattern
// import CaptainAmerica from './heros/CaptainAmerica';

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

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <CaptainAmerica heroId={2} />
//       </div>
//     );
//   }
// }


// ================================
// 5. Render Prop Pattern
//
// import HeroView from './heros/HeroView';
// import CaptainAmerica from './heros/CaptainAmericaRP';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <CaptainAmerica
//           heroId={2}
//           render={hero => (<HeroView {...hero} />)}
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

import HeroView from './heros/HeroView';
import CaptainAmerica from './heros/CaptainAmericaCI';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CaptainAmerica heroId={2} HeroView={HeroView} />
      </div>
    );
  }
}

export default App;
