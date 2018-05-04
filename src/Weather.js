import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <h2>Currently in {this.props.city}</h2>
        <p>it's {this.props.weatherData.summary}</p>
        <p>
          <span className="attribute">Temperature: </span>
          <span className="value">{this.props.weatherData.temp} deg C</span>
        </p>
        <p>
          <span className="attribute">P.O.P: </span>
          <span className="value">{this.props.weatherData.pop * 100}%</span>
        </p>
      </div>
    );
  }
}

export default Weather;
