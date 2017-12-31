import React from 'react';

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

export default HeroBranch;
