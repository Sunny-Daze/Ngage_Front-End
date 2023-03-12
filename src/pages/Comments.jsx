import {React, useEffect, useState} from "react";
import "./Comments.css";
import PostComment from '../widgets/PostComment';
import CommentSectionPost from "../widgets/CommentSectionPost"
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { domain, endPoints } from "../services/endPoints";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState([]);


  useEffect(() => {
    fetchData();
  }, [])
  
  async function fetchData() {
    let token = localStorage.getItem("token");

    let response = await axios.post(
      domain + endPoints.fetchComment,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
      
    if (response.data.success) {
      response.data.result.forEach((e) => {
        comments.push({
          id:e._id,
          user: e.user,
          comment: e.comment,
        });
      });
      setComments([...comments]);
    }

    console.log(response.data)
  }

  const handleCreateComment = () => {
    console.log(comments)
  }

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
            <Button variant="contained" size="small" onClick={handleCreateComment} style={{background:'#001f54', marginLeft:'40.6rem', fontSize:'0.8rem'}} >comment</Button>
          </Box>

            <div className="Comments-list">
              <PostComment />
            </div>

        </div>
      </div>
    </div>
  );
}

export default Comments;
