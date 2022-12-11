import React from 'react'
import "../StartScreen.scss"

function StartScreen() {
  return (
    <div>
      <div className="navbar">
        <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netflix logo" />
        <button type="button">Sign In</button>
      </div>
      <div className="content">
        <h1>Unlimited films, TV programmes and More.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form>
          <input type="email" placeholder='Email Address' />
          <button type="button">GET STARTED</button>
        </form>
      </div>
    </div>
  )
}

export default StartScreen