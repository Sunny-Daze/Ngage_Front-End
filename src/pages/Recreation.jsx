import React from 'react'
import './Recreation.css'
import Card from '../widgets/CardWithPoints'
import { Divider, styled } from '@mui/material';
import RecreationCard from '../widgets/RecreationCard'
import ActiveRecreationCard from '../widgets/ActiveRecreationCard'

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

function Recreation() {
    return (
      <div className='Recreation'>
         <Card
        heading="Recreation"
        subheading="Welcome to the recreation, where you can mantain you work life balance"
        coins="100"
      />
      <div className="ActiveRecreationActivity">
        <ActiveRecreationCard />
      </div>
      <Root>
    <Divider style={{marginTop:'0.8rem', marginBottom:'1rem'}}>All Activities</Divider>
    </Root>
      <div className="Recreation-Activities">
        <RecreationCard />
        <RecreationCard />
        <RecreationCard />
      </div>
      </div>
    );
  }
  
  export default Recreation;
  