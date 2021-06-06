import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import Weather from "./components/Weather";
import MainWeather from "./components/MainWeather";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bachir"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        {/* <header >
          <input className="input" type="text" defaultValue="Type in a city name" />
          <button>FIND WEATHER</button>
        </header> */}
        <Search/>
       <div className="body">
       
       {/* <div className="mainWeather"> 
        <img className="mainImage" src="http://placekitten.com/200/300" alt="cat" />
        <br/>       
        <div className="Temp">
        <p className="tempretureWord">Temperature </p> 
        <p className="tempreture">10 <span>&#176;</span></p>
        <p className className="toWord">to</p>
        <p className className="toTempreture">11</p>
        <p className className="celsius">&#8451;</p>
       </div>

       <div className="Pressure">
        <p className="humiditlyWord">Humiditly </p> 
        <p className="humiditly">78 <span>%</span></p>
        <p className className="prusserWord">Prusser</p>
        <p className className="prusser">1008.48</p>
       </div>

      </div> */}
       {/* <div className="weather">
         <div>
         <p className="time" >03:00</p>
        <img className="downImage" src="http://placekitten.com/g/200/300"></img>
        <p className="downTemp">8<span>&#176;</span></p>
        </div>
        
        <div>
         <p className="time" >06:00</p>
        <img className="downImage" src="http://placekitten.com/g/200/300"></img>
        <p className="downTemp">9<span>&#176;</span></p>
        </div>

        <div>
         <p className="time" >09:00</p>
        <img className="downImage" src="http://placekitten.com/g/200/300"></img>
        <p className="downTemp">14<span>&#176;</span></p>
        </div>

        <div>
         <p className="time" >12:00</p>
        <img className="downImage" src="http://placekitten.com/g/200/300"></img>
        <p className="downTemp">17<span>&#176;</span></p>
        </div>

        <div>
         <p className="time" >15:00</p>
        <img className="downImage" src="http://placekitten.com/g/200/300"></img>
        <p className="downTemp">18<span>&#176;</span></p>
        </div>

        <div>
         <p className="time" >18:00</p>
        <img className="downImage" src="http://placekitten.com/g/200/300"></img>
        <p className="downTemp">16<span>&#176;</span></p>
        </div>

        <div>
         <p className="time" >21:00</p>
        <img className="downImage" src="http://placekitten.com/g/200/300"></img>
        <p className="downTemp">13<span>&#176;</span></p>
        </div>
 
       </div> */}
       
       <MainWeather/>
       <Weather/>

       </div>

      </div>
    );
  }
}

export default App;
