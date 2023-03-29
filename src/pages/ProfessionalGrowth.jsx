import React, { useState } from "react";
import "./ProfessionalGrowth.css";
import Card from "../widgets/CardWithPoints";
import { Divider, styled } from "@mui/material";
import CourseCard from "../widgets/CourseCard";
import { domain, endPoints } from "../services/endPoints";
import axios from "axios";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

function ProfessionalGrowth() {
  let [trainings, setTrainings] = useState([]);

  React.useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");
      let response = await axios.post(
        domain + endPoints.fetchTrainings,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        setTrainings([...response.data.result]);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="ProfessionalGrowth">
      <Card
        heading="Professional Growth"
        subheading="lorem ipsum, dolor sit amet consectetur adipisicing elit"
        coins="0"
      />
      <Root>
        <Divider style={{ marginTop: "0.8rem", marginBottom: "0.4rem" }}>
          All Traingings
        </Divider>
      </Root>

      <div className="AllCourses">
        {/* <CourseCard courseName="ReactJS Course" /> */}

        {trainings.map((e) => (
          <CourseCard data={e} key={e._id} />
        ))}
      </div>
    </div>
  );
}

export default ProfessionalGrowth;
