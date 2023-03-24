import React from 'react'
import SideBar from './SideBar'
import TaskInfo from '../pages/TaskInfo'
import './RenderTaskInfo.css';

function RenderCommunity() {
  return (
    <div className='RenderTaskInfo'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="TaskInfoBody">
        <TaskInfo />
      </div>
    </div>
  )
}

export default RenderCommunity


