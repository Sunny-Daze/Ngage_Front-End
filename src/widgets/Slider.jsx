import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const status = [
  {
    value: 0,
    label: 'Pending',
  },
  {
    value: 50,
    label: 'Ongoing',
  },
  {
    value: 100,
    label: 'Completed',
  },
];

function valueLabelFormat(value) {
    return status.findIndex((mark) => mark.value === value) + 30;
}

const ongoingColor = {
    color:'darkorange'
}

const pendingColor = {
    color:'red'
}

const completedColor = {
    color:'darkgreen'
}

export default function DiscreteSliderValues() {
    const [color, setColor] = React.useState(pendingColor)

    const handleChange = (e) => {
        if(e.target.value === 0) {
            setColor(pendingColor)
        }
        else if(e.target.value === 50){
            setColor(ongoingColor)
        }
        else{
            setColor(completedColor)
        }
    }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
      sx={color}
        aria-label="Restricted values"
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        marks={status}
        step={null}
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
}