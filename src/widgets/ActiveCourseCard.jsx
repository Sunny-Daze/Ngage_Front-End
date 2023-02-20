import React from "react";
import "./ActiveCourseCard.css";
import { Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import courseImage from "../assets/courseCardPhoto.JPG";

function ActiveCourseCard(props) {
  return (
    <div className="Active-Course-Card">
      <div className="Active-Course-photo">
        <img src={courseImage} alt="decoy" />
      </div>
      <div className="Active-Course-description">
        <Typography
          variant="body1"
          style={{
            color: "darkslategray",
            fontSize: "1.3rem",
            marginBottom: "0.5rem",
          }}
        >
          {props.courseName}
        </Typography>

        <div className="courseStatus">
        <Typography
          style={{
            color: "darkslategray",
            fontSize: "0.9rem",
            marginBottom: "0.2rem",
          }}
        >
          Status:
        </Typography>
          <Typography style={{ fontSize: "0.9rem", 
            marginLeft: "0.5rem", }}>
            {props.courseStatus}
          </Typography>
        </div>

        <div className="courseValidity">
        <Typography
          style={{
            color: "darkslategray",
            fontSize: "0.9rem",
            marginBottom: "0.2rem",
          }}
        >
          Deadline:
        </Typography>
        <Typography
          style={{
            color: "darkslategray",
            fontSize: "0.9rem",
            marginBottom: "0.2rem",
            marginLeft: "0.5rem",
          }}
        >
          {props.courseExpiryDate}
        </Typography>
        </div>
        <Button
          variant="outlined"
          style={{
            color: "#001f54",
            marginTop: "1rem",
            borderColor: "#001f54",
            height: "1.6rem",
            width: "7.5rem",
          }}
        >
          continue
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}

export default ActiveCourseCard;
