import React, { Component } from 'react'
import clear from '../img/weather-icons/clear.svg'
import cloudy from '../img/weather-icons/cloudy.svg'
import drizzle from '../img/weather-icons/drizzle.svg'
import fog from '../img/weather-icons/fog.svg'
import mostlycloudy from '../img/weather-icons/mostlycloudy.svg'
import partlycloudy from '../img/weather-icons/partlycloudy.svg'
import rain from '../img/weather-icons/rain.svg'
import snow from '../img/weather-icons/snow.svg'
import storm from '../img/weather-icons/storm.svg'
import unknown from '../img/weather-icons/unknown.svg'

export class WeatherItem extends Component {
    render() {
        const src = this.props.weather.weather[0].id ; 
        let imageURL = "";
        if(src<300){
                imageURL =  storm
            }
            else if(src>=300 && src<=499){
                imageURL =  drizzle
            }
            else if(src>=500 && src<=599){
                imageURL =  rain
            }
            else if(src>=600 && src<=699){
                imageURL =  snow
            }
            else if(src>=700 && src<=799){
                imageURL =  fog
            }
             else if(src===800){
                imageURL = clear
            }
            else if(src===801){
                imageURL =  partlycloudy
            }
            else if(src>801 && src<=805){
                imageURL = mostlycloudy
            }





        const time = this.props.weather.dt_txt.substring(this.props.weather.dt_txt.indexOf(" ")+1) ; 
        return (
            <div className="weatherItem">
               <p className="time" >{time.slice(0,-3)}</p>
               <img className="downImage" src={imageURL} alt="storm icon" /> 
               <p className="downTemp">{Math.floor(this.props.weather.main.temp)}<span>&#176;</span></p>

            </div>
        )
    }
}

export default WeatherItem
