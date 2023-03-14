import React from "react";
import "./CourseLevelCard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Divider, Button } from "@mui/material";
import TollIcon from "@mui/icons-material/Toll";
import CheckIcon from "@mui/icons-material/Check";

function CourseLevelCard() {
  const [courseLevelStatus, setCourseLevelStatus] = React.useState(false);

  const handlecourselevelbutton = () => {
    setCourseLevelStatus(true);
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
                {
                courseLevelStatus
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
              <div className="CourseLevelScore">
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

            <div className="CourseLevelTitle">
              <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
                Code Structure
              </Typography>
            </div>

            <div className="CourseLevelBody">
              <Typography variant="body2" style={{}}>
                Learn the code and directory structure
              </Typography>
            </div>

            <Button
              onClick={handlecourselevelbutton}
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

export default CourseLevelCard;
