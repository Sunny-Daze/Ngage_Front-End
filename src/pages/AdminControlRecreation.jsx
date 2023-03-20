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

  function updateActivites(value, id) {
    let index = activities.findIndex((e) => e._id == id);
    activities[index] = {
      id: value._id,
      title: value.title,
      desc: value.desc,
      milestones: value.milestones,
      createdBy: value.createdBy,
    };
    setActivities([...activities]);
  }

  function deleteActivity(id) {
    let arr = activities.filter((e) => e.id != id);
    setActivities([...arr]);
  }

  function addNewActivity(value) {
    activities.unshift({
      id: value._id,
      title: value.title,
      desc: value.desc,
      milestones: value.milestones,
      createdBy: value.createdBy,
    });
    setActivities([...activities]);
  }

  return (
    <div className="AdminControlRecreation">
      <AddRecreationModal
        open={addRecreationModal}
        close={() => setaddRecreationModal(false)}
        addNewActivity={addNewActivity}
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
          deleteActivity={deleteActivity}
          addModal={addRecreationModal}
          recreation={recreation}
          key={recreation.id}
        />
      ))}
    </div>
  );
}

export default AdminControlRecreation;
