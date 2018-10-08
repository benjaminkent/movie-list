import React, { Component } from 'react'
import './App.css'
import MovieList from './MovieList'

class App extends Component {
  render() {
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
          <h2>
            <em>Movies</em>:
          </h2>
        </main>
        <MovieList />
      </>
    )
  }
}

export default App
