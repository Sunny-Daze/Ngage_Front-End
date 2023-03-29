import React from "react";
import "./LearningManagement.css";
import Card from "../widgets/CardWithPoints";
import { Divider, styled } from "@mui/material";
import CourseCard from "../widgets/ActiveCourseCard";
import { domain, endPoints } from "../services/endPoints";
import axios from "axios";
import { getUserPoints } from "../utils/localuserDetails";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

function LearningManagement() {
  let [trainings, setTrainings] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");
      let response = await axios.post(
        domain + endPoints.fetchTrainings,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        let enrolledTraining = response.data.result.filter(
          (e) => e.participated
        );
        console.warn(enrolledTraining);
        setTrainings([...enrolledTraining]);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="LearningManagement">
      <Card
        heading="Learning Management"
        subheading="lorem ipsum, dolor sit amet consectetur adipisicing elit"
        coins={getUserPoints()}
      />
      <Root>
        <Divider style={{ marginTop: "0.8rem", marginBottom: "0.4rem" }}>
          Your Traingings
        </Divider>
      </Root>

      <div className="TrainingCourses">
        {trainings.map((e) => (
          <CourseCard data={e} key={e._id} />
        ))}
      </div>
    </div>
  );
}

export default LearningManagement;
