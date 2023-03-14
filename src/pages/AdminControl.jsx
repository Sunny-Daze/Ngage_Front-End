import React from "react";
import "./AdminControl.css";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AdminControlProjects from "./AdminControlProjects";
import AdminControlTrainings from "./AdminControlTrainings";
import AdminControlRecreation from "./AdminControlRecreation";
import AdminControlStore from "./AdminControlStore";
import { MdOutlineAccountTree } from "react-icons/md";
import { BsLightningChargeFill, BsPlay } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function AdminControl() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [tabClicked, setTabClicked] = React.useState(0);

  const handleTabColor = (val) => {
    setTabClicked(val);
  }

  return (
    <div classNmae="AdminControl">
      <div className="AdminControlHeading">
        <Typography variant="h5">Administrator Controls</Typography>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{style: {background:'#001F54'}}}
            style={{
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
            aria-label="basic tabs example"
            >
            <Tab
              style={{ width: "25%", background: "white", color: tabClicked === 0 ? '#001F54' : '' }}
              onClick={() => handleTabColor(0)}
              icon={<MdOutlineAccountTree style={{ fontSize: "1.5rem" }} />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              style={{ width: "25%", background: "white", color: tabClicked === 1 ? '#001F54' : '' }}
              onClick={() => handleTabColor(1)}
              icon={<BsLightningChargeFill style={{ fontSize: "1.25rem" }} />}
              label="Trainings"
              {...a11yProps(1)}
            />
            <Tab
              style={{ width: "25%", background: "white", color: tabClicked === 2 ? '#001F54' : '' }}
              onClick={() => handleTabColor(2)}
              icon={<BsPlay style={{ fontSize: "1.7rem" }} />}
              label="recreation"
              {...a11yProps(2)}
            />
            <Tab
              style={{ width: "25%", background: "white", color: tabClicked === 3 ? '#001F54' : '' }}
              onClick={() => handleTabColor(3)}
              icon={<HiShoppingCart style={{ fontSize: "1.5rem" }} />}
              label="store"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AdminControlProjects />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AdminControlTrainings />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AdminControlRecreation />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AdminControlStore />
        </TabPanel>
      </Box>
    </div>
  );
}

export default AdminControl;
