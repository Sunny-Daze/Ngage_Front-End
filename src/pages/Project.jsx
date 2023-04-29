import React, { useEffect } from "react";
import ProjectHeaderCard from "../widgets/ProjectHeaderCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectTasks from "./ProjectTasks";
import ServiceRequests from "./ServiceRequests";
import CustomerFeedback from "./CustomerFeedback";
import { fetchData } from "../services/request";
import { domain, endPoints } from "../services/endPoints";
import { useParams } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function getTotal(tasks) {
  let total = 0;
  for (const task of tasks) {
    total += task.cost;
  }
  return total;
}

function Project() {
  const [project, setProject] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const [tabClicked, setTabClicked] = React.useState(0);
  const { id } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabColor = (val) => {
    setTabClicked(val);
  };

  useEffect(() => {
    fetchData(domain + endPoints.fetchProjectById, {
      id: id,
    }).then((e) => {
      if (e.data.success) {
        setProject(e.data.result);
      }
    });
  }, []);
  return project ? (
    <>
      <div className="Project">
        {
          <ProjectHeaderCard
            title={project.title}
            desc={project.desc}
            cost={getTotal(project.tasks)}
            createdBy={project.createdBy.userName}
          />
        }

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ style: { background: "#001f54" } }}
              style={{
                background: "white",
              }}
              aria-label="basic tabs example"
            >
              <Tab
                style={{
                  background: "white",
                  color: tabClicked === 0 ? "#001F54" : "",
                  fontSize: "0.8rem",
                  width: "1rem",
                }}
                onClick={() => handleTabColor(0)}
                label="tasks"
                {...a11yProps(0)}
              />
              <Tab
                style={{
                  background: "white",
                  color: tabClicked === 1 ? "#001F54" : "",
                  fontSize: "0.8rem",
                  width: "10.5rem",
                }}
                onClick={() => handleTabColor(1)}
                label="service requests"
                {...a11yProps(1)}
              />
              <Tab
                style={{
                  background: "white",
                  color: tabClicked === 2 ? "#001F54" : "",
                  fontSize: "0.8rem",
                  width: "11.49rem",
                }}
                onClick={() => handleTabColor(2)}
                label="customer feedback"
                {...a11yProps(2)}
              />
              <Tab
                style={{
                  background: "white",
                  color: tabClicked === 3 ? "#001F54" : "",
                  fontSize: "0.8rem",
                  width: "7.4rem",
                }}
                onClick={() => handleTabColor(3)}
                label="case study"
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ProjectTasks task = {project.tasks} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ServiceRequests />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CustomerFeedback />
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item zero
          </TabPanel>
        </Box>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Project;
