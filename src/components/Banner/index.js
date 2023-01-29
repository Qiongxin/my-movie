import axios from '.././axios'
import React, { useEffect, useState } from 'react'
import "./Banner.scss"
import requests from '.././Request'

function Banner() {

  const[movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)

      setMovie(
        request?.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
      )
    }
  
    fetchData()
  }, [])

  const overflow = (text, n) => {
    return text?.length > n ? text.substring(0, n-1) + "..." : text
  }

  return (
    <div className="banner" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
      <div className="info-wrapper">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="play-buttons">
          <button type="button" className="play-button">Play</button>
          <button type="button" className="play-button">My List</button>
        </div>
        <p>{overflow(movie?.overview, 120)}</p>
      </div>
      {/* little trick to show shadow in the bottom of banner */}
      <div className="shadow"></div>
    </div>
  )
}

export default Banner