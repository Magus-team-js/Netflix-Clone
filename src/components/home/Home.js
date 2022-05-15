import React, { useEffect, useState } from 'react';
import MovieList from '../movieList/MovieList'
import Navbar from '../navbar/Navbar';

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    let url = 'https://movies-bahaa.herokuapp.com/trending'
    let response = await fetch(url);
    let moviesData = await response.json();
    setMovies(moviesData);
  }

  function updateMovie(newMovie, id) {
    let updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        movie.comment = newMovie.userComment;
        return movie;
      } else {
        return movie;
      }
    })
    setMovies(updatedMovies);
  }

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(18rem, 1fr))', backgroundColor: '#413F42' }}>
        {
          (movies.length > 0) && <MovieList movies={movies} updateMovie={updateMovie} />
        }
      </div>
    </>
  )
}
