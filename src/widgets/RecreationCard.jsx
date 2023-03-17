import React from 'react'
import './RecreationCard.css'
import { Typography, Button } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function RecreationCard(props) {
  return (
    <div className='RecreationCard'>
        <div className='CardImage'>
            <img src="https://thumbs.dreamstime.com/b/various-tiny-people-park-performing-leisure-outdoor-activities-cartoon-colorful-vector-illustration-various-tiny-people-park-170163118.jpg" alt="" />
        </div>

        <div className='RecreationCardBody'>
            <div className='heading'>
                <Typography variant='body2' style={{marginRight:'0.5rem'}}>Total Reward: 2000</Typography>
               
                <div className="vertical-divider"></div>

                <Typography variant='body2' style={{marginLeft:'0.5rem'}}>2nd August 2022</Typography>
            </div>
            <div className='RecreationContent'>
                <Typography onClick={() => props.addActivity()} style={{fontSize:'1.2rem', marginTop:'2rem'}} variant='body1'>Industry Event</Typography>
                <Typography onClick={() => props.addActivity()} style={{marginTop:'0.5rem', marginRight:'20rem'}} variant='body2'>Learn about all the new technologies</Typography>
                <Button onClick={() => props.addActivity()} style={{fontSize:'14px', background:'#001f54', height:'30px', width:'7.5rem', marginTop:'0.8rem', textTransform:'none'}} variant="contained">Participate<ChevronRightIcon /></Button>
            </div>
        </div>
    </div>
  )
}

export default RecreationCard