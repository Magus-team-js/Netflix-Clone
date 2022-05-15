import React from 'react'
import Movie from './movie/Movie'

export default function MovieList(props) {
  return (
    <>
      {
        props.movies.map((movie) => {
          return (
            <>
              <div>
                <Movie key={movie.id} movie={movie} updateMovie={props.updateMovie} />
              </div>
            </>
          )
        })
      }
    </>
  )
}
