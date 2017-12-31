import React from "react";
import { fetch, restore } from '../utils/fetchApi';

export default class FetchHero extends React.Component {
  state = { loading: true };

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
    return this.props.render({ ...this.state, fetchHero: this.fetchHero });
  }
}
