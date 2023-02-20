import React from "react";
import "./CourseCard.css";
import { Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import courseImage from "../assets/courseCardPhoto.JPG";

function CourseCard(props) {
  return (
    <div className="CourseCard">
      <div className="CourseCardPhoto">
        <img src={courseImage} alt="decoy" />
      </div>
      <div className="CourseCardDescription">
        <Typography
          variant="body1"
          style={{
            color: "darkslategray",
            fontSize: "1.3rem",
            marginBottom: "0.5rem",
            marginTop:"1rem",
          }}
        >
          {props.courseName}
        </Typography>

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
          enroll
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}

export default CourseCard;
