import React from "react";
import "./TrainingLevelCard.css";
import { Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditMilestoneModal from "../components/EditMilestoneModal";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";
function MilestoneCard(props) {
  const [editMileStone, setEditMilestoneModal] = React.useState(false);

  async function deleteMileStone() {
    let token = localStorage.getItem("token");
    let response = await axios.post(
      domain + endPoints.deleteRecreationMileStone,
      {
        recreationMileStoneId: props.mile._id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      props.deleteMile(props.mile._id);
    }
  }

  return (
    <>
      <EditMilestoneModal
        open={editMileStone}
        mile={props.mile}
        updateMilestoneList={props.editMile}
        close={() => setEditMilestoneModal(false)}
      />
      <div className="TrainingLevelCard">
        <Typography variant="body2">Milestone: {props.index + 1}</Typography>
        <Typography variant="body2">
          Milestone Title: {props.mile.title}
        </Typography>
        <Typography variant="body2">
          Milestone Body: {props.mile.desc}{" "}
        </Typography>
        <Typography variant="body2">
          Milestone Reward: {props.mile.userPoints}{" "}
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
            setEditMilestoneModal(true);
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
          onClick={() => {
            deleteMileStone();
          }}
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
        </Button>
      </div>
    </>
  );
}

export default MilestoneCard;
