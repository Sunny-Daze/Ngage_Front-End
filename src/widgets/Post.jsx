import React from "react";
import Chip from '../widgets/Chip';
import "./Post.css";
import { IconButton, Typography, Avatar, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from '@mui/material/colors';

function Post(props) {
  return (
    <div className="PostCard">
        <div className="postUtils">
            <div className="postUtilsIcons">
              <IconButton style={{paddingBottom:'0px'}}>
            <FavoriteBorderIcon style={{fontSize:'1.9rem'}} />
            </IconButton>
            <Typography variant='body2' style={{ color:'gray', marginLeft:'1.15rem', marginTop:'0px', paddintTop:'0' }}>3</Typography>
              <IconButton style={{paddingBottom:'0px'}}>
            <CommentIcon style={{fontSize:'1.9rem'}} />
            </IconButton>
            <Typography variant='body2' style={{ color:'gray', marginLeft:'1.15rem' }} >0</Typography>
              <IconButton>
            <LocationOnIcon style={{fontSize:'1.9rem'}} />
            </IconButton>
            </div>
        </div>


        <div className="postCardBody">
          <div className="postHeader">
          <Avatar sx={{ bgcolor: grey[450], height:'3.2rem', width:'3.2rem' }}>
            
          </Avatar>
          <div className="postHeaderName">
           <Typography variant="body1" style={{fontSize:'1.2rem', lineHeight:'1.5rem' }}>username</Typography> 
           <Typography variant="body2">8/8/2022, 10:25:26 PM</Typography> 
          </div>
          </div>

        <div className="postCaption">
          <Typography variant='body2' style={{fontWeight:'bold', fontSize:'1rem', marginTop: '1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
          <Chip />
        </div>

        <div className="postContent"></div>


        <div className="postfooter">
          <Button variant='outlined' size="small" >see more</Button>
          <Button variant='outlined' size="small" >delete post</Button>
        </div>

        </div>
    </div>
  );
}

export default Post;
