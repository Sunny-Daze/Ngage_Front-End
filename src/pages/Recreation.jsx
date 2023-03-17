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
  const [activeActivity, setActiveActivity] = React.useState([]);
  
  function addActivity() {
    const val = {title:'Singing Competition', desc:'lets have a singing faceoff', reward:'2000'}
    activeActivity.push(val)
    setActiveActivity([...activeActivity])
    console.log(activeActivity);
  }

    return (
      <div className='Recreation'>
         <Card
        heading="Recreation"
        subheading="Welcome to the recreation, where you can mantain you work life balance"
        coins="100"
      />
      {activeActivity.length>0 && 
      <div className="ActiveRecreationActivity">
        {activeActivity.map((e) => (
          <ActiveRecreationCard title={e.title} desc={e.desc} reward={e.reward}/>
        ))}
        {/* <ActiveRecreationCard title="Industry Visit" desc="lets have a singing faceoff" reward="2000" /> */}
      </div>
      }
      <Root>
    <Divider style={{marginTop:'0.8rem', marginBottom:'1rem'}}>All Activities</Divider>
    </Root>
      <div className="Recreation-Activities">
        <RecreationCard addActivity={addActivity}/>
        <RecreationCard  addActivity={addActivity}/>
        <RecreationCard  addActivity={addActivity}/>
      </div>
      </div>
    );
  }
  
  export default Recreation;
  