import React from 'react'
import SideBar from './SideBar'
import ProfessionalGrowth from '../pages/ProfessionalGrowth'
import './RenderProfessionalGrowth.css'

function RenderProfessionalGrowth() {
  return (
    <div className='RenderProfessionalGrowth'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="ProfessionalGrowthBody">
        <ProfessionalGrowth />
      </div>
    </div>
  )
}

export default RenderProfessionalGrowth;