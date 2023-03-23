import React from "react";
import { useState, useEffect } from "react";
import "./AdminControlTraining.css";
import TrainingAccordion from "../widgets/TrainingAccordion";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddTrainingModal from "../components/AddTrainingModal";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";

function AdminControlTrainings() {
  const [addTrainingModel, setAddTrainingModel] = useState(false);
  const [trainings, setTraining] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");
      let response = await axios.post(
        domain + endPoints.fetchTrainings,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        let arr = [];
        response.data.result.forEach((e) => {
          arr.push({
            id: e._id,
            title: e.title,
            desc: e.desc,
            tasks: e.tasks,
            createdBy: e.createdBy,
          });
        });

        setTraining([...arr]);
      }
    }

    fetchData();
  }, []);

  function deleteTraining() {}
  function editTraining() {}

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
        <TrainingAccordion
          training={e}
          deleteTraining={deleteTraining}
          key={e.id}
          editTraining={editTraining}
        />
      ))}
    </div>
  );
}

export default AdminControlTrainings;
