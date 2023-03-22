import React from "react";
import ProjectHeaderCard from "../widgets/ProjectHeaderCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectTasks from './ProjectTasks'

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

function Project() {
  const [value, setValue] = React.useState(0);
  const [tabClicked, setTabClicked] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabColor = (val) => {
    setTabClicked(val);
  };

  return (
    <div className="Project">
      <ProjectHeaderCard />

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ style: { background: "#001f54" } }}
            style={{
              background:'white'
            }}
            aria-label="basic tabs example"
          >
            <Tab
              style={{
                background: "white",
                color: tabClicked === 0 ? "#001F54" : "",
                fontSize:'0.8rem',
                width:'1rem'
              }}
              onClick={() => handleTabColor(0)}
              label="tasks"
              {...a11yProps(0)}
            />
            <Tab
              style={{
                background: "white",
                color: tabClicked === 1 ? "#001F54" : "",
                fontSize:'0.8rem',
                width:'10.5rem'
              }}
              onClick={() => handleTabColor(1)}
              label="service requests"
              {...a11yProps(1)}
            />
            <Tab
              style={{
                background: "white",
                color: tabClicked === 2 ? "#001F54" : "",
                fontSize:'0.8rem',
                width:'11.49rem'
              }}
              onClick={() => handleTabColor(2)}
              label="customer feedback"
              {...a11yProps(2)}
            />
            <Tab
              style={{
                background: "white",
                color: tabClicked === 3 ? "#001F54" : "",
                fontSize:'0.8rem',
                width:'7.4rem'
              }}
              onClick={() => handleTabColor(3)}
              label="case study"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ProjectTasks />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item zero
        </TabPanel>
      </Box>
    </div>
  );
}

export default Project;
