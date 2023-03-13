import React from 'react'
import SideBar from './SideBar'
import Store from '../pages/Store'
import './RenderStore.css'

function RenderCommunity() {
  return (
    <div className='RenderStore'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="storeBody">
        <Store />
      </div>
    </div>
  )
}

export default RenderCommunity