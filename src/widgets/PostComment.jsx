import React from 'react'
import './PostComment.css'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import formatDate from '../utils/dateFormater';


function PostComment(prop) {
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
              {prop.user.userName}
            </Typography>
            <Typography variant="body2" style={{fontSize:'0.75rem', marginBottom:'1rem'}}>
               
               {formatDate(new Date(prop.createdAt))}
            </Typography>
            <Typography variant='body2' style={{color:'black'}}>
                {prop.comment}
            </Typography>
        </div>
    </div>
  )
}

export default PostComment