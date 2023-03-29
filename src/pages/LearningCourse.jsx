import React, { useState } from "react";
import "./LearningCourse.css";
import CourseContentBanner from "../widgets/CourseContentBanner";
import CourseLevelCard from "../widgets/CourseLevelCard";
import { Divider, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

function LearningCourse() {
  let { state } = useLocation();
  let [tasks, setTasks] = useState([...state.tasks]);
  return (
    <div className="LearningCourse">
      <CourseContentBanner
       data = {state}
      />
      <Root>
        <Divider style={{ marginTop: "0.8rem", marginBottom: "0.8rem" }}>
          Levels
        </Divider>
      </Root>

      <div className="CourseLevels">
        {tasks.map((e,index) => (
          <CourseLevelCard data={e} key={e._id} index= {index+1} />
        ))}
      </div>
    </div>
  );
}

export default LearningCourse;
