import React from 'react'
import "./Banner.scss"

function Banner() {
  return (
    <div className="banner">
      <div className="info-wrapper">
        <h1>movie title</h1>
        <div className="play-buttons">
          <button type="button" className="play-button">Play</button>
          <button type="button" className="play-button">My List</button>
        </div>
        <p>this is a subscription for movies</p>
      </div>
    </div>
  )
}

export default Banner