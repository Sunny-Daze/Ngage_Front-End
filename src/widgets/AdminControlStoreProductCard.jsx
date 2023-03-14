import React from 'react'
import './AdminControlStoreProductCard.css'
import {Typography,Button} from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function AdminControlStoreProductCard() {
  return (
    <div className='AdminControlStoreProductCard'>
        <div className="admin-control-store-left-container">

        </div>
        <div className="admin-control-store-right-container">
            <Typography variant='body2'>Product title: Food Coupon</Typography>
            <Typography variant='body2'>Product body: Delicious large pizza</Typography>
            <Typography variant='body2'>Product cost: 3000</Typography>
        <div className="admin-control-store-products-buttons">
            <Button size="small" variant="outlined" style={{marginRight:'1rem', color:'#001f54', borderColor:'#001f54'}}>edit item <EditIcon style={{color:'#001f54', fontSize:"1.15rem", marginLeft:'0.2rem', marginBottom:'0.2rem'}} /></Button>
            <Button size="small" variant="outlined" style={{borderColor:'red', color:'red'}}>remove item <DeleteIcon style={{color:'red', fontSize:"1.15rem", marginLeft:'0.2rem', marginBottom:'0.2rem'}} /></Button>
        </div>
        </div>
    </div>
  )
}

export default AdminControlStoreProductCard