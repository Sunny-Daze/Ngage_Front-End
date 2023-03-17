import React from "react";
import "./ActivityMilestoneCard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Divider, Button } from "@mui/material";
import TollIcon from "@mui/icons-material/Toll";
import CheckIcon from "@mui/icons-material/Check";

function ActivityMilestoneCard(props) {
  const [activityLevelStatus, setActivityLevelStatus] = React.useState(false);

  const handleActivityMilestoneButton = () => {
    setActivityLevelStatus(true);
  };

  return (
    <>
      <Box sx={{ minWidth: 800 }}>
        <Card variant="outlined" style={{ borderRadius: "5px", padding: "0" }}>
          <CardContent
            style={{
              paddingTop: "0.2rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              paddingBottom: "1rem"
            }}
          >
            <div className="ActivityMilestoneHeading">
              <Typography variant="body2">Milestone: 1</Typography>
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
                {
                activityLevelStatus
                ? 
                <Typography
                variant="body2"
                style={{ color: "green", marginLeft: "0.4rem" }}
              >
                Completed
              </Typography>
                : 
                <Typography
                  variant="body2"
                  style={{ color: "goldenrod", marginLeft: "0.4rem" }}
                >
                  Pending
                </Typography>
                }
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
              <div className="ActivityLevelScore">
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
                  200
                </Typography>
              </div>
            </div>

            <div className="ActivityMilestoneTitle">
              <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
                {props.title}
              </Typography>
            </div>

            <div className="ActivityMilestoneBody">
              <Typography variant="body2" style={{}}>
                {props.desc}
              </Typography>
            </div>

            <Button
              onClick={handleActivityMilestoneButton}
              size="small"
              style={{
                marginTop: "1.2rem",
                paddingLeft: "0.8rem",
                paddingTop: "0.4rem",
                paddingBottom: "0.4rem",
                fontSize: "0.7rem",
                background: "#001F54",
              }}
              variant="contained"
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
    </>
  );
}

export default ActivityMilestoneCard;
