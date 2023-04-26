import React from "react";
import "./CourseCard.css";
import { Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import courseImage from "../assets/courseCardPhoto.JPG";
import { domain, endPoints } from "../services/endPoints";
import AssignCourseModal from "../components/AssignCourseModal"
import axios from "axios";

function CourseCard(props) {
  const [toggleAssignCourse, setToggleAssignCourse] = React.useState(false);

  async function enrolToCourse() {
    let token = localStorage.getItem("token");
    let response = await axios.post(
      domain + endPoints.enrolForTraining,
      {
        trainingId: props.data._id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      console.info("Success Enrolled");
    }
  }

  return (
    <div className="CourseCard">
      <div className="CourseCardPhoto">
        <img
          src={courseImage}
          alt="decoy"
          style={{
            width: "100%",
          }}
        />
      </div>
      <div className="CourseCardDescription">
        <Typography
          variant="body1"
          style={{
            color: "darkslategray",
            fontSize: "1.3rem",
            marginBottom: "0.5rem",
            marginTop: "1rem",
          }}
        >
          {props.data.title}
        </Typography>

        <Button size='small'
          endIcon={!props.data.participated && <ChevronRightIcon />}
          onClick={() => (props.data.participated ? null : enrolToCourse())}
          variant="outlined" style={{ color: "#001f54", borderColor: "#001f54"}}
        >
          {props.data.participated ? "Enrolled" : "Enroll"}
          {/* {!props.data.participated && <ChevronRightIcon />} */}
        </Button>

        <Button onClick={() => setToggleAssignCourse(true)} size='small' variant='outlined' style={{ marginTop:'0.5rem'}} color='error' endIcon={<ChevronRightIcon />}>Assign</Button>
        <AssignCourseModal  toggleAssignCourse={toggleAssignCourse} setToggleAssignCourse={setToggleAssignCourse} />
      </div>
    </div>
  );
}

export default CourseCard;
