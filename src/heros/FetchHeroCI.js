import React from "react";
import { fetch, restore } from '../utils/fetchApi';

export default class HeroCI extends React.Component {
  state = { loading: true };

  componentDidMount() {
    this.fetchHero(this.props.heroId);
  }

  fetchHero = (heroId) => {
    fetch(`http://localhost:8080/api/heros/${heroId}`)
    .then(res => res.json())
    .then(
      hero => this.setState({ loading: false, hero }),
      error => this.setState({ loading: false, error }),
    );

    restore();
  }

  render() {
    const { Hero } = this.props;
    return <Hero {...this.state} fetchHero={this.fetchHero} />;
  }
}
