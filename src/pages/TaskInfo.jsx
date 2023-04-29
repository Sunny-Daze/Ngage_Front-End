import React from 'react'
import './TaskInfo.css'
import TaskInfoHeader from "../widgets/TaskInfoHeader";
import TaskInfoBody from "../widgets/TaskInfoBody";


function TaskInfo(props) {
  let {task} = props;
  return (
    <div className='TaskInfo'>
        <TaskInfoHeader task = {task} />
        <TaskInfoBody task =  {task} />
    </div>
  )
}

export default TaskInfo