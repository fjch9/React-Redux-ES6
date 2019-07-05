import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from "../../services/transformWeather";
import { api_weather } from "../../constants/api_url";
import "./styles.css";

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Buenos Aires",
      data: null
    };
  }

  componentDidMount() {
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        debugger;
        const newWeather = transformWeather(data);
        this.setState({
          data: newWeather,
          city: newWeather.city
        });
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
        {/* <button onClick={this.handleUpdateClick} Actualizar /> */}
      </div>
    );
  }
}

export default WeatherLocation;
