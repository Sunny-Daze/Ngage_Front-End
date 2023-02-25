import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const chipStyle = {
  background: 'red',
  fontSize: '0.6rem', 
  width: '3.5rem',
  height: '1rem',
}

export default function BasicChips(props) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip style={chipStyle} label={props.title} color="error" size="small" 
      sx={{
        "& .css-wjsjww-MuiChip-label": {
          paddingLeft:'0px',
          paddingRight: '0px'
        }
      }}
      />
    </Stack>
  );
}