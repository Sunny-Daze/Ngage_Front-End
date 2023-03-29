import React from "react";
import "./CourseLevelCard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Divider, Button } from "@mui/material";
import TollIcon from "@mui/icons-material/Toll";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";
import { updateUserPoint } from "../utils/localuserDetails";

function CourseLevelCard(props) {
  const [courseLevelStatus, setCourseLevelStatus] = React.useState(
    props.data.status
  );

  const handlecourselevelbutton = () => {
    setCourseLevelStatus(true);
  };

  async function completeTask() {
    let token = localStorage.getItem("token");

    let response = await axios.post(
      domain + endPoints.completeTraningTask,
      { trainingTaskId: props.data._id },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      console.warn(response.data);
      setCourseLevelStatus(true);
      updateUserPoint(props.data.userPoints);
    }
  }

  return (
    <>
      <Box sx={{ minWidth: 800 }}>
        <Card variant="outlined" style={{ borderRadius: "5px", padding: "0" }}>
          <CardContent
            style={{
              paddingTop: "0.2rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <div className="CourseLevelHeading">
              <Typography variant="body2">Level: 1</Typography>
              <Divider
                style={{
                  marginLeft: "0.5rem",
                  height: "1.5rem",
                  marginRight: "0.5rem",
                }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <Box style={{ display: "flex" }}>
                <Typography variant="body2">Status: </Typography>
                {courseLevelStatus ? (
                  <Typography
                    variant="body2"
                    style={{ color: "green", marginLeft: "0.4rem" }}
                  >
                    Completed
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    style={{ color: "goldenrod", marginLeft: "0.4rem" }}
                  >
                    Pending
                  </Typography>
                )}
              </Box>
              <Divider
                style={{
                  marginLeft: "0.5rem",
                  height: "1.5rem",
                  marginRight: "0.5rem",
                }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <div
                className={
                  courseLevelStatus
                    ? "collected-userpoints-clip"
                    : "userpoints-clip"
                }
              >
                <TollIcon
                  style={{
                    fontSize: "1.2rem",
                    marginRight: "0.3rem",
                    color: "white",
                  }}
                />
                <Typography
                  variant="body2"
                  style={{
                    fontSize: "0.75rem",
                    marginTop: "2px",
                    color: "white",
                  }}
                >
                  {props.data.userPoints}
                </Typography>
              </div>
            </div>

            <div className="CourseLevelTitle">
              <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
                {props.data.title}
              </Typography>
            </div>

            <div className="CourseLevelBody">
              <Typography variant="body2" style={{}}>
                {props.data.desc}
              </Typography>
            </div>

            <div style={{ marginBottom: "1rem" }}></div>

            <Button
              onClick={courseLevelStatus ? null : completeTask}
              size="small"
              style={
                courseLevelStatus
                  ? {
                      width: "12rem",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "whitesmoke",
                      color: "grey",
                    }
                  : {
                      backgroundColor: "#001F54",
                      color: "#ffffff",
                      width: "12rem",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }
              }
              variant="contained"
              disabled={false}
            >
              mark as complete
              <CheckIcon
                style={{
                  color: "white",
                  marginLeft: "0.4rem",
                  fontSize: "1.2rem",
                }}
              />
            </Button>
          </CardContent>
        </Card>
      </Box>

      <div style={{ marginBottom: "1rem" }}></div>
    </>
  );
}

export default CourseLevelCard;
