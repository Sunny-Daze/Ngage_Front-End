import React from 'react'
import './RecreationActivity.css'
import ActivityContentBanner from '../widgets/ActivityContentBanner'
import ActivityMilestoneCard from '../widgets/ActivityMilestoneCard'
import { Divider, styled } from "@mui/material";
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

function RecreationActivity() {
  return (
    <div className="RecreationActivity">
      <ActivityContentBanner heading="Singing Day" subheading="Company's got talent" milestones="2" />
      <Root>
      <Divider style={{marginTop:'0.8rem', marginBottom:'0.8rem'}}>Milestones</Divider>
      </Root>

      <div className="CourseLevels">
        <ActivityMilestoneCard title="Solo" desc="okay dokay"  />
      </div>

    </div>
  )
}

export default RecreationActivity