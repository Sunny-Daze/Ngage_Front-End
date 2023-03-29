import React from "react";
import "./ActivityMilestoneCard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Divider, Button } from "@mui/material";
import TollIcon from "@mui/icons-material/Toll";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";
import { updateUserPoint } from "../utils/localuserDetails";

function ActivityMilestoneCard(props) {
  const [activityLevelStatus, setActivityLevelStatus] = React.useState(
    props.data.status
  );

  async function completeMileStone() {
    let token = localStorage.getItem("token");
    let response = await axios.post(
      domain + endPoints.completeRecreationMileStone,
      {
        recreationMileStoneId: props.data._id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      console.info(response.data.result);
      setActivityLevelStatus(true);
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
            <div className="ActivityMilestoneHeading">
              <Typography variant="body2">
                Milestone: {props.index + 1}
              </Typography>
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
                {activityLevelStatus ? (
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
                  activityLevelStatus
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

            <div className="ActivityMilestoneTitle">
              <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
                {props.data.title}
              </Typography>
            </div>

            <div className="ActivityMilestoneBody">
              <Typography variant="body2" style={{}}>
                {props.data.desc}
              </Typography>
            </div>

            <div className="mb-2"></div>

            <Button
              onClick={activityLevelStatus ? null : completeMileStone}
              size="small"
              style={
                activityLevelStatus
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
                  height: "18px",
                  width: "18px",
                  textAlign: "center",
                }}
              />
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default ActivityMilestoneCard;
