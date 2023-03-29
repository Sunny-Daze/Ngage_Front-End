import React from 'react';
import './ProjectTasks.css';
import {Button} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ProjectTaskCard from '../widgets/ProjectTaskCard'

function ProjectTasks() {
  const [arrow, setArrow] = React.useState(false)

  function handleClick(){
    setArrow(!arrow)
  }

  return (
    <div className="ProjectTasks">
        <div className="priorityButton">
            <Button size="small" onClick={handleClick} endIcon={arrow ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />} style={{color:'#001f54'}}>Priority</Button>
        </div>
        <ProjectTaskCard />
        <ProjectTaskCard />
    </div>
  )
}

export default ProjectTasks