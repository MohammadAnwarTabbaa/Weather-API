import React, { Component } from "react";
import Search from "./components/Search";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import Weather from "./components/Weather";
import MainWeather from "./components/MainWeather";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    weather :"" , 
    api :""
      };
  }

    
componentDidMount(){
  this.setState({weather: fakeWeatherData.list[0].main}) 
  this.setState({api:"http://api.openweathermap.org/data/2.5/forecast?q=$london&cnt=8&units=metric&appid=$2bd2287a550d85770965019180356c1a" })
}

  render() {
    
    return (
      <div className="app">
        <Search/>
       <div className="body">    
       <MainWeather weatherarray = {this.state.weather}/>
       
       <Weather/>
       </div>
      </div>
    );
  }
}

export default App;
