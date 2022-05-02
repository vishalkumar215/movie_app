import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex', padding:'0.5', color:'maroon'}}>
          <h1>Movie App</h1>
          <h2 style={{ marginLeft:'2rem', marginTop:'0.5rem'}}>Favourites</h2>
      </div>
    )
  }
}

export default Navbar