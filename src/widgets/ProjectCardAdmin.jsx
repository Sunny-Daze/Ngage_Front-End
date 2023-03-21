import React from 'react'
import './ProjectCardAdmin.css'
import {Typography, Button} from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const margin = {
    marginTop:'0.2rem'
}

function ProjectCardAdmin(props) {
  return (
    <div className='ProjectCardAdmin'>
        <Typography style={margin} variant='body2'>Title: {props.title}</Typography>
        <Typography style={margin} variant='body2'>Body: {props.body}</Typography>
        <Typography style={margin} variant='body2'>Assigned By: {props.assignedBy}</Typography>
        <Typography style={margin} variant='body2'>Assigned To: {props.assignedTo}</Typography>
        <Typography style={margin} variant='body2'>Cost: {props.cost}</Typography>
        <Typography style={margin} variant='body2'>Deadline: {props.deadline}</Typography>
        <Typography style={margin} variant='body2'>Internal Notes: {props.internalNotes}</Typography>
        <Typography style={margin} variant='body2'>Priority: {props.priority}</Typography>
        <Typography style={margin} variant='body2'>Status: {props.status}</Typography>

        <Button
        style={{
          fontSize: "0.8rem",
          marginRight: "1rem",
          color: "#001f54",
          borderColor: "#001f54",
          marginTop: "0.5rem",
        }}
        variant="outlined"
        onClick={() =>{ 
        props.setEditTaskData(props.data)
          props.setEditTaskModal(true)
        }}
        size="small"
      >
        Edit Task{" "}
        <EditIcon
          style={{
            color: "#001f54",
            fontSize: "1.1rem",
            marginBottom: "0.2rem",
            marginLeft: "0.5rem",
          }}
        />
      </Button>
      <Button
        style={{
          fontSize: "0.8rem",
          color: "red",
          borderColor: "red",
          marginTop: "0.5rem",
        }}
        variant="outlined"
        size="small"
      >
        Delete Task
        <DeleteIcon
          style={{
            color: "red",
            fontSize: "1.1rem",
            marginBottom: "0.2rem",
            marginLeft: "0.4rem",
          }}
        />
      </Button>

    </div>
  )
}

export default ProjectCardAdmin