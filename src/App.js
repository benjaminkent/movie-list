import React, { Component } from 'react'
import styled from 'styled-components'

import './App.css'
import MovieList from './MovieList'

const FooterInfo = styled.footer`
  a,
  p {
    color: #fcc24e;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  text-align: center;
  margin: 3rem 0 0 0;
  width: 100%;

  i {
    color: #a81a72;
  }

  a:hover {
    color: #a81a72;
  }
`

const Header = styled.header`
  color: #e7eb90;
  width: 600px;
`

const Title = styled.main`
  padding-top: 2rem;
  width: 600px;
  color: #69fff1
  text-shadow: 1.2px 1.2px 1.2px #e7eb90;

`

class App extends Component {
  render() {
    return (
      <>
        <Header>
          <h1>Most Popular movies of 1989</h1>
          <p>
            1989 was full of amazingly amazing movies. Keep reading to discover
            the most popular movies released that year.
          </p>
        </Header>
        <Title>
          <h2>
            <em>Movies</em>:
          </h2>
        </Title>
        <MovieList />
        <FooterInfo>
          <p>
            All movie posters and information courtesy of{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              title="Check out The Movie DB website!"
              href="https://www.themoviedb.org/"
            >
              The Movie DB
            </a>
            .
          </p>
          <p>
            Made with <i className="fas fa-heart" /> in St Petersburg, FL. 2018
            Benjamin Kent,
            <a
              rel="noopener noreferrer"
              target="_blank"
              title="Check out my site!"
              href="http://benjaminkent.io/"
            >
              benjaminkent.io
            </a>
          </p>
        </FooterInfo>
      </>
    )
  }
}

export default App
