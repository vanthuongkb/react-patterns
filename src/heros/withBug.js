import React from 'react';

const withBug = (Component) =>
  class extends React.Component {
    // Do some works here!!!

    render() {
      return (<Component {...this.props} hero="I am a bug" />);
    }
  };

export default withBug;
