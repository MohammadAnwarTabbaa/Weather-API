import React, { Component } from 'react'
import WeatherItems from './WeatherItems'
export class Weather extends Component {
    render() {
        return (
            <div className="weather">
                <WeatherItems weather={this.props.weather}/>
            </div>
        )
    }
}

export default Weather
