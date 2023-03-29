import React from "react";
import "./TaskInfoBody.css";
import { Typography, Box } from "@mui/material";
import ToolTip from "../widgets/ToolTipTaskInfo";
import Slider from '../widgets/Slider'

function TaskInfoBody() {
  return (
    <div className="TaskInfoBodyContainer">
      <div className="TaskInfoContainer">
        <div className="TaskInfoLeft">
          <Typography
            variant="body2"
            style={{ marginBottom: "1rem", fontSize: "0.95rem" }}
          >
            Deadline:
            <span style={{ marginLeft: "0.5rem" }} /> 2022-06-20
          </Typography>
          <Box style={{display:"flex"}}>
          <Typography style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
            Asignee(s):
            <span style={{ marginLeft: "0.5rem" }} />
          </Typography>
            <ToolTip />
            <ToolTip />
          </Box>
          <Box style={{display:"flex"}}>
          <Typography style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
            Assignor:
            <span style={{ marginLeft: "0.5rem" }} /> 
          </Typography>
            <ToolTip />
          </Box>
          <Box style={{display:"flex"}}>
          <Typography style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
            Priority:
            <span style={{ marginLeft: "0.5rem" }} />
              </Typography>
            <div className='TaskInfoPriority TIHigh'>
                <Typography style={{fontSize:'0.7rem'}} variant='body2'>High</Typography>
              </div>
              {/* <div className='TaskInfoPriority TIMedium'>
                <Typography style={{fontSize:'0.7rem'}} variant='body2'>Medium</Typography>
              </div> */}
              {/* <div className='TaskInfoPriority TILow'>
                <Typography style={{fontSize:'0.7rem'}} variant='body2'>Low</Typography>
              </div> */}
          </Box>
          <Typography style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
            Cost:
            <span style={{ marginLeft: "0.5rem" }} /> Rs.56000
          </Typography>
        </div>
        <div className="TaskInfoRight">
              <Slider />
        </div>
      </div>
    </div>
  );
}

export default TaskInfoBody;
