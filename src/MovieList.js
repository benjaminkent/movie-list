import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MovieDetails = styled.li`
  color: #e7eb90;
  list-style: none;
  em {
    color: #ff0000;
    font-size: 1.5rem;
    text-shadow: 1px 1px 1px #ffe035;
  }
`

const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
`

const MovieInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 500px;
`

class MovieList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: []
    }
    console.log(this.state.results)
  }

  componentWillMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=528804f087c8209bcf748a9147e6c57d&language=en-US&sort_by=popularity.desc&certification_country=united%20states&include_adult=false&include_video=false&page=1&primary_release_year=1989&year=1989'
      )
      .then(response => {
        this.setState(response.data)
        console.log(response.data)
      })
  }

  render() {
    const movies = this.state.results.map((movie, index) => {
      let moviePoster =
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2' +
        this.state.results[index].poster_path

      return (
        <>
          <figure>
            <img src={moviePoster} alt="movie poster" />
          </figure>
          <MoviesList>
            <MovieDetails>
              <strong>
                <em>Title</em>
              </strong>{' '}
              : {movie.title}
            </MovieDetails>
            <MovieDetails>
              <strong>
                <em>Overview</em>
              </strong>
              : {movie.overview}
            </MovieDetails>
            <MovieDetails>
              <strong>
                <em>Released</em>
              </strong>
              : {movie.release_date}
            </MovieDetails>
            <MovieDetails>
              <strong>
                <em>Overall Rating</em>
              </strong>
              : {movie.vote_average}
            </MovieDetails>
          </MoviesList>
        </>
      )
    })

    return <MovieInfo>{movies}</MovieInfo>
  }
}

export default MovieList
