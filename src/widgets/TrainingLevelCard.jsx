import React from "react";
import "./TrainingLevelCard.css";
import { Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TrainingLevelCard(props) {
  return (
    <div className="TrainingLevelCard">
      <Typography variant="body2">Level: 1</Typography>
      <Typography variant="body2">Level Title: {props.title}</Typography>
      <Typography variant="body2">Level Body: {props.body} </Typography>
      <Typography variant="body2">Level Reward: {props.reward} </Typography>
      <Button
        style={{
          fontSize: "0.8rem",
          marginRight: "1rem",
          color: "#001f54",
          borderColor: "#001f54",
          marginTop: "0.5rem",
        }}
        variant="outlined"
        onClick={() =>{ 
          props.setEditLevelToggle(true)
          props.setEditLevelData(props.data)
        }}
        size="small"
      >
        Edit Level{" "}
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
        Delete Level
        <DeleteIcon
          style={{
            color: "red",
            fontSize: "1.1rem",
            marginBottom: "0.2rem",
            marginLeft: "0.4rem",
          }}
        />
      </Button>
    </div>
  );
}

export default TrainingLevelCard;
