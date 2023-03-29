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
  console.log(tasks);

  return (
    <div className="LearningCourse">
      <CourseContentBanner
        heading={state.title}
        subheading={state.desc}
        courseLevelCount={state.tasks.length}
      />
      <Root>
        <Divider style={{ marginTop: "0.8rem", marginBottom: "0.8rem" }}>
          Levels
        </Divider>
      </Root>

      <div className="CourseLevels">
        <CourseLevelCard />
        {tasks.map((e) => (
          <CourseLevelCard data={e} />
        ))}
      </div>
    </div>
  );
}

export default LearningCourse;
