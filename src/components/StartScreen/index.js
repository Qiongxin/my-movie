import React from 'react'
import { useState } from 'react'
import SignScreen from '../SignScreen'
import "./StartScreen.scss"

function StartScreen() {
  const [start, setStart] = useState(true)

  return (
    <div className="StartScreen">
      <div className="dark-bg">
        <div className="navbar">
          <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netflix logo" />
          <button type="button" style={start ? {visibility: "visible"} : {visibility: "hidden"}} onClick={() => setStart(false)}>Sign In</button>
        </div>
          {start ?
          <div className="content">
            <h1>Unlimited films, TV programmes and More.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form>
              <input type="email" placeholder='Email Address' />
              <button onClick={() => setStart(false)} type="button">GET STARTED</button>
            </form>
          </div> : 
          <SignScreen />}
      </div>
    </div>
  )
}

export default StartScreen