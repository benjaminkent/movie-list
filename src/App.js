import React, { Component } from 'react'
import './App.css'

class App extends Component {
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
      <>
        <header>
          <h1>Most Popular movies of 1989</h1>
          <p>
            1989 was full of amazingly amazing movies. Keep reading to discover
            the most popular movies released that year.
          </p>
        </header>
        <main>
          <h2>Movies:</h2>
          <section>
            <figure>
              <img src={moviePoster} alt="movie poster" />
            </figure>
            <ul>
              <li>
                <strong>Title</strong>: {this.state.results[0].title}
              </li>
              <li>
                <strong>Overview</strong>: {this.state.results[0].overview}
              </li>
              <li>
                <strong>Released</strong>: {this.state.results[0].release_date}
              </li>
              <li>
                <strong>Overall Rating</strong>:{' '}
                {this.state.results[0].vote_average}
              </li>
            </ul>
          </section>
        </main>
      </>
    )
  }
}

export default App
