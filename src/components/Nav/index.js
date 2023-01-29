import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"


function Nav() {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    if (window.scrollY > 60) {
      setShow(true)
    } else (
      setShow(false)
    )
  }

  useEffect(() => {
    window.addEventListener("scroll", handleShow)
  
    return () => {
      window.removeEventListener("scroll", handleShow)
    }
  }, [])

  
  
  return (
    <div className={`nav ${show && `nav-black`}`}>
      <Link to="/"><img className="logo-img" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="netflix logo" /></Link>
      <Link to="/profile"><img className="avatar-img" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" /></Link>
    </div>
  )
}

export default Nav