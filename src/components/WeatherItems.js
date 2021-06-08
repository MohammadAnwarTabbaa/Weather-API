import React, { Component } from 'react'
import WeatherItem from './WeatherItem'
export class WeatherItems extends Component {
    render() {
          return  this.props.weather.slice(1,8).map((weatherDetail)=>(
         <WeatherItem key={weatherDetail.dt} weather={weatherDetail} />
        ));
    }
}

export default WeatherItems
