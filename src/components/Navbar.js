import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <>
           <div  className ="navigation"style={{display:'flex', padding:'0.5', color:'maroon'}}>
         <Link style={{ textDecoration:'none', color:'maroon'}} to ='/'> <h1>Movie App</h1></Link>
        <Link style={{textDecoration:'none'}} to ='/favourites'><h2 style={{ marginLeft:'2rem', marginTop:'0.5rem',color:'maroon' }}>Favourites</h2></Link>
        
         
          
       </div>
       
       </>
 
    )
  }
}

export default Navbar