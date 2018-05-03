import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_DARK_SKY_API_KEY

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
      fetch(
        'http://localhost:4567/'
      ).then(results => {
        console.log(results);
      })
    })
    // navigator.geolocation.getCurrentPosition(position => {
    //   fetch(
    //     'https://api.darksky.net/forecast/'
    //     + API_KEY
    //     + `/${position.coords.latitude},${position.coords.longitude}`
    //   ).then(results => {
    //     return results.json()
    //   }).then(data => {
    //     console.log(data);
    //   })
    // })
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
