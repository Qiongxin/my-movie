import React, { useEffect, useState } from 'react'
import "./Nav.scss"

function Nav() {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    if (window.scrollY > 100) {
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
      <img className="left-img" src="https://img.freepik.com/premium-photo/orange-eyes-british-shortair-isolated-white_191971-27184.jpg?w=2000" alt="cat" />
      <img className="right-img" src="https://e7.pngegg.com/pngimages/238/156/png-clipart-meng-pet-cat-meng-chong-kitty.png" alt="avatar" />
    </div>
  )
}

export default Nav