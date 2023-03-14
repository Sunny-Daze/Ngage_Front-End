import React from 'react'
import './RenderLearningCourse.css'
import SideBar from './SideBar'
import LearningCourse from '../pages/LearningCourse'

function RenderLearningCourse() {
  return (
    <div className='RenderLearningCourse'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="LearningCourseBody">
        <LearningCourse />
      </div>
    </div>
  )
}

export default RenderLearningCourse