import React from 'react';
import { fetch, restore } from '../utils/fetchApi';

const withHero = (HeroViewComponent) =>
  class extends React.Component {
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
      return (<HeroViewComponent {...this.props} {...this.state}/>);
    }
  };

export default withHero;

// NOTE:
// - All the planet fetching logic is inside this HOC,
// and is not dependent on any view logic.
// -