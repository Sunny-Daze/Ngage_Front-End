import React from "react";
import "./ActiveCourseCard.css";
import { Button, Typography, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import courseImage from "../assets/courseCardPhoto.JPG";
import { useNavigate } from "react-router-dom";

function getCourseStatus(tasks) {
  for (const tk of tasks) {
    if (!tk.status) return "Pending";
  }
  return "Completed";
}

function ActiveCourseCard(props) {
  console.warn(props);
  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate("/training/learning-management/course",{
      state: props.data
    });
  };

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
            marginBottom: "0.2rem",
            marginTop: "0.5rem",
          }}
        >
          {props.data.title}
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
          <Typography style={{ fontSize: "0.9rem", marginLeft: "0.5rem" }}>
            {getCourseStatus(props.data.tasks)}
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
        <Box>
          <Button
            onClick={handleCourseClick}
            variant="outlined"
            style={{
              color: "#001f54",
              marginTop: "0.8rem",
              borderColor: "#001f54",
              height: "1.6rem",
              width: "7.5rem",
            }}
          >
            continue
            <ChevronRightIcon />
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default ActiveCourseCard;
