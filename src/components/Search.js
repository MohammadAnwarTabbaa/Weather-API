import React, { Component } from 'react'
export class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //    city: ""
  //     };
     
  // }

  render() {
   
    return (
      <header>
      <input className="input" name="city"  type="text" placeholder="Type in a city name" />
      <button>FIND WEATHER</button>
      </header>
    )
  }
}

export default Search
