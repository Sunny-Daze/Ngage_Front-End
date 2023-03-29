import React from "react";
import "./TaskInfoHeader.css";
import { Typography } from "@mui/material";

function TaskInfoHeader() {
  return (
    <>
      <div className="ProjectHeaderCardContatiner">
        <Typography variant="h5">Task: Add Navba Component</Typography>
        <Typography variant="body2" style={{ marginTop: "0.4rem" }}>
          Standardized components pertaining to the Engage UI language
        </Typography>
      </div>
    </>
  );
}

export default TaskInfoHeader;
