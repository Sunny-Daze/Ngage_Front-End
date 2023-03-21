import React from "react";
import "./ActivityAccordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Typography, Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import TaskCardAdmin from "../widgets/ProjectCardAdmin"


function ProjectAccordion(props) {
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
              Project title: {props.title}
            </Typography>
            <Typography variant="body2">
              Project body: {props.body}
            </Typography>
            <Typography variant="body2">
              Project Owner: admin123
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
            onClick={() => props.setAddTaskMoadl(true)}
          >
            Add Task
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
              props.setEditableData(props.data);
              props.setEditProjectModal(true);
            }}
          >
            Edit Project
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
            onClick={() => {
              props.setDeleteProjectName(props.title)
              props.setDeleteModalSwitch(true)
            }}
          >
            Delete Project
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
              props.tasks.map((e) => (
                <TaskCardAdmin 
                title={e.title} 
                body={e.body} 
                assignedBy={e.assignedBy}
                assignedTo={e.assignedTo}
                cost={e.cost}
                deadline={e.deadline}
                internalNotes={e.internalNotes}
                priority={e.priority}
                status={e.status}
                data={e}
                setEditTaskModal={props.setEditTaskModal}
                setEditTaskData={props.setEditTaskData}
                />
              ))
            }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ProjectAccordion;
