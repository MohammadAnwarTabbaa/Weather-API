import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <header>
      <input className="input" type="text" placeholder="Type in a city name" />
      <button>FIND WEATHER</button>
    </header>
    )
  }
}

export default Search
