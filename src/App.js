import React, { Component } from "react";
import Search from "./components/Search";

import "./App.css";
import Weather from "./components/Weather";
import MainWeather from "./components/MainWeather";
import FakeWeather from "./data/FakeWeather.json"


//Sorry for all json commit before but thi is the final commit :)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    // this for main weather 
    weather :"" , 
    // this for down weather
    downWeather : [] ,

    // those for api 
    // items : [],
    // isLoaded : false,
    // city : "",
    // kye : ""
      };
  }
 
 
    
componentDidMount(){
  this.setState({weather: FakeWeather.list[0].main}) 
  this.setState({downWeather: FakeWeather.list}) 
 }

  
render() {

     return (
      <div className="app">
        <Search/>
       <div className="body">
         {/* testing  */}
       {/* {this.state.isLoaded && console.log(this.state.items)}  */}
       <MainWeather weatherarray = {this.state.weather}/>
       <Weather weather={this.state.downWeather}/>
       </div>
      </div>
    );
  }
}

export default App;
