import React from 'react'
import SideBar from './SideBar'
import Comments from '../pages/Comments'
import './RenderComments.css'

function RenderComments() {
  return (
    <div className='RenderComments'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="CommentsBody">
        <Comments />
      </div>
    </div>
  )
}

export default RenderComments