import React from 'react'
import "./Banner.scss"

function Banner() {

  const overflow = (text, n) => {
    return text.length > n ? text.substring(0, n-1) + "..." : text
  }

  return (
    <div className="banner">
      <div className="info-wrapper">
        <h1>movie title</h1>
        <div className="play-buttons">
          <button type="button" className="play-button">Play</button>
          <button type="button" className="play-button">My List</button>
        </div>
        <p>{overflow('this is a subscription for movies', 150)}</p>
      </div>
      <div className="shadow"></div>
    </div>
  )
}

export default Banner