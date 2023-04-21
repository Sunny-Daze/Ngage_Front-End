import React from 'react'
import './ProjectTaskCard.css'
import {Typography, Divider, Box, Button} from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ToolTip from '../widgets/ToolTipTaskCard'
import { useNavigate } from "react-router-dom";

function ProjectTaskCard() {
  const navigate = useNavigate();
  return (
    <div className="ProjectTaskCard">
        <div className="ProjectTaskCardHeading">
          <Box style={{display:'flex', width:'18rem'}}>
            <Typography variant="body2" style={{marginTop:'1rem'}}>Asignee(s):
            </Typography>
            <ToolTip />
            <ToolTip />
            </Box>
            <div className="ProjectTaskStatus">
              <Box style={{paddingTop:'0.5rem', display:'flex'}}>
                <Typography variant="body2">Status: </Typography>
                {/* <Typography variant="body2" style={{ color: "green", marginLeft: "0.4rem" }}> Completed </Typography> */}
                <Typography
                  variant="body2"
                  style={{ color: "goldenrod", marginLeft: "0.4rem" }}
                >
                  Pending
                </Typography>
                </Box>
              <Divider
                style={{
                  marginLeft: "1rem",
                  height: "1.5rem",
                  marginRight: "1rem",
                }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <Box style={{paddingTop:'0.5rem', display:'flex'}}>
              <AccessTimeIcon style={{fontSize:'1.3rem', marginRight:'0.5rem'}} />
              <Typography variant='body2'>2022-08-10</Typography>
              </Box>
              <Divider
                style={{
                  marginLeft: "1rem",
                  height: "1.5rem",
                  marginRight: "1rem",
                }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <div className='ProjectTaskCardPriority PTCHigh'>
                <Typography style={{fontSize:'0.7rem'}} variant='body2'>High</Typography>
              </div>
              {/* <div className='ProjectTaskCardPriority PTCMedium'>
                <Typography style={{fontSize:'0.7rem'}} variant='body2'>Medium</Typography>
              </div> */}
              {/* <div className='ProjectTaskCardPriority PTCLow'>
                <Typography style={{fontSize:'0.7rem'}} variant='body2'>Low</Typography>
              </div> */}
            </div>
        </div>
        <div className="ProjectTaskCardBody">
          <Typography variant='h5' style={{fontWeight:'540', fontSize:'1.2rem', marginTop:'1rem'}}>Navbar Component</Typography>
          <Typography variant='body2' style={{marginTop:'0.5rem'}}>Create responsive sidebar which has all the routes of the sites.</Typography>
        </div>
        <div className="ProjectTaskCardFooter">
          <Button onClick={() => navigate('/project/task/id')} endIcon={<ChevronRightIcon style={{marginBottom:'0.2rem'}} />} variant='outlined' size='small' style={{marginTop:'1rem', color:'#001f54', borderColor:"#001f54", fontSize:'0.75rem'}} >view task</Button>
        </div>
    </div>
  )
}

export default ProjectTaskCard