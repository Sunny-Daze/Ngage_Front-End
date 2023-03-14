import React from "react";
import "./CommentSectionPost.css";
import Chip from "../widgets/Chip";
import "../index.css";
import { IconButton, Typography, Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FavoriteRounded } from "@mui/icons-material";
import { AiOutlineComment } from "react-icons/ai";
import formatDate from "../utils/dateFormater";

function CommentSectionPost(props) {
  return (
    <div className="CommentSectionPostBody">
      <div className="postUtils">
        <div className="postUtilsIcons">
          <IconButton style={{ paddingBottom: "0px" }}>
            <FavoriteRounded style={{ fontSize: "1.85rem", color: "red" }} />
          </IconButton>

          <Typography
            variant="body2"
            style={{
              color: "darkslategray",
              textAlign: "center",
              marginRight: "2px",
            }}
          >
            {props.likeCounts}
          </Typography>
          <IconButton style={{ paddingBottom: "0px" }}>
            <AiOutlineComment style={{ fontSize: "1.9rem" }} />
          </IconButton>
          <Typography
            variant="body2"
            style={{
              color: "darkslategray",
              textAlign: "center",
              marginRight: "2px",
            }}
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
              {props.user.userName}
            </Typography>
            <Typography variant="body2">
              {formatDate(new Date(props.createdAt))}
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
            {props.title}
          </Typography>
          {props.category !== "" && <Chip title={props.category} />}
        </div>

        <div className="postContent">
          <div className="postContentBody">
            <Typography variant="body1" style={{ fontSize: "0.9rem" }}>
              <div dangerouslySetInnerHTML={{ __html: props.content }} />{" "}
            </Typography>
          </div>
        </div>

        <div className="postfooterCommentsSection"></div>
      </div>
    </div>
  );
}

export default CommentSectionPost;
