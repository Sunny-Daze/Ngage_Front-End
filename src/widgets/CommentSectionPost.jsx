import React from 'react'
import './CommentSectionPost.css'
import Chip from "../widgets/Chip";
import "../index.css";
import { IconButton, Typography, Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FavoriteRounded } from "@mui/icons-material";
import { AiOutlineComment } from 'react-icons/ai';

function CommentSectionPost(props) {
  return (
    <div className='CommentSectionPostBody'>
      <div className="postUtils">
        <div className="postUtilsIcons">
          <IconButton
            style={{ paddingBottom: "0px" }}
          >
             <FavoriteRounded style={{ fontSize: "1.85rem", color: "red" }} />
          </IconButton>

          <Typography
            variant="body2"
            style={{ color: "darkslategray", textAlign: "center", marginRight: '2px' }}
          >
            0
          </Typography>
          <IconButton style={{ paddingBottom: "0px" }}>
            <AiOutlineComment style={{ fontSize: "1.9rem"}} />
          </IconButton>
          <Typography
            variant="body2"
            style={{ color: "darkslategray", textAlign: "center", marginRight: '2px' }}
          >
            0
          </Typography>
        </div>
      </div>

      <div className="postCardBody">
        <div className="postHeader">
          <Avatar
            sx={{ bgcolor: grey[450], height: "3.2rem", width: "3.2rem" }}
          ></Avatar>
          <div className="postHeaderName">
            <Typography
              variant="body1"
              style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
            >
              abhinav yadav
            </Typography>
            <Typography variant="body2">
              date over here
            </Typography>
          </div>
        </div>

        <div className="postCaption">
          <Typography
            variant="body2"
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              marginTop: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            post tiel over here
          </Typography>
          {props.category !== "" && <Chip title="hello" />}
        </div>

        <div className="postContent">
          <div className="postContentBody">
            <Typography variant="body1" style={{ fontSize: "0.9rem" }}>
              {/* <div dangerouslySetInnerHTML={{ __html: props.content }} />{" "} */}
              post body over here
            </Typography>
          </div>
          <div className="postContentImage">
            {/* <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" /> */}
          </div>
        </div>

        <div className="postfooterCommentsSection">
        </div>
      </div>
    
    </div>
  )
}

export default CommentSectionPost