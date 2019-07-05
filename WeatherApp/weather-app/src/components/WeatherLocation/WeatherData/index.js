import React from "react";
import PropTypes from "prop-types";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  FOG
} from "../../../constants/weathers";

const WeatherData = ({ data }) => {
  debugger;
  const { temperature, weatherState, humidity, wind } = data;
  return (
    <div className="weatherDataCont">
      <WeatherTemperature
        temperature={temperature}
        weatherState={weatherState}
      />
      <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
  );
};

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
};

export default WeatherData;
