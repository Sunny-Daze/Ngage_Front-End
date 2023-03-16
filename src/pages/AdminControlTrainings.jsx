import React from 'react'
import './AdminControlTraining.css'
import TrainingAccordion from '../widgets/TrainingAccordion'
import {Button} from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import AddTrainingModal from '../components/AddTrainingModal';

function AdminControlTrainings() {
  const [createTrainingModal, setCreateTrainingModal] = React.useState(false)

  return (
    <div>
       <div className="AdminControlButton">
        
      <AddTrainingModal open={createTrainingModal} close={setCreateTrainingModal} />
        <Button onClick={() => setCreateTrainingModal(true)} variant="contained" size="small" style={{background:'#157F1F'}}>Add Training <AddIcon style={{ fontSize:'1.2rem', marginBottom:'0.1rem', marginLeft:'0.1rem'}} /></Button>
      </div>
      <TrainingAccordion />
    </div>
  )
}

export default AdminControlTrainings