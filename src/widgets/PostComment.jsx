import React from 'react'
import './PostComment.css'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function PostComment() {
  return (
    <div className='PostCommentBody'>
        <div className="PostCommentAvatar">
            <div className="AvatarBorder">
            <Avatar style={{height:'3.1rem', width:'3.1rem'}}></Avatar>
            </div>
            <div className="AvatarChain"></div>
        </div>

        <div className="PostCommentCard">
        <Typography
              variant="body2"
              style={{ fontSize: "1rem", fontWeight:'500',  lineHeight: "1.5rem" }}
            >
              sunny yadav
            </Typography>
            <Typography variant="body2" style={{fontSize:'0.75rem', marginBottom:'1rem'}}>
              8/8/2023, 10:29:31 PM
            </Typography>
            <Typography variant='body2' style={{color:'black'}}>
                Hey check this awesome website!
            </Typography>
        </div>
    </div>
  )
}

export default PostComment