import React from 'react'
import SideBar from './SideBar'
import Project from '../pages/Project'
import './RenderProject.css';

function RenderCommunity() {
  return (
    <div className='RenderProject'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="ProjectBody">
        <Project />
      </div>
    </div>
  )
}

export default RenderCommunity