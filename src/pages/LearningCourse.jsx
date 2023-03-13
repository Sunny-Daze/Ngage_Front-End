import React from 'react';
import './LearningCourse.css';
import CourseContentBanner from '../widgets/CourseContentBanner'
import CourseLevelCard from '../widgets/CourseLevelCard'
import { Divider, styled } from "@mui/material";
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

function LearningCourse() {
  return (
    <div className="LearningCourse">
      <CourseContentBanner heading="ReactJS Course" subheading="Learn all about SPA development" courseLevelCount="2" />
      <Root>
      <Divider style={{marginTop:'0.8rem', marginBottom:'0.8rem'}}>Levels</Divider>
      </Root>

      <div className="CourseLevels">
        <CourseLevelCard />
      </div>

    </div>
  )
}

export default LearningCourse