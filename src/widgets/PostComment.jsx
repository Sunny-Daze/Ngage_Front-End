import React from "react";
import "./PostComment.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import formatDate from "../utils/dateFormater";
import DeleteIcon from "@mui/icons-material/Delete";

function validUserForDeleteComment(userId) {
  let userDetails = JSON.parse(localStorage.getItem("user") ?? "");

  if (
    userDetails._id === userId ||
    userDetails.role === "Admin" ||
    userDetails.role === "SuperAdmin"
  )
    return true;

  return false;
}

function PostComment(prop) {
  return (
    <div className="PostCommentBody">
      <div className="PostCommentAvatar">
        <div className="AvatarBorder">
          <Avatar style={{ height: "3.1rem", width: "3.1rem" }}></Avatar>
        </div>
        <div className="AvatarChain"></div>
      </div>

      <div className="PostCommentCard">
        <div className="row">
          <div className="username-and-date">
            <Typography
              variant="body2"
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                lineHeight: "1.5rem",
              }}
            >
              {prop.user.userName}
            </Typography>
            <Typography
              variant="body2"
              style={{ fontSize: "0.75rem", marginBottom: "1rem" }}
            >
              {formatDate(new Date(prop.createdAt))}
            </Typography>
          </div>

          <div className="delete-button">
          { validUserForDeleteComment(prop.user._id) &&  <    Button
              onClick={() => prop.deleteComment(prop.id)}
              variant="outlined"
              color="error"
              style={{
                borderColor: "red",
                height: "1.8rem",
                fontSize: "0.75rem",
                color: "red",
              }}
              size="small"
            >
              DELETE POST
              <DeleteIcon
                style={{
                  fontSize: "1.1rem",
                  marginLeft: "0.5rem",
                  color: "red",
                }}
              />
            </Button>}
          </div>
        </div>

        <Typography variant="body2" style={{ color: "black" }}>
          {prop.comment}
        </Typography>
      </div>
    </div>
  );
}

export default PostComment;
