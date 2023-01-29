import React, { useState } from 'react'
import { useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase'

function SignScreen() {
  const [signUp, setSignUp] = useState(false)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const signIn = () => {
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const register = () => {
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="sign">
      <div className="main">
        <h1>{signUp ? "Sign Up" :  "Sign In"}</h1>
        <form>
          <input ref={emailRef} type="email" placeholder='Email'/>
          <input ref={passwordRef} type="password" placeholder='Password' />
        </form>
        <button type="button" onClick={signUp ? register : signIn}>{signUp ? "Sign Up" : "Sign In"}</button>
        <p style={signUp ? {visibility: "hidden"} : {visibility: "visible"}}>New to Netflix? <span onClick={() => setSignUp(true)}>Sign up now</span></p>
      </div>
    </div>
  )
}

export default SignScreen