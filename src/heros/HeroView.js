import React, { PureComponent } from 'react';

export default class HeroView extends PureComponent {
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