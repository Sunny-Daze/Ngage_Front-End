import React from "react";
import "./TrainingLevelCard.css";
import { Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditLevelModal from "../components/EditLevelModal";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";

function TrainingLevelCard(props) {
  console.info(props);
  const [editTaskModal, setEditTaskModal] = React.useState(false);

  async function deleteTask() {
    let token = localStorage.getItem("token");
    let response = await axios.post(
      domain + endPoints.deleteTrainingTask,
      {
        trainingTaskId: props.task._id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      props.deleteTask(response.data.result._id);
    }
  }

  return (
    <>
      <EditLevelModal
        open={editTaskModal}
        close={() => setEditTaskModal(false)}
        task={props.task}
        editTask={props.editTask}
      />

      <div className="TrainingLevelCard">
        <Typography variant="body2">Level: {props.index + 1}</Typography>
        <Typography variant="body2">Level Title: {props.task.title}</Typography>
        <Typography variant="body2">Level Body: {props.task.desc} </Typography>
        <Typography variant="body2">
          Level Reward: {props.task.userPoints}{" "}
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
            setEditTaskModal(true);
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
          onClick={() => deleteTask()}
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
    </>
  );
}

export default TrainingLevelCard;
