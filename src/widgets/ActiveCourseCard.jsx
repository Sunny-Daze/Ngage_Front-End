import React from 'react'
import './ActiveCourseCard.css'
import { Button, Typography } from '@mui/material'
import TollIcon from '@mui/icons-material/Toll';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import couponImage from '../assets/couponImage.png'

function ActiveCourseCard(props) {
    return (
    <div className='Active-Course-Card'>
        <div className="Active-Course-photo">
            <img src={couponImage} alt="decoy" />
        </div>
        <div className="Active-Course-description">
            <Typography variant='body1' style={{color:"darkslategray", fontSize:"1.3rem", marginBottom:'0.5rem'}}>{props.productName}</Typography>
            <Typography style={{color:"darkslategray", fontSize:"0.8rem", marginBottom:'0.2rem'}}>{props.productDesc}</Typography>
            <div className="price">
                <TollIcon style={{marginRight:'6px', fontSize:'1.3rem'}}/>
                <Typography style={{fontSize:'0.9rem'}}>{props.userPoints} Points</Typography>
            </div>
            <Button variant='outlined' style={{color:'#001f54', marginTop: '1rem', borderColor:'#001f54', height: '1.6rem', width: '7.5rem'}}>PURCHASE<ChevronRightIcon /></Button>
        </div>
    </div>
    )
}

export default ActiveCourseCard;