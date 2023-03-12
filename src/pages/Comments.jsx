import React from "react";
import "./Comments.css";
import PostComment from '../widgets/PostComment';
import CommentSectionPost from "../widgets/CommentSectionPost"
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Comments() {
  return (
    <div className="Comments">
      <div className="Comments-Post">
      <CommentSectionPost />
      </div>

      <div className="Post-Comments">
        <div className="Comments-Form">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "92ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-multiline-static"
            //   label="Write your comment here..."
              multiline
              placeholder="Write your comment here..."
              rows={3}
              variant="standard"
            />
            <Button variant="contained" size="small" style={{background:'#001f54', marginLeft:'40.6rem', fontSize:'0.8rem'}} >comment</Button>
          </Box>

            <div className="Comments-list">
              <PostComment />
              <PostComment />
              <PostComment />
              <PostComment />
              <PostComment />
              <PostComment />
              <PostComment />
              <PostComment />
              <PostComment />
              <PostComment />
              <PostComment />
            </div>

        </div>
      </div>
    </div>
  );
}

export default Comments;
