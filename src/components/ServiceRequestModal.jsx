import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Typography, Divider, styled, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  height: 609,
  overflowY: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  borderRadius:2,
  paddingBottom:0,
  paddingRight:0
};

const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    "& > :not(style) + :not(style)": {
      marginTop: theme.spacing(2),
    },
}));

export default function ServiceRequestModal(props) {
  const handleClose = () => props.SetModalSwitch(false);

  return (
    <div>
      <Modal
        open={props.ModalSwitch}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Service Request Form
          </Typography>
          <Root>
        <Divider color='#6hyu76' style={{marginTop: "0.8rem" }}>
          CLIENT DETAILS
        </Divider>
      </Root>
      <div style={{marginTop:'1rem', paddingRight:'1rem'}}>
        <Box style={{display:'flex', gap:'1.5rem', marginBottom:'1rem'}}>
        <TextField variant='standard' label='First Name' />
        <TextField variant='standard' label='Last Name' />
        </Box>
        <TextField variant='standard' fullWidth label='Address' />
        <TextField variant='standard' fullWidth label='Phone' type='number' style={{marginTop:'1rem', marginBottom:'1rem'}} />

        <Root>
        <Divider color='#6hyu76' style={{marginTop:'1rem',marginBottom: "0.5rem" }}>
          PROJECT DETAILS
        </Divider>
      </Root>

      <TextField variant='standard' fullWidth label='Project Title' />
      <TextField variant='standard' fullWidth label='Project Description' style={{marginTop:'1rem', marginBottom:'1rem'}} />
      <TextField variant='standard' fullWidth label='Introduction' />
      <TextField variant='standard' fullWidth label='Background Information' style={{marginTop:'1rem', marginBottom:'1rem'}} />

      <Root>
        <Divider color='#6hyu76' style={{marginTop:'1rem',marginBottom: "0.5rem" }}>
          EXTRA PROJECT DETAILS
        </Divider>
      </Root>

      <TextField variant='standard' fullWidth label='Objective' />
      <TextField variant='standard' fullWidth label='Problem Statement' style={{marginTop:'1rem', marginBottom:'1rem'}} />
      <Box style={{display:'flex', justifyContent:'spaceAround', gap:'1.5rem', marginBottom:'1rem'}}>
        <Box>
        <Typography variant='body2' style={{color:'gray', fontSize:'0.7rem'}}>Submission</Typography>
        <input type="date" />
        </Box>
      <TextField variant='standard' type='number' label='Budget' style={{marginLeft:'5rem'}} />
      </Box>

      <Root>
        <Divider color='#6hyu76' style={{marginTop:'2rem',marginBottom: "0.5rem" }}>
          REFERENCES
        </Divider>
      </Root>
      <Box style={{display:'flex', gap:'1rem', marginBottom:'1rem'}}>
        <TextField variant='standard' label='Reference 1' />
        <TextField variant='standard' label='Reference 2' />
        </Box>
      <Box style={{display:'flex', gap:'1rem', marginBottom:'1rem'}}>
        <TextField variant='standard' label='Reference 3' />
        <TextField variant='standard' label='Reference 4' />
        </Box>

      <Root>
        <Divider color='#6hyu76' style={{marginTop:'2rem',marginBottom: "0.5rem" }}>
          RESOURCES
        </Divider>
      </Root>
      <Box style={{display:'flex', gap:'1rem', marginBottom:'1rem'}}>
        <TextField variant='standard' label='Resource 1' />
        <TextField variant='standard' label='Resource 2' />
        </Box>
      <Box style={{display:'flex', gap:'1rem', marginBottom:'1rem'}}>
        <TextField variant='standard' label='Resource 3' />
        <TextField variant='standard' label='Resource 4' />
        </Box>
      </div>
    <div style={{position:'sticky', bottom:'0', background:'white', padding:'1rem', paddingRight:'0rem'}}>
      <Button onClick={() => props.SetModalSwitch(0)} style={{borderColor:'red', color:'red', marginLeft:'12.5rem'}} size='small' variant='outlined' endIcon={<CloseIcon />} >Close</Button>
      <Button style={{borderColor:'#001F54', color:'#001F54', marginLeft:'1.5rem'}} size='small' variant='outlined' endIcon={<SendIcon />} >Send</Button>
    </div>
        </Box>
      </Modal>
    </div>
  );
}
