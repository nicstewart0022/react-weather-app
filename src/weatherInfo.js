import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img src={props.data.iconUrl} alt="Mostly cloudy" />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: {props.data.percipitation}%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
