import React, { Component } from 'react';
import { fetch, restore } from '../utils/fetchApi';

const LoadingView = () => (<div>Loading....</div>);

const ErrorView = () => (<div>Sorry! Please try again.</div>);

const HeroView = ({ id, name, publisher }) => (
  <div>
    <div>ID: {id}</div>
    <div>Name: {name}</div>
    <div>Publisher: {publisher}</div>
  </div>
);

const HeroBranch = ({ loading, hero }) => {
  if (loading) {
    return <LoadingView/>;
  } else if (hero) {
    return <HeroView {...hero} />;
  } else {
    return <ErrorView/>;
  }
};

export default class CaptainAmericaContainer extends Component {
  state = { loading: true };

  componentDidMount() {
    fetch('http://localhost:8080/api/heros/2')
      .then(res => res.json())
      .then(
        hero => this.setState({ loading: false, hero }),
        error => this.setState({ loading: false, error }),
      );
    restore();
  }

  render() {
    return (<HeroBranch {...this.state}/>);
  }
}
