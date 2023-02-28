import React from "react";
import "./Community.css";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Post from '../widgets/Post'
import CreatePostModal from "../components/CreatePostModal";
// import PostComponent from "../widgets/post-components";

function Community() {
  const [filter, setFilter] = React.useState("none");
  const [sort, setSort] = React.useState("newest");
  const [postModal, setpostModal] = React.useState(false);

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const handlePostClick = () => {
    setpostModal(true);
  }

  return (
    <div className="Community">
      <div className="CommunitySearchBar">
        <TextField
          style={{ width: "23rem" }}
          size="small"
          label="Search for Posts"
          id="outlined-size-small"
        />
        <FormControl style={{ width: "9rem" }}>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            autoHeight
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Age"
            size="small"
            onChange={handleFilter}
          >
            <MenuItem value={"none"}>none</MenuItem>
            <MenuItem value={"question"}>Question</MenuItem>
            <MenuItem value={"discussion"}>Discussion</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "9rem" }}>
          <InputLabel size="small" id="demo-simple-select-label">
            Sort
          </InputLabel>
          <Select
            autoHeight
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Age"
            size="small"
            onChange={handleSort}
          >
            <MenuItem value={"newest"}>Newest</MenuItem>
            <MenuItem value={"oldest"}>Oldest</MenuItem>
            <MenuItem value={"likes"}>Likes</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Divider
        style={{ marginTop: "1.3rem", marginBottom: "0.75rem", width: "50rem" }}
      />
      <div className="createPostButton">
        <Button
          onClick={handlePostClick}
          variant="contained"
          style={{ width: "9rem", fontSize: "0.75rem", background: "#001f54" }}
        >
          create post
          <AddIcon style={{ marginLeft: "0.2rem", fontSize: "1.2rem" }} />
        </Button>
      </div>

      <div className="postBody">
        <Post />
        <Post />
        <Post />
      </div>
      <CreatePostModal postModalswitch={postModal} setPostModalSwitch={setpostModal} />
    </div>
  );
}

export default Community;
