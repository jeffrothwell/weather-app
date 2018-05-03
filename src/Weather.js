import React, { Component } from 'react';

class Weather extends Component {
  constructor () {
    super();

    this.state = {
      currentWeather: {
        temp: 45
      }
    }
  }

  render() {
    return (
      <div className="Weather">
        <span className="attribute">Temperature: </span>
        <span className="value">{this.state.currentWeather.temp}</span>
      </div>
    );
  }
}

export default Weather;
