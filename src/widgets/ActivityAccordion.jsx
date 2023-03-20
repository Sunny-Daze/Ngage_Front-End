import React from "react";
import "./ActivityAccordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import MilestoneCard from "../widgets/MilestoneCard";
import AddMilestone from "../components/AddMilestone";
import EditMilestoneModal from "../components/EditMilestoneModal";

function ActivityAccordion(props) {
  let recreationMilestones = props.recreation.milestones;
  const [mileStones, setMileStone] = React.useState(recreationMilestones);
  const [addMilestoneModal, setAddMilestoneModal] = React.useState(false);
  const [editMileStone, setEditMilestoneModal] = React.useState(false);

  function addNewMileStone(value) {
    console.warn(value);
    recreationMilestones.push({
      title: value.title,
      desc: value.desc,
      userPoints: value.userPoints,
    });

    setMileStone([...recreationMilestones]);
  }

  return (
    <>
      <AddMilestone
        open={addMilestoneModal}
        close={() => setAddMilestoneModal(false)}
        addNewMileStone={addNewMileStone}
        recreationId={props.recreation.id}
      />
      <div className="ActivityAccordion">
        <Accordion style={{ width: "48.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="AccordionTitle">
              <Typography variant="body2">
                Activity title: {props.recreation.title}
              </Typography>
              <Typography variant="body2">
                Activity body: {props.recreation.desc}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Button
              style={{
                fontSize: "0.8rem",
                marginRight: "1rem",
                color: "green",
                borderColor: "green",
              }}
              variant="outlined"
              size="small"
              onClick={() => {
                setAddMilestoneModal(true);
              }}
            >
              Add Milestone
              <AddIcon
                style={{
                  color: "green",
                  fontSize: "1.3rem",
                  marginBottom: "0.2rem",
                  marginLeft: "0.2rem",
                }}
              />
            </Button>
            <Button
              style={{
                fontSize: "0.8rem",
                marginRight: "1rem",
                color: "#001f54",
                borderColor: "#001f54",
              }}
              variant="outlined"
              size="small"
              onClick={() => {
                // props.setEditActivityModal(true);
                // props.setEditableData(props.data);
              }}
            >
              Edit Activity
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
              style={{ fontSize: "0.8rem", color: "red", borderColor: "red" }}
              variant="outlined"
              size="small"
            >
              Delete Activity
              <DeleteIcon
                style={{
                  color: "red",
                  fontSize: "1.1rem",
                  marginBottom: "0.2rem",
                  marginLeft: "0.4rem",
                }}
              />
            </Button>
            {/* {
            props.milestones.map((e) => (
              <MilestoneCard 
              title={e.title} 
              body={e.body} 
              reward={e.reward} 
              data={e} 
              setEditMilsetoneModal={props.setEditMilsetoneModal} 
              setmilestoneData={props.setmilestoneData} 
              />
            ))
          } */}

            {mileStones.map((e) => (
              <MilestoneCard mile={e} />
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default ActivityAccordion;
