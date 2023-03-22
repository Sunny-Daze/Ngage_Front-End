import React from "react";
import { useState } from "react";
import "./AdminControlTraining.css";
import TrainingAccordion from "../widgets/TrainingAccordion";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddTrainingModal from "../components/AddTrainingModal";
import EditTrainingModal from "../components/EditTrainingModal";
import AddLevelModal from "../components/AddLevelModal";
import EditLevelModal from "../components/EditLevelModal";

function AdminControlTrainings() {
  const [addTrainingModel, setAddTrainingModel] = useState(false);
  const [trainings,setTraining] = useState([]);
  return (
    <div>
      <div className="AdminControlButton">
        <AddTrainingModal
          open={addTrainingModel}
          close={() => setAddTrainingModel(false)}
          addTrainingCourse={() => {}}
        />
        <Button
          onClick={() => setAddTrainingModel(true)}
          variant="contained"
          size="small"
          style={{ background: "green" }}
        >
          Add Training{" "}
          <AddIcon
            style={{
              fontSize: "1.2rem",
              marginBottom: "0.1rem",
              marginLeft: "0.1rem",
            }}
          />
        </Button>
      </div>
      {trainings.map((e) => (
        // <TrainingAccordion />
        <></>
      ))}
    </div>
  );
}

export default AdminControlTrainings;
