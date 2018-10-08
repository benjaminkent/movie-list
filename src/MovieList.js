import React, { Component } from 'react'
import styled from 'styled-components'

const MovieDetails = styled.li`
  list-style: none;
  em {
    color: red;
    font-size: 1.5rem;
    text-shadow: 1px 1px 1px yellow;
  }
`

const MovieInfo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  width: 700px;
`

class MovieList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      total_results: 3254,
      total_pages: 163,
      results: [
        {
          vote_count: 4521,
          id: 89,
          video: false,
          vote_average: 7.7,
          title: 'Indiana Jones and the Last Crusade',
          popularity: 22.133,
          poster_path: '/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg',
          original_language: 'en',
          original_title: 'Indiana Jones and the Last Crusade',
          genre_ids: [12, 28],
          backdrop_path: '/vfvVuu1JdnEGcyZUj7VHrhhbeMj.jpg',
          adult: false,
          overview:
            "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
          release_date: '1989-05-24'
        },
        {
          vote_count: 3196,
          id: 268,
          video: false,
          vote_average: 7.1,
          title: 'Batman',
          popularity: 16.169,
          poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
          original_language: 'en',
          original_title: 'Batman',
          genre_ids: [14, 28],
          backdrop_path: '/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg',
          adult: false,
          overview:
            "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
          release_date: '1989-06-23'
        }
      ]
    }
  }

  render() {
    const moviePoster =
      'https://image.tmdb.org/t/p/w185_and_h278_bestv2' +
      this.state.results[0].poster_path
    return (
      <MovieInfo>
        <figure>
          <img src={moviePoster} alt="movie poster" />
        </figure>
        <ul>
          <MovieDetails>
            <strong>
              <em>Title</em>
            </strong>
            : {this.state.results[0].title}
          </MovieDetails>
          <MovieDetails>
            <strong>
              <em>Overview</em>
            </strong>
            : {this.state.results[0].overview}
          </MovieDetails>
          <MovieDetails>
            <strong>
              <em>Released</em>
            </strong>
            : {this.state.results[0].release_date}
          </MovieDetails>
          <MovieDetails>
            <strong>
              <em>Overall Rating</em>
            </strong>
            : {this.state.results[0].vote_average}
          </MovieDetails>
        </ul>
      </MovieInfo>
    )
  }
}

export default MovieList
