import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is created by Nicole Stewart is {""}
          <a
            href="https://github.com/nicstewart0022/react-weather-app"
            target="_blank"
            rel="nonreferrer noopener"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://brave-rosalind-500d9c.netlify.app/"
            target="_blank"
            rel="nonreferrer noopener"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
