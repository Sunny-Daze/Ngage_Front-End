import React, { useState } from "react";
import "./ActivityAccordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import TaskCardAdmin from "../widgets/ProjectCardAdmin";
import AddTaskModal from "../components/AddTaskModal";
import EditTaskModal from "../components/EditTaskModal";

function ProjectAccordion(props) {
  let { project } = props;
  const [tasks, setTasks] = useState(project.tasks);
  const [addTaskModel, setAddTaskModel] = useState(false);

  function addNewTask(task) {
    tasks.unshift(task);
    setTasks([...tasks]);
  }
   
  function editTask(task){
    let index = tasks.findIndex((e)=>e._id == task._id);
    if(index!=-1){
      tasks[index] = task;
      setTasks([...tasks])
    }
  }

  function deleteTask(task){
    let index = tasks.findIndex((e) => e._id == task._id);
    if (index != -1) {
      tasks.splice(index,1);
      setTasks([...tasks]);
    }
  }

  console.log(project);
  return (
    <>
      <AddTaskModal
        open={addTaskModel}
        close={() => setAddTaskModel(false)}
        addTask={addNewTask}
        projectId={project._id}
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
                Project title: {project.title}
              </Typography>
              <Typography variant="body2">
                Project body: {project.desc}
              </Typography>
              <Typography variant="body2">Project Owner: admin123</Typography>
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
              onClick={() => setAddTaskModel(true)}
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
                props.setDeleteProjectName(props.title);
                props.setDeleteModalSwitch(true);
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
            {project.tasks.map((e) => (
              <TaskCardAdmin data={e} editTask= {editTask} deleteTask = {deleteTask} />
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default ProjectAccordion;
