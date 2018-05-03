import React, { Component } from 'react';

// const API_KEY = process.env.REACT_APP_DARK_SKY_API_KEY

class Weather extends Component {
  constructor () {
    super();

    this.state = {
      currentWeather: {}
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(
        `${position.coords.latitude}/${position.coords.longitude}.json`
      ).then(results => {
        return results.json();
      }).then(data => {
        this.setState({
          currentWeather: {
            city: "Guelph",
            temp: data.currently.temperature,
            summary: data.currently.summary,
            pop: data.currently.precipProbability
          }
        });
      })
    })
  }



  render() {
    return (
      <div className="Weather">
        <h2>{this.state.currentWeather.city}</h2>
        <p>{this.state.currentWeather.summary}</p>
        <p>
          <span className="attribute">Temperature: </span>
          <span className="value">{this.state.currentWeather.temp} deg C</span>
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
