import React from "react";
import "./AdminControlRecreation.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ActivityAccordion from "../widgets/ActivityAccordion";
import AddRecreationModal from "../components/AddRecreationModal";
import EditActivityModal from "../components/EditActivityModal"
import AddMilestone from "../components/AddMilestone"
import EditMilestoneModal from "../components/EditMilestoneModal"


function AdminControlRecreation() {
  const [addActivityModal, setAddActivityModal] = React.useState(false);
  const [activities, setActivities] = React.useState([{title:'hello', body:'pello'}]);
  const [editActivityModal, setEditActivityModal] = React.useState(false);
  const [editableDAta, setEditableData] = React.useState({});
  const [addMilestoneModal, setMilestoneModal] = React.useState(false);
  const [milestones, setMilestones] = React.useState([{title:'hello', body:'pello', reward:'69'}]);
  const [editMilestoneModal, setEditMilsetoneModal] = React.useState(false);
  const [milestoneData, setmilestoneData] = React.useState({});

  function addActivity(activityData) {
    activities.push(activityData)
    setActivities([...activities])
    setAddActivityModal(false)
  }

  function editActivity(newData) {
    console.log(newData)
  }

  function addMilestone(milestoneData) {
    milestones.push(milestoneData)
    setMilestones([...milestones])
    setMilestoneModal(false)
    console.log(milestones)
  }

  function editMilestone(milestoneData) {
    console.log(milestoneData)
  }

  return (
    <div className="AdminControlRecreation">
      <AddRecreationModal open={addActivityModal} close={setAddActivityModal} addActivity={addActivity} />
      <EditActivityModal open={editActivityModal} close={setEditActivityModal} data={editableDAta} editActivity={editActivity} />
      <AddMilestone open={addMilestoneModal} close={setMilestoneModal} addMilestone={addMilestone} />
      <EditMilestoneModal open={editMilestoneModal} close={setEditMilsetoneModal} data={milestoneData} editMilestone={editMilestone} />

      <div className="AdminControlButton">
        <Button
          onClick={() => setAddActivityModal(true)}
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
      {activities.map((e) => (
        <ActivityAccordion 
        title={e.title} 
        body={e.body} 
        setEditActivityModal={setEditActivityModal} 
        data={e}
        setEditableData={setEditableData}
        setMilestoneModal={setMilestoneModal}
        milestones={milestones}
        setEditMilsetoneModal={setEditMilsetoneModal}
        setmilestoneData={setmilestoneData}
        />  
      ))}
    </div>
  );
}

export default AdminControlRecreation;
