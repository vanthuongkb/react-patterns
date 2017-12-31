import React from "react";
import { fetch, restore } from '../utils/fetchApi';

export default class CaptainAmericaComponentInjection extends React.Component {
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
    const { HeroView } = this.props;
    return <HeroView {...this.state} />;
  }
}
