import React, { useState } from 'react'
import MovieCard from './movieCard'

export default function SearchMovies () {
  const APIKEY = '756b1625be9e8386e67e487779748454'

  // States
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const searchMovies = async e => {
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    } catch (err) {
      console.log('Got the folowing error: ', err)
    }
  }

  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        <label className='label' htmlFor='query'>
          Movie Name
        </label>
        <input
          className='input'
          name='query'
          placeholder='i.e Jurassic Park'
          type='text'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className='button' type='submit'>
          Search
        </button>
      </form>

      <div className='card-list'>
        {movies
          .filter(movie => movie.poster_path)
          .map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  )
}
