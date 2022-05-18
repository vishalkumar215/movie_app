import React, { Component } from "react";
import { movies } from "../movieData";
// import axios from 'axios'

export class Banner extends Component {
  render() {
    let moviesElem = movies.results[Math.floor((Math.random() * 10) + 1)]
      let backDrop =  moviesElem.backdrop_path
    let release = moviesElem.release_date
    let overview = moviesElem.overview

    return (

     
      <div className="card  banner-card">
        <img
          src={`https://image.tmdb.org/t/p/original${backDrop}`}
          className="card-img-top banner-img"
          alt="..."
        />

        <h5 className="card-title banner-title"><strong> {moviesElem.title}</strong></h5>
        <h6 className="movie-release" style={{marginTop:'0.2rem'}}>Release Date :-{release}</h6>
        <p className="card-text banner-text">
        Overview :-
        <br />
            {overview}
        </p>
        
      </div>
    );
  }
}

export default Banner;
