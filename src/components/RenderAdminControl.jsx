import React from 'react'
import SideBar from './SideBar'
import AdminControl from '../pages/AdminControl'
import './RenderAdminControl.css';

function RenderAdminControl() {
  return (
    <div className='RenderAdminControl'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="RenderAdminControlBody">
        <AdminControl />
      </div>
    </div>
  )
}

export default RenderAdminControl