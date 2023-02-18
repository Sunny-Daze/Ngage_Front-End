import React from 'react'
import SideBar from './SideBar'
import './RenderRecreation.css';
import Recreation from '../pages/Recreation';

function RenderRecreation() {
  return (
    <div className='RenderRecreation'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="recreationBody">
        <Recreation />
      </div>
    </div>
  )
}

export default RenderRecreation