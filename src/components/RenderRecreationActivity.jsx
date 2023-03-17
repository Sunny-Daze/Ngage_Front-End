import React from 'react'
import SideBar from './SideBar'
import RecreationActivity from '../pages/RecreationActivity'
import './RenderRecreationActivity.css';

function RenderCommunity() {
  return (
    <div className='RenderRecreationActivity'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="RecreationActivityBody">
        <RecreationActivity />
      </div>
    </div>
  )
}

export default RenderCommunity