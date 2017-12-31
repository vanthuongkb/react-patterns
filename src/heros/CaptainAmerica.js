import React, { PureComponent } from 'react';
import { fetch, restore } from '../utils/fetchApi';

export default class CaptainAmerica extends PureComponent {
  /**
   *  State:
   * { loading: true }
   * { loading: false, hero: { id, name, publisher } }
   * { loading: false, error: any }
   */
  state = { loading: true };

  componentDidMount() {
    this.fetchHero(1);
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

  renderLoading() {
    return <div>Loading....</div>
  };

  renderError() {
    return <div>Sorry! Please try again.</div>
  }

  renderHero() {
    const { hero: { id, name, publisher } } = this.state;
    return (
      <div>
        <div>ID: {id}</div>
        <div>Name: {name}</div>
        <div>Publisher: {publisher}</div>
      </div>
    )
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.hero) {
      return this.renderHero();
    } else {
      return this.renderError();
    }
  }
}
