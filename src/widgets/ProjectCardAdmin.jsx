import React, { useState } from "react";
import "./ProjectCardAdmin.css";
import { Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditTaskModal from "../components/EditTaskModal";

const margin = {
  marginTop: "0.2rem",
};

function ProjectCardAdmin(props) {
  const [editTaskModel, setEditTaskModel] = useState(false);
  return (
    <>
      <EditTaskModal
        open={editTaskModel}
        close={() => setEditTaskModel(false)}
        task={props.data}
        editTask = {props.editTask}
      />

      <div className="ProjectCardAdmin">
        <Typography style={margin} variant="body2">
          Title: {props.data.title}
        </Typography>
        <Typography style={margin} variant="body2">
          Body: {props.data.desc}
        </Typography>
        <Typography style={margin} variant="body2">
          Assigned By: {props.data.assignedBy}
        </Typography>
        <Typography style={margin} variant="body2">
          Assigned To: {props.data.assignedTo}
        </Typography>
        <Typography style={margin} variant="body2">
          Cost: {props.data.cost}
        </Typography>
        <Typography style={margin} variant="body2">
          Deadline: {props.data.deadline}
        </Typography>
        <Typography style={margin} variant="body2">
          Internal Notes: {props.data.note}
        </Typography>
        <Typography style={margin} variant="body2">
          Priority: {props.data.priority.toUpperCase()}
        </Typography>
        <Typography style={margin} variant="body2">
          Status: {props.data.status}
        </Typography>

        <Button
          style={{
            fontSize: "0.8rem",
            marginRight: "1rem",
            color: "#001f54",
            borderColor: "#001f54",
            marginTop: "0.5rem",
          }}
          variant="outlined"
          onClick={() => {
            setEditTaskModel(true)
          }}
          size="small"
        >
          Edit Task{" "}
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
          onClick={()=>{}}
        >
          
          Delete Task
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
    </>
  );
}

export default ProjectCardAdmin;
