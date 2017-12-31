import React from 'react';
import { fetch, restore } from '../utils/fetchApi';

const withCA = (HeroViewComponent) =>
  class extends React.Component {
    state = { loading: true };

    componentDidMount() {
      fetch('http://localhost:8080/api/heros/1')
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

export default withCA;

// NOTE:
// - All the planet fetching logic is inside this HOC,
// and is not dependent on any view logic.
// -