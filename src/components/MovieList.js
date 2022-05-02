import React, { Component } from "react";

import { movies } from "../movieData";
import axios from 'axios'


export class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      hover: "",
      parr: [1],
      movies:[],
      currPage :1
    };
  }

  async componentDidMount(){
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3f9211c990e7a29a70783522c55b8bbc&language=en-US&page=${this.state.currPage}`)
    let movieData = res.data

    this.setState({
      movies:[...movieData.results]
    })
    console.log(movieData)
  }

  changeMovies = async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3f9211c990e7a29a70783522c55b8bbc&language=en-US&page=${this.state.currPage}`)
    let movieData = res.data

    this.setState({
      movies:[...movieData.results]
    })

  }

  handleNext=()=>{
    let tempArr =[]

    for(let i =1;i <=this.state.parr.length+1 ;i++){
      tempArr.push(i)
    }
    this.setState({
      parr:[...tempArr],
      currPage : this.state.currPage+1


    },this.changeMovies)
   
  }

  handlePrevious=()=>{
    if(this.state.currPage != 1){
      this.setState({
        currPage:this.state.currPage-1
      },this.changeMovies)
    }
  }

  handlePageClick=(value)=>{
    if(value != this.state.currPage){
      this.setState({
        currPage : value
      }, this.changeMovies)
    }


  }
  render() {
   
    return (
      <>
        <div>
          <h3 className="text-center">
            {" "}
            <strong>Trending</strong>
          </h3>
        </div>

        <div className="movies-list">
          {this.state.movies.map((movieElem) => (
            <div
              className="card movie-card"
              onMouseEnter={() => this.setState({ hover: movieElem.id })}
              onMouseLeave={() => this.setState({ hover: " " })}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`}
                style={{ height: "40vh", width: "20vw" }}
                className="card-img-top movie-img"
                alt="..."
              />

              <h5 className="card-title movie-title">{movieElem.title}</h5>
              <h6 className="movie-release">
                Release:-{movieElem.release_date}
              </h6>
              <div className="button-wrapper">
                {this.state.hover == movieElem.id && (
                  <a href="#" class="btn btn-primary movies-button text-center">
                    Add to Favourites
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="Page navigation example">
            <ul className="pagination ">
              <li className="page-item">
                <a className="page-link" onClick={this.handlePrevious}>
                  Previous
                </a>
              </li>
              

              {this.state.parr.map((value) => (
                <li className="page-item">
                  <a className="page-link" onClick={this.handlePageClick}>
                    {value}
                  </a>
                </li>
              ))}

              <li className="page-item">
                <a className="page-link" onClick={this.handleNext}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default MovieList;
