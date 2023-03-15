import { React, useEffect, useState } from "react";
import "./Comments.css";
import PostComment from "../widgets/PostComment";
import CommentSectionPost from "../widgets/CommentSectionPost";
import CustomizedSnackbar from "../widgets/CustomizedSnackbar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { domain, endPoints } from "../services/endPoints";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import NotesIcon from '@mui/icons-material/Notes';

function Comments(post) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [snackSwitch, setSnackSwitch] = useState(false);
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let token = localStorage.getItem("token");
    let userDetails = JSON.parse(localStorage.getItem("user") ?? "");

    let response = await axios.post(
      domain + endPoints.fetchComment,
      {
        post: id,
        user: userDetails._id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      response.data.result.forEach((e) => {
        comments.push({
          id: e._id,
          user: e.user,
          comment: e.comment,
          createdAt: e.createdAt,
        });
      });
      setComments([...comments]);
    }

    console.log(response.data);
  }

  async function handleCreateComment() {
    if (comment === "") return;
    else {
      let userDetails = JSON.parse(localStorage.getItem("user") ?? "");
      let token = localStorage.getItem("token");

      let response = await axios.post(
        domain + endPoints.createComment,
        {
          post: id,
          user: userDetails._id,
          comment: comment,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        comments.unshift(response.data.result);
        setComments([...comments]);
        setComment("");
      }
    }
    setSnackSwitch(true);
  }

  async function deleteComment(commentId) {
    let token = localStorage.getItem("token");

    let response = await axios.post(
      domain + endPoints.deleteComment,
      {
        commentId: commentId,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      setComments([...comments.filter((e) => e.id != commentId)]);
    }
  }

  return (
    <div className="Comments">
       <CustomizedSnackbar
        snackbarSwitch={snackSwitch}
        handleSnackbar={setSnackSwitch}
        snackbarMessage="Comment posted successfully!"
      />
      <div className="Comments-Post">
        <CommentSectionPost {...state} />
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              variant="contained"
              size="small"
              onClick={handleCreateComment}
              style={{
                background: "#001f54",
                marginLeft: "39.5rem",
                fontSize: "0.8rem",
              }}
            >
              Comment
              <NotesIcon style={{color:'white', fontSize:'1.2rem', marginLeft:'0.5rem'}} />
            </Button>
          </Box>

          <div className="Comments-list">
            {comments.map((e) => {
              return <PostComment {...{ ...e,deleteComment }} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
