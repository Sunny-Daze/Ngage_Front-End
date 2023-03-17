import React from 'react'
import './ActiveRecreationCard.css'
import {Typography} from '@mui/material'

function ActiveRecreationCard() {
  return (
    <div className='ActiveRecreationCard'>
        <div className="ActiveReacreationCardimagebody">
        <img src="https://thumbs.dreamstime.com/b/various-tiny-people-park-performing-leisure-outdoor-activities-cartoon-colorful-vector-illustration-various-tiny-people-park-170163118.jpg" alt="" />
        </div>
        <div className="ActiveReacreationCarddescbody">
        <Typography
          variant="body1"
          style={{
            color: "darkslategray",
            fontSize: "1.3rem",
            marginBottom: "0.2rem",
            marginTop:"0.5rem",
          }}
        >
          Industry Visit
        </Typography>
        </div>
    </div>
  )
}

export default ActiveRecreationCard