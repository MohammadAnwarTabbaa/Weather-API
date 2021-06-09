import React, { Component } from 'react'

export class Pressure extends Component {
    render() {
        return (
        <div className="Pressure">
        <p>Humiditly </p> 
        <p>{this.props.pressure.main.humidity} <span>%</span></p>
        <p>Prusser</p>
        <p>{this.props.pressure.main.pressure}</p>
        </div>
        )
    }
}

export default Pressure
