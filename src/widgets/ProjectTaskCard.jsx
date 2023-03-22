import React from 'react'
import './ProjectTaskCard.css'
import {Typography, Divider, Box} from '@mui/material'

function ProjectTaskCard() {
  return (
    <div className="ProjectTaskCard">
        <div className="ProjectTaskCardHeading">
            <Typography variant="body2">Asignee(s):</Typography>
            <div className="ProjectTaskStatus">
              {/* <Box style={{ display: "flex" }}> */}
                <Typography variant="body2">Status: </Typography>
                {/* <Typography variant="body2" style={{ color: "green", marginLeft: "0.4rem" }}> Completed </Typography> */}
                <Typography
                  variant="body2"
                  style={{ color: "goldenrod", marginLeft: "0.4rem" }}
                >
                  Pending
                </Typography>
              {/* </Box> */}
              <Divider
                style={{
                  marginLeft: "0.5rem",
                  height: "1.5rem",
                  marginRight: "0.5rem",
                }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
            </div>
        </div>
    </div>
  )
}

export default ProjectTaskCard