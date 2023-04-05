import React from 'react';
import './ServiceRequests.css';
import {Button} from '@mui/material';
import ServiceRequestCard from '../widgets/ServiceRequestCard'
import ServiceRequestModal from '../components/ServiceRequestModal'
import AddIcon from "@mui/icons-material/Add";

function ServiceRequests() {
    const [ModalSwitch, SetModalSwitch] = React.useState(false);
    function handleClick(){
      SetModalSwitch(true);
    }

  return (
    <div className="ServiceRequests">
      <ServiceRequestModal ModalSwitch={ModalSwitch} SetModalSwitch={SetModalSwitch} />
        <div className="serviceRequestButton">
            <Button size="small" variant='contained' endIcon={<AddIcon />} onClick={handleClick} style={{color:'white', background:'#001f54'}}>create service request</Button>
        </div>
        <ServiceRequestCard />
        <ServiceRequestCard />
    </div>
  )
}

export default ServiceRequests