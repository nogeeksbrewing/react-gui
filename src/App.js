import React from 'react';
// import logo from './nogeeks.svg';
import './App.css';
import Logo from './Logo';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const BreweryQuery = () => (
  <Query
    query={gql`
      {
        brewery {
          name
          location
          established
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error ${error.message}</p>;

      return (
        <Logo brewery={data.brewery} />
      );
    }}
  </Query>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BreweryQuery />
      </header>
    </div>
  );
}

export default App;
