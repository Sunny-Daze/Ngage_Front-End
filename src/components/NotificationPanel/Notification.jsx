import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Button, Divider, Alert, Link} from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: 'absolute',
  top: '53%',
  left: '12.5%',
  transform: 'translate(-50%, -50%)',
  width: 315,
  height:600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1,
  borderRadius: 2,
};

export default function Notification(props) {
  const handleClose = () => props.setToggleNotification(false);

  return (
    <div>
    <Modal
    open={props.ToggleNotification}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
          <div className="notifHeading" style={{marginTop:'0.5rem', display:'flex', gap:'0.5rem'}}>
        <Typography variant='body2'>NOTIFICATIONS</Typography>
        <div 
        style={{
          background:'darkred', 
          width:'1rem', 
          height:'1rem',
          marginTop:'0.2rem',
          fontFamily:'"Roboto","Helvetica","Arial",sans-serif',
          color:'white',
          fontSize:'0.7rem',
          padding:'0.4rem',
          display:'flex',
          justifyContent:'center',
          alignItems:'center', 
          borderTopLeftRadius:'5rem', 
          borderBottomLeftRadius:'5rem', 
          borderBottomRightRadius:'5rem', 
          borderTopRightRadius:'5rem'}}>3</div>
        </div>
        <div style={{display:'flex', marginTop:'0.7rem', gap:'1rem'}} className="notifButtons">
            <Button style={{borderColor:'darkred', color:'darkred'}} endIcon={<DeleteIcon/>} size='small' variant='outlined'>dismiss all</Button>
            <Button style={{background:'darkred'}} size='small' variant='contained' onClick={() => handleClose()} >close</Button>
        </div>
          <Divider style={{marginTop:'0.6rem'}} />
          <div style={{display:'flex', flexDirection:'column'}} className="notifBody">
          <Alert onClose={() => {}} style={{fontSize:'0.8rem', marginTop:'0.5rem'}} severity="info"><Link>This is an info alert</Link>
          <br/>
          <span style={{fontSize:'0.7rem', marginTop:'0.5rem'}}>12/35/45 23:02</span>
          </Alert>
          <Alert onClose={() => {}} style={{fontSize:'0.8rem', marginTop:'0.5rem'}} severity="info"><Link>This is an info alert</Link>
          <br/>
          <span style={{fontSize:'0.7rem', marginTop:'0.5rem'}}>12/35/45 23:02</span>
          </Alert>
          <Alert onClose={() => {}} style={{fontSize:'0.8rem', marginTop:'0.5rem'}} severity="info"><Link>This is an info alert</Link>
          <br/>
          <span style={{fontSize:'0.7rem', marginTop:'0.5rem'}}>12/35/45 23:02</span>
          </Alert>
          </div>
        </Box>
      </Modal>
    </div>
  );
}