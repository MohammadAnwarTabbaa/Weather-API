import React, { Component } from 'react'
import WeatherItem from './WeatherItem'


export class WeatherItems extends Component {
    render() {
        return (
       <div className="weather">
        <WeatherItem/>
        <WeatherItem/>
        <WeatherItem/>
        <WeatherItem/>
        <WeatherItem/>
        <WeatherItem/>
      </div>
        )
    }
}

export default WeatherItems
