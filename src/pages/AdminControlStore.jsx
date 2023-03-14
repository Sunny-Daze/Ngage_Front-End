import React from 'react'
import './AdminControlStore.css'
import AdminControlStoreProductCard from '../widgets/AdminControlStoreProductCard'
import {Button} from '@mui/material'
import AddIcon from "@mui/icons-material/Add";

function AdminControlStore() {
  return (
    <div className='AdminControlStore'>
      <div className="AdminControlButton">
        <Button variant="contained" size="small" style={{background:'#157F1F'}}>Add Product <AddIcon style={{ fontSize:'1.2rem', marginBottom:'0.1rem', marginLeft:'0.1rem'}} /></Button>
      </div>
        <AdminControlStoreProductCard />
        <AdminControlStoreProductCard />
        <AdminControlStoreProductCard />
    </div>
  )
}

export default AdminControlStore