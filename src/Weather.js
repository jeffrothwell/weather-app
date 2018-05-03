import React, { Component } from 'react';

class Weather extends Component {
  constructor () {
    super();

    this.state = {}
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      var lat = position.coords.latitude
      var long = position.coords.longitude

      // first use this free API to reverse lookup city name
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}&zoom=18&addressdetails=1`
      ).then(results => {
        return results.json();
      }).then(data => {
        this.setState({city: data.address.city});
      })

      // now get the weather data
      fetch(
        `${lat}/${long}.json`
      ).then(results => {
        return results.json();
      }).then(data => {
        this.setState({
          temp: data.currently.temperature,
          summary: data.currently.summary,
          pop: data.currently.precipProbability
        });
      })
    })
  }

  render() {
    return (
      <div className="Weather">
        <h2>{this.state.city}</h2>
        <p>{this.state.summary}</p>
        <p>
          <span className="attribute">Temperature: </span>
          <span className="value">{this.state.temp} deg C</span>
        </p>
        <p>
          <span className="attribute">P.O.P: </span>
          <span className="value">{this.state.pop * 100}%</span>
        </p>
      </div>
    );
  }
}

export default Weather;
