import React from 'react'
import './UserProfile.css'
import { Avatar, Typography, TextField, Button, Box, Divider } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

function UserProfile() {
  return (
    <div className="UserProfileBody">
      <div className="UserProfileDataDisplay">
        <Avatar style={{height:'7rem', width:'7rem', marginBottom: '0.5rem'}}></Avatar>
        <Typography variant='h5'>customer123</Typography>
        <Typography variant='body2'>customer@gmail.com</Typography>
      </div>

      <div className="UserProfileEditable">
        <div className="UserProfileHeading">
        <Divider style={{color:'green', width:'18rem'}} />
      <Typography
            style={{ fontSize: "0.8rem" }}
          >
            CUSTOMIZE YOUR PROFILE
          </Typography>
        <Divider style={{color:'green', width:'18rem'}} />
          </div>
        <Box style={{marginLeft:'13.9rem'}}>

          <Typography variant='body1' style={{marginTop: '2rem', fontSize:'0.9'}}>
          Username
          </Typography>
          <Typography variant='body2' style={{fontSize:'0.75rem'}}>
          Set your display name. It will be visible in posts and projects.
          </Typography>

          <TextField size='small' id="outlined-basic" label="Username" variant="outlined" style={{marginTop:'0.5rem', width:'20rem'}} />
          <Typography variant='body1' style={{marginTop: '0.6rem', fontSize:'0.9'}}>
          Email
          </Typography>
          <Typography variant='body2' style={{fontSize:'0.75rem'}}>
          Change your email address.
          </Typography>
          <TextField size='small' id="outlined-basic" label="Email" variant="outlined" style={{marginTop:'0.5rem', width:'20rem'}} />
          </Box>
          <div className="editProfileButtonStyling">
          <Button variant='outlined' size='small' style={{color:'#001f54', marginTop: '1.5rem', width:'12rem' , borderColor:'#001f54'}}>update profile <EditIcon style={{color:'#001f54', marginLeft:'0.3rem'}} /> </Button>
          </div>
      </div>
    </div>
  )
}

export default UserProfile