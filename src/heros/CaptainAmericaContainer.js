import React, { Component } from 'react';
import withHero from './withHero';
// import withBug from './withBug';
import HeroView from './HeroView';

class CaptainAmericaContainer extends Component {
  // Do a stuff here

  render() {
    return (
      <HeroView {...this.props}/>
    );
  }
}

const CAWithHero = withHero(CaptainAmericaContainer);

// const CaptainAmericaWithBug = withHero(withBug(HeroView));

export default CAWithHero;