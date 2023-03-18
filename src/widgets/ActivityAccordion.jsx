import React from "react";
import "./ActivityAccordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Button, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import MilestoneCard from "../widgets/MilestoneCard";

function ActivityAccordion(props) {
  return (
    <div className="ActivityAccordion">
      <Accordion style={{ width: "48.5rem" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="AccordionTitle">
            <Typography variant="body2">
              Activity title: {props.title}
            </Typography>
            <Typography variant="body2">
              Activity body: {props.body}
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
            onClick={() => props.setMilestoneModal(true)}
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
              props.setEditActivityModal(true);
              props.setEditableData(props.data);
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
          {
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
          }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ActivityAccordion;
