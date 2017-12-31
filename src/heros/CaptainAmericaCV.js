import React, { PureComponent } from 'react';
import { fetch, restore } from '../utils/fetchApi';

class CaptainAmericaView extends PureComponent {
  renderLoading() {
    return <div>Loading....</div>
  };

  renderError() {
    return <div>Sorry! Please try again.</div>
  }

  renderHero() {
    const { hero: { id, name, publisher } } = this.props;
    return (
      <div>
        <div>ID: {id}</div>
        <div>Name: {name}</div>
        <div>Publisher: {publisher}</div>
      </div>
    )
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.hero) {
      return this.renderHero();
    } else {
      return this.renderError();
    }
  }
}

export default class CaptainAmericaContainer extends PureComponent {
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
  };

  render() {
    return (<CaptainAmericaView {...this.state}/>);
  }
}
