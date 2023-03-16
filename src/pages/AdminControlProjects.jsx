import React from 'react'
import './AdminControlProjects.css'
import ProjectAccordion from '../widgets/ProjectAccordion'
import {Button} from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
// import DeleteEssentialModal from '../components/DeleteEssentialModal'

function TableOne() {
//   const [deleteModalSwitch, setDeleteModalSwitch] = React.useState(true);
//   function deleteProduct(){
// console.log("hello")
//   }
  return (
    <div className='AdminControlStore'>
      {/* <DeleteEssentialModal deleteModalSwitch={deleteModalSwitch} deletefunction={deleteProduct} thing="Food Coupon" setDeleteModalSwitch={setDeleteModalSwitch} /> */}
      <div className="AdminControlButton">
        <Button variant="contained" size="small" style={{background:'#157F1F'}}>Add Product <AddIcon style={{ fontSize:'1.2rem', marginBottom:'0.1rem', marginLeft:'0.1rem'}} /></Button>
      </div> 
        <ProjectAccordion />
        <ProjectAccordion />
        <ProjectAccordion />
        <ProjectAccordion />
        <ProjectAccordion />
    </div>
  )
}

export default TableOne