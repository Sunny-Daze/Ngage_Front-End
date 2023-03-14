import React from 'react'
import './AdminControlTraining.css'
import TrainingAccordion from '../widgets/TrainingAccordion'
import {Button} from '@mui/material'
import AddIcon from "@mui/icons-material/Add";

function AdminControlTrainings() {
  return (
    <div>
       <div className="AdminControlButton">
        <Button variant="contained" size="small" style={{background:'#157F1F'}}>Add Training <AddIcon style={{ fontSize:'1.2rem', marginBottom:'0.1rem', marginLeft:'0.1rem'}} /></Button>
      </div>
      <TrainingAccordion />
    </div>
  )
}

export default AdminControlTrainings