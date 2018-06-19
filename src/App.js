import React, { Component } from 'react';
import Loading from './Loading';
import Weather from './Weather';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      city: "",
      weatherData: {},
      loading: true,
      error: false
    }
  }

  componentDidMount() {
    this.updateWeather();
  }
  updateWeather(e){
    this.setState({loading: true})
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
          weatherData: {
            temp: data.currently.temperature,
            summary: data.currently.summary,
            pop: data.currently.precipProbability
          },
          loading: false,
          error: false
        });
      }).catch(ex => {
        console.log("Error fetching weather data");
        this.setState({
          loading: false,
          error: true
        })
      })
    })
  }

  render() {

    return (
      <div className="App">
        <h1>What's My Weather?</h1>
        {   this.state.loading ? <Loading /> : <Weather
            city={this.state.city}
            weatherData={this.state.weatherData}
          />
        }
      <button onClick={(e) => this.updateWeather(e)}>Update Weather</button>
      </div>
    );
  }
}

export default App;
