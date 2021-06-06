import React, { Component } from 'react'
import storm  from "../img/weather-icons/storm.svg"

export class WeatherItem extends Component {
    render() {
        return (
            <div className="weatherItem">
               <p className="time" >03:00</p>
               <img className="downImage" src={storm} alt="storm icon" /> 
               <p className="downTemp">8<span>&#176;</span></p>

            </div>
        )
    }
}

export default WeatherItem
