import React from 'react'
import SideBar from './SideBar'
import LearningManagement from '../pages/LearningManagement'
import './RenderLearningManagement.css'

function RenderLearningManagement() {
  return (
    <div className='RenderLearningManagement'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="LearningManagementBody">
        <LearningManagement />
      </div>
    </div>
  )
}

export default RenderLearningManagement;