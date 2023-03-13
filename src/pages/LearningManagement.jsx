import React from "react";
import "./LearningManagement.css";
import Card from "../widgets/CardWithPoints";
import { Divider, styled } from "@mui/material";
import CourseCard from '../widgets/ActiveCourseCard';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

function LearningManagement() {
  return (
    <div className="LearningManagement">
      <Card
        heading="Learning Management"
        subheading="lorem ipsum, dolor sit amet consectetur adipisicing elit"
        coins="100"
      />
      <Root>
      <Divider style={{marginTop:'0.8rem', marginBottom:'0.4rem'}}>Your Traingings</Divider>
      </Root>

        <div className="TrainingCourses">
      <CourseCard courseName='ReactJS Course' courseExpiryDate='2nd August 2022' courseStatus='pending'/>
        </div>

    </div>
  );
}

export default LearningManagement;
