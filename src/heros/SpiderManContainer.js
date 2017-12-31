import React from 'react';
import HeroView from './HeroView';

export default class SpiderMan extends React.Component {
  componentDidMount() {
    this.props.fetchHero(2);
  }
  
  render() {
    return <HeroView {...this.props} />
  }
}