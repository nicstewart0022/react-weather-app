import React, { useState } from "react";
import axios from "axios";
import formatedDate from "./formatedDate";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState({ ready: false });
  const [weatherData, setWeatherData] = useState(null);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      percipitation: 10,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      date: new Date(response.data.dt * 1000),
    });

    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <formatedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.iconUrl} alt="Mostly cloudy" />

              <span className="temperature">{Math.round(temperature)}</span>
              <span className="unit">°F</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherData.percipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} m/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b9f1b5b4a8b07e121a5baf80f5ff5702";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
