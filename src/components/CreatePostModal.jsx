import * as React from 'react';
import { Divider, Modal, Typography, Box, Chip, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  borderRadius: '5px'
};

export default function CreatePostModal(props) {
  const handleClose = () => props.setPostModalSwitch(false);

  return (
    <div>
      <Modal
        open={props.postModalswitch}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize:'1rem'}}>
            CREATE POST
          </Typography>
          <Divider style={{marginTop:'0.1rem'}} />
          <Box className="chips" style={{marginTop:'1rem', marginBottom:'1rem', display:'flex', gap:'0.5rem'}}>
          <Chip label="Question" variant="outlined" onClick={props.setModalSwitch}/>
          <Chip label="Discussion" />
          </Box>
          <TextField id="outlined-basic" label="Title" variant="outlined" required fullWidth size="normal" />
          <Box className="editor">
            
          </Box>
        </Box>
      </Modal>
    </div>
  );
}