import React from 'react'
import './TaskInfo.css'
import TaskInfoHeader from "../widgets/TaskInfoHeader";
import TaskInfoBody from "../widgets/TaskInfoBody";


function TaskInfo() {
  return (
    <div className='TaskInfo'>
        <TaskInfoHeader />
        <TaskInfoBody />
    </div>
  )
}

export default TaskInfo