import React, { Component } from 'react'
import storm  from "../img/weather-icons/storm.svg"

export class WeatherItem extends Component {
    render() {
        const time = this.props.weather.dt_txt.substring(this.props.weather.dt_txt.indexOf(" ")+1) ; 
        return (
            <div className="weatherItem">
               <p className="time" >{time.slice(0,-3)}</p>
               <img className="downImage" src={storm} alt="storm icon" /> 
               <p className="downTemp">{Math.floor(this.props.weather.main.temp-273.15)+""}<span>&#176;</span></p>

            </div>
        )
    }
}

export default WeatherItem
