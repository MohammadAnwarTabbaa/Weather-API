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
    city : '' ,

    // those for api 
    items : [],
    isLoaded : false,
    kye : '2bd2287a550d85770965019180356c1a',
    testt : []
      };
  }
  city = (city)=>{
    
    // this.setState({city : city})

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${this.state.kye}`
  )
  .then(res=>res.json())
  .then(json =>{
  this.setState({
  isLoaded : true , 
  items : json , 
  })
  })

  // .then(this.setState({testt: this.state.items.list[0]}))
  

  }

componentDidMount(){
 
  // this.setState({weather: this.state.items.cod}) 
  // this.setState({downWeather: FakeWeather.list}) 

  // those for api 

// this.setState({kye : '' })
// fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&cnt=8&units=metric&appid=${this.state.kye}`
//   )
//   .then(res=>res.json())
//   .then(json =>{
//   this.setState({
//   isLoaded : true , 
//   items : json , 
//   })
//   })
  // this.setState({city : 'london' })
  // this.setState({city : '2bd2287a550d85770965019180356c1a' })



 }
 
 
  
render() {
  
  
  
      (this.state.isLoaded&&console.log(this.state.items.list[0]));
      

     return (
      <div className="app">
        <Search city={this.city}/>
       <div className="body">
         {/* testing  */}
       {/* {this.state.isLoaded && console.log(this.state.items)}  */}
       {(() => {
        if (this.state.isLoaded==true) {
          return [
          
          <MainWeather weatherarray = {this.state.items.list[0]}/>,
          <Weather weather={this.state.items.list}/>
          
          ]
        } else {
          return <p>hi</p>
        }
      })()}


       {/* {if(this.this.state.isLoaded===true){
       
       } */}
       <div>
       {/* <p>{this.state.testt}</p> */}
       </div>
       {/* <Weather weather={this.state.items}/> */}
       </div>
      </div>
    );
  }
}

export default App;
