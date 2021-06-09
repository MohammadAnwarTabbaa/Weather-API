import React, { Component } from 'react'
export class Search extends Component {
 state = {
   city : '',
   errr : false
 }

 onClick = (e)=>{
    this.props.city(this.state.city)
  
}

onheek = (e)=>{
  this.props.errr(this.state.errr)

}

 onChange  = (e)=> this.setState({[e.target.name]: e.target.value}) ; 

 
  render() {
   
    return (
      <header>
      <input className="input" name="city"  
      type="text" 
      name="city"
      placeholder="Type in a city name"
      value={this.state.city}
      onChange={this.onheek}
      onChange={this.onChange}
      
      />
      <button
      onClick={this.onClick} 
       >FIND WEATHER </button>
        </header>
    )
  }
}

export default Search
