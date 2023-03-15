import React from 'react'
import './AdminControlRecreation.css'
import {Button} from '@mui/material'
import AddIcon from "@mui/icons-material/Add"
import ActivityAccordion from "../widgets/ActivityAccordion"
import AddRecreationModal from '../components/AddRecreationModal'

function AdminControlRecreation() {
  const [addActivityModal, setAddActivityModal] = React.useState(false)
  return (
    <div className="AdminControlRecreation">
      <AddRecreationModal open={addActivityModal} close={setAddActivityModal} />
      <div className="AdminControlButton">
        <Button onClick={() => setAddActivityModal(true)} variant="contained" size="small" style={{background:'#157F1F'}}>Add Activity <AddIcon style={{ fontSize:'1.2rem', marginBottom:'0.1rem', marginLeft:'0.1rem'}} /></Button>
      </div>
      <ActivityAccordion />
      <ActivityAccordion />
    </div>
  )
}

export default AdminControlRecreation