import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import Typography from "@mui/material/Typography";
import PushPinIcon from "@mui/icons-material/PushPin";
import CardHeader from "@mui/material/CardHeader";
export default function PostComponent() {
  return (
    <>
      <div className="UserPostCollection">
        <div className="UserPostCard">
          <div className="PostIcons">
            <IconButton
              aria-label="add to favorites"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <FavoriteIcon sx={{ fontSize: "2rem" }} />
              <Typography>5</Typography>
            </IconButton>
            <IconButton aria-label="add to favorites">
              <CommentIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <PushPinIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </div>
          <div className="PostBody">
            <Card
              style={{ border: "none", boxShadow: "none" }}
              sx={{ maxWidth: 950 }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    style={{ height: "4.1rem", width: "4.1rem" }}
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                  ></Avatar>
                }
                title="Shani Yadav and Sunny Yadav"
                subheader="November 4, 2022"
              />
            </Card>
            <Typography
              style={{ marginLeft: "1rem", fontWeight: "bold" }}
              variant="h6"
            >
              This is a comment
            </Typography>
            <img
              alt="userPostImage"
              className="postImage"
              src="https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
