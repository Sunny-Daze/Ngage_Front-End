import React from "react";
import "./ProfessionalGrowth.css";
import Card from "../widgets/CardWithPoints";
import { Divider, styled } from "@mui/material";
import CourseCard from '../widgets/CourseCard';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

function ProfessionalGrowth() {
  return (
    <div className="ProfessionalGrowth">
      <Card
        heading="Professional Growth"
        subheading="lorem ipsum, dolor sit amet consectetur adipisicing elit"
        coins="0"
      />
      <Root>
      <Divider style={{marginTop:'0.8rem', marginBottom:'0.4rem'}}>All Traingings</Divider>
      </Root>

        <div className="AllCourses">
      <CourseCard courseName='ReactJS Course' />
      <CourseCard courseName='Python Course' />
        </div>

    </div>
  );
}

export default ProfessionalGrowth;
