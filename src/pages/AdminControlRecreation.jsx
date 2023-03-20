import React from "react";
import { useEffect, useState } from "react";
import "./AdminControlRecreation.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ActivityAccordion from "../widgets/ActivityAccordion";
import AddRecreationModal from "../components/AddRecreationModal";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";

function AdminControlRecreation() {
  const [activities, setActivities] = useState([]);
  const [addRecreationModal, setaddRecreationModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");
      let response = await axios.post(
        domain + endPoints.fetchRecreations,
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
            milestones: e.milestones,
            createdBy: e.createdBy,
          });
        });

        setActivities([...arr]);
      }
    }

    fetchData();
  }, []);

  function updateActivites(value) {}

  function deleteActivites(id) {}

  function addNewActivity(value) {}

  return (
    <div className="AdminControlRecreation">
      <AddRecreationModal
        open={addRecreationModal}
        close={() => setaddRecreationModal(false)}
      />

      <div className="AdminControlButton">
        <Button
          onClick={() => setaddRecreationModal(true)}
          variant="contained"
          size="small"
          style={{ background: "#157F1F" }}
        >
          Add Activity{" "}
          <AddIcon
            style={{
              fontSize: "1.2rem",
              marginBottom: "0.1rem",
              marginLeft: "0.1rem",
            }}
          />
        </Button>
      </div>
      {activities.map((recreation, index) => (
        <ActivityAccordion
          updateActivites={updateActivites}
          deleteActivites = {deleteActivites}
          addModal={addRecreationModal}
          recreation={recreation}
        />
      ))}
    </div>
  );
}

export default AdminControlRecreation;
