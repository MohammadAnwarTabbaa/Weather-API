import React, { Component } from "react";
import Search from "./components/Search";

import "./App.css";
import Weather from "./components/Weather";
import MainWeather from "./components/MainWeather";
import FakeWeather from "./data/FakeWeather.json"



class App extends Component {
     constructor(props) {
    super(props);
    this.state = {
    // this for main weather 
    weather :"" , 
    // this for down weather
    downWeather : [] ,
    city : '' ,
    errr : false , 

    // those for api 
    items : [],
    hasError : false ,
    isLoaded : false,
    kye : '2bd2287a550d85770965019180356c1a',
    testt : []
      };
  }
 
  
  city = (city)=>{ 
    
    
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${this.state.kye}`
  )
  .then(res=> {
    if(!res.ok){
      this.setState({errr :true})
    }
    
   return res.json()})
  .then(json =>{
  this.setState({
  isLoaded : true , 
  items : json , 
  })
  })
  }
  errr = (errr)=>{
    this.setState({errr : errr})
  }
 

render() {
      console.log(this.state.errr)
      // (this.state.isLoaded&&console.log(this.state.items.list[0]));
      
     return (
      <div className="app">
        <Search city={this.city} errr={this.errr}/>
       <div className="body">
         {/* testing  */}
       {/* {this.state.isLoaded && console.log(this.state.items)}  */}
       {(() => {
        if (this.state.isLoaded==true && this.state.errr ==false ) {
          
          return [
          
          <MainWeather weatherarray = {this.state.items.list[0]}/>,
          <Weather weather={this.state.items.list}/>
          
          ]
        } else {
          
          return <p>hi</p>
        }
      })()}
       
        
         
        </div>
      </div>
      
    );
    
  }
  
}

export default App;
