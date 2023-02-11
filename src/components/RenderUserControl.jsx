import React from 'react'
import SideBar from './SideBar'
import UserControl from '../pages/UserControl'
import './RenderUserControl.css';

function RenderCommunity() {
  return (
    <div className='RenderUserControl'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="userControlBody">
        <UserControl />
      </div>
    </div>
  )
}

export default RenderCommunity