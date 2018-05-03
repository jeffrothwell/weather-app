import React, { Component } from 'react';

class Weather extends Component {
  constructor () {
    super();

    this.state = {
      currentWeather: {
        city: "Guelph",
        temp: 22,
        summary: "Clear",
        pop: 60
      }
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log("latitude " + position.coords.latitude);
      console.log("longitude " + position.coords.longitude);
    })
  }

  render() {
    return (
      <div className="Weather">
        <h2>{this.state.currentWeather.city}</h2>
        <p>{this.state.currentWeather.summary}</p>
        <p>
          <span className="attribute">Temperature: </span>
          <span className="value">{this.state.currentWeather.temp}</span>
        </p>
        <p>
          <span className="attribute">P.O.P: </span>
          <span className="value">{this.state.currentWeather.temp}%</span>
        </p>
      </div>
    );
  }
}

export default Weather;
