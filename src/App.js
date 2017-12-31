import React, { Component } from 'react';

// 1. Vanilla Pattern
// import CaptainAmerica from './heros/CaptainAmerica';
//
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
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <CaptainAmerica />
//       </div>
//     );
//   }
// }
// export default App;


// ================================
// 3. Container / Branch / View Pattern

// import CaptainAmerica from './heros/CaptainAmericaCBV';
//
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
// import HeroView from './heros/HeroView';
// import withCA from './heros/withCA';
// import withSpiderMan from './heros/withSpiderMan';
// import withBug from './heros/withBug';
//
// const HeroWithCA = withCA(HeroView);
// const HeroWithSpiderMan = withSpiderMan(HeroView);
//
// const CaptainAmericaWithBug = withCA(withBug(HeroView));
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <HeroWithCA />
//         <hr/>
//         <HeroWithSpiderMan />
//         <hr/>
//         <CaptainAmericaWithBug />
//       </div>
//     );
//   }
// }


// ================================
// 5. Render Prop Pattern
//
// import HeroView from './heros/HeroView';
// import CaptainAmerica from './heros/CaptainAmericaRP';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <CaptainAmerica
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
//
import HeroView from './heros/HeroView';
import CaptainAmerica from './heros/CaptainAmericaCI';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CaptainAmerica HeroView={HeroView} />
      </div>
    );
  }
}

export default App;
