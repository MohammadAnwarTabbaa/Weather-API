import React, { Component } from 'react'
import clear from '../img/weather-icons/clear.svg'
import Pressure from './Pressure'
import Tempreture from './Tempreture'
export class MainWeather extends Component {
    render() {
        return (
            <div className="mainWeather">
                <img className="mainImage" src={clear} alt="clear"/>
                <Tempreture/>
                <Pressure/>
                
            </div>
        )
    }
}

export default MainWeather
