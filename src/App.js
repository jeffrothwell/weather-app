import React, { Component } from 'react';
import Weather from './Weather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Current Weather:</h1>
        <Weather />
      </div>
    );
  }
}

export default App;
