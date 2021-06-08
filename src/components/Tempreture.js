import React, { Component } from 'react'

export class Tempreture extends Component {
    render() {
        return (
        <div className="Temp">
        <p>Temperature </p> 
        {/* it is for conver to celsius */}
        <p>{Math.floor((this.props.temp.temp_max-32)*5/9)}<span>&#176;</span></p>
        <p>to</p>
        <p>{Math.floor((this.props.temp.temp_min-32)*5/9)+""}</p>
        <p>&#8451;</p>
        </div>
        )
    }
}

export default Tempreture
