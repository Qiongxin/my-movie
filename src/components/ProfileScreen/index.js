import React from 'react'
import Nav from '../Nav'
import "./ProfileScreen.scss"
import { signOut } from "firebase/auth"
import { auth} from "../../firebase"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { nanoid } from 'nanoid'


function ProfileScreen() {

  const user = useSelector(selectUser)

  const plans = [{
    plan: 'Netflix Premium',
    description: '4K + HDR'
  }, {
    plan: 'Netflix Standard',
    description: '1080p'
  }, {
    plan: 'Netflix Basic',
    description: '480p'
  }]


  return (
    <div className="profile">
      <Nav />
      <h1>Edit Profile</h1>
      <div className="wrapper">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
        <div className="content">
          <h3>{user.email}</h3>
          <p>Plans</p>
          {plans.map((item) => 
          <div className="subscription" key={nanoid()}>
            <div className="detail">
              <p>{item.plan}</p>
              <p>{item.description}</p>
            </div>
            <button type="button">Subscription</button>
            
          </div>
          )}
          <Link to="/"><button type="button" onClick={() => signOut(auth)}>Sign Out</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen