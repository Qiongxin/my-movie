import axios from '.././axios'
import React, { useEffect, useState } from 'react'
import "./Rows.scss"
function Rows({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([])

  //get the movies list from database and set to movies
  // add fetchUrl as dependency, runs when fetchUrl changes
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)

      setMovies(
        request.data.results
      )
    }
    
    fetchData()
  }, [fetchUrl])
  
  return (
    <div className="Rows">
      <h1>{title}</h1>
      
      {/* use isLargeRow to decide add extra className for poster or not */}
      <div className="posters">

        {/* if isLargeRow set to true, render poster image, if it's not, render backdrop path
            in order to avoid dead link, only render the poster or backdrop if it exist */}
        {movies.map(movie => 
          ((movie.backdrop_path && !isLargeRow) || (movie.poster_path && isLargeRow)) &&
          (<img className={`poster ${isLargeRow && "poster_large"}`} key={movie.id} src=
          {`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="movie" />)
        )}
      </div>
    </div>
  )
}

export default Rows