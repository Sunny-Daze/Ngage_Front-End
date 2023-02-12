import React from 'react'
import './Store.css'
import Card from '../widgets/CardWithPoints'

function UserControl() {
    return (
      <div className='Store'>
         <Card
        heading="User Management"
        subheading="Manage users in the service"
      />
      </div>
    );
  }
  
  export default UserControl;
  