import React from "react";
import "./TrainingLevelCard.css";
import { Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function MilestoneCard(props) {
  return (
    <div className="TrainingLevelCard">
      <Typography variant="body2">Milestone: 1</Typography>
      <Typography variant="body2">Milestone Title: {props.mile.title}</Typography>
      <Typography variant="body2">Milestone Body: {props.mile.desc} </Typography>
      <Typography variant="body2">Milestone Reward: {props.mile.userPoints} </Typography>
      {/* <Button
        style={{
          fontSize: "0.8rem",
          marginRight: "1rem",
          color: "#001f54",
          borderColor: "#001f54",
          marginTop: "0.5rem",
        }}
        variant="outlined"
        onClick={() =>{ 
          props.setEditMilsetoneModal(true)
          props.setmilestoneData(props.data)
        }}
        size="small"
      >
        Edit Milestone{" "}
        <EditIcon
          style={{
            color: "#001f54",
            fontSize: "1.1rem",
            marginBottom: "0.2rem",
            marginLeft: "0.5rem",
          }}
        />
      </Button>
      <Button
        style={{
          fontSize: "0.8rem",
          color: "red",
          borderColor: "red",
          marginTop: "0.5rem",
        }}
        variant="outlined"
        size="small"
      >
        Delete Milestone
        <DeleteIcon
          style={{
            color: "red",
            fontSize: "1.1rem",
            marginBottom: "0.2rem",
            marginLeft: "0.4rem",
          }}
        />
      </Button> */}
    </div>
  );
}

export default MilestoneCard;
