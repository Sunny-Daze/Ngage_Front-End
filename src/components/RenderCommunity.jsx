import React from 'react'
import SideBar from './SideBar'
import Community from '../pages/Community'
import './RenderCommunity.css'

function RenderCommunity() {
  return (
    <div className='RenderCommunity'>
        <SideBar />
        <div>
        <Community />
        </div>
    </div>
  )
}

export default RenderCommunity