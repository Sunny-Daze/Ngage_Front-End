import React from "react";
import "./PostComment.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ConfirmPostModal from '../components/ConfirmPostModal';
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
  const [confirmModal, setConfirmModal] = React.useState(false);

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
          { validUserForDeleteComment(prop.user._id) &&  
              <IconButton
              onClick={() => setConfirmModal(true)}
              // onClick={() => prop.deleteComment(prop.id)}
              color="error"
            >
              <DeleteIcon
                style={{
                  fontSize: "1.5rem",
                  color: "red",
                }}
              />
            </IconButton>}
          </div>
        </div>

        <Typography variant="body2" style={{ color: "black" }}>
          {prop.comment}
        </Typography>
      </div>
      <ConfirmPostModal deleteModalSwitch={confirmModal} element="comment" setDeleteModalSwitch={setConfirmModal} deletefunction={prop.deleteComment} id={prop.id}/>
    </div>
  );
}

export default PostComment;
