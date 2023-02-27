import React from "react";
import Chip from '../widgets/Chip';
import "./Post.css";
import { IconButton, Typography, Avatar, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from '@mui/material/colors';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteIcon from '@mui/icons-material/Delete';

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
           <Typography variant="body1" style={{fontSize:'1rem', lineHeight:'1.5rem' }}>username</Typography> 
           <Typography variant="body2">8/8/2022, 10:25:26 PM</Typography> 
          </div>
          </div>

        <div className="postCaption">
          <Typography variant='body2' style={{fontWeight:'bold', fontSize:'1rem', marginTop: '1rem', marginBottom: '0.5rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
          <Chip title="Question" />
        </div>

        <div className="postContent">
          <div className="postContentBody">
            <Typography variant="body1" style={{fontSize:'0.9rem'}} >This is the body</Typography>
          </div>
          <div className="postContentImage">
            {/* <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" /> */}
          </div>
        </div>


        <div className="postfooter">
          <Button variant='outlined' style={{borderColor:'#001f54', marginRight: '1rem', color:'#001f54', height:'1.8rem', fontSize:'0.75rem' }} size="small" >see more <ChevronRightIcon /></Button>
          <Button variant='outlined' color="error" style={{borderColor:'red', height:'1.8rem', fontSize:'0.75rem' }} size="small" >delete post <DeleteIcon color="error" style={{fontSize:'1.1rem', marginLeft:'0.5rem'}} /></Button>
        </div>

        </div>
    </div>
  );
}

export default Post;
