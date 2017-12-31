import React, { Component } from 'react';
import HeroView from './HeroView';

class CaptainAmericaContainer extends Component {
  componentDidMount() {
    this.props.fetchHero(1);
  }

  render() {
    const { loading, hero } = this.props;

    return (
      <HeroView loading={loading} hero={hero} />
    );
  }
}


export default CaptainAmericaContainer;