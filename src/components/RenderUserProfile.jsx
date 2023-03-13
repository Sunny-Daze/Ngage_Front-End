import React from 'react'
import './RenderUserProfile.css'
import SideBar from './SideBar'
import UserProfile from '../pages/UserProfile'

function RenderUserProfile() {
  return (
    <div className='RenderUserProfile'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="userProfileBody">
        <UserProfile />
      </div>
    </div>
  )
}

export default RenderUserProfile