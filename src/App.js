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
    weather :""
      };
  }

  
  
componentDidMount(){
  this.setState({weather: fakeWeatherData.list[0].main})
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
