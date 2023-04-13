import React, { useState, useEffect } from "react";
import "./AdminControlProjects.css";
import ProjectAccordion from "../widgets/ProjectAccordion";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddProjectModal from "../components/AddProjectModal";
import { fetchData } from "../services/request";
import { domain, endPoints } from "../services/endPoints";

function AdminControlProject() {
  const [projects, setProjects] = useState([]);
  const [addProjectModal, setAddProjectModal] = React.useState(false);
  function addProject(newData) {
    if (newData) {
      projects = [];
      fetchData(domain + endPoints.fetchRecreations, {}).then((e) => {
        if (e.data.success) {
          projects.push(...e.data.result);
          setProjects([...projects]);
        }
      });
    }
  }

  useEffect(() => {
    fetchData(domain + endPoints.fetchProject, {}).then((e) => {
      if (e.data.success) {
        projects.push(...e.data.result);
        setProjects([...projects]);
      }
    });
  }, []);

  return (
    <div className="AdminControlStore">
      <AddProjectModal
        open={addProjectModal}
        close={setAddProjectModal}
        addProject={addProject}
      />
      <div className="AdminControlButton">
        <Button
          onClick={() => setAddProjectModal(true)}
          variant="contained"
          size="small"
          style={{ background: "#157F1F" }}
        >
          New Project{" "}
          <AddIcon
            style={{
              fontSize: "1.2rem",
              marginBottom: "0.1rem",
              marginLeft: "0.1rem",
            }}
          />
        </Button>
      </div>

      {projects.map((project, index) => (
        <ProjectAccordion project={project} key={project._id} />
      ))}
    </div>
  );
}

export default AdminControlProject;
