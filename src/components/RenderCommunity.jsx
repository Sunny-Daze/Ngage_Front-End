import React from 'react'
import SideBar from './SideBar'
import DashBoard from '../pages/Dashboard'
import './RenderCommunity.css'

function RenderCommunity() {
  return (
    <div className='RenderCommunity'>
        <SideBar />
        <div>
        <DashBoard />
        </div>
    </div>
  )
}

export default RenderCommunity