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
import Post from "../widgets/Post";
import CreatePostModal from "../components/CreatePostModal";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { domain, endPoints } from "../services/endPoints";
import axios from "axios";

function Community() {
  function deletePostFromPosts(postId) {
    let updatedPosts = posts.filter((post) => post.id != postId);
    setPosts([...updatedPosts]);
  }

  function appendNewPost(post) {
    posts.splice(0, 0, {
      category: post.category,
      title: post.title,
      user: post.user,
      content: post.content,
      likeCounts: post.likeCounts,
      liked: post.liked,
      comments: post.comments,
      createdAt: post.createdAt,
    });

    setPosts([...posts]);
  }

  const [filter, setFilter] = React.useState("none");
  const [sort, setSort] = React.useState("newest");
  const [postModal, setpostModal] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [showLoading, setShowLoading] = React.useState(false);

  function checkCategory1(post){
    return post.category === 'Question'
  }

  function checkCategory2(post){
    return post.category === 'Discussion'
  }

  // async function fetchPost() {
  //   let token = localStorage.getItem("token");

  //   // console.warn(token);

  //   let response = await axios.post(
  //     domain + endPoints.fetchPosts,
  //     {},
  //     { headers: { Authorization: `Bearer ${token}` } }
  //   );

  //   if (response.data.success) {
  //     response.data.result.forEach((e) => {
  //       posts.push({
  //         id: e._id,
  //         category: e.category,
  //         title: e.title,
  //         user: e.user,
  //         content: e.content,
  //         likeCounts: e.likeCounts,
  //         liked: e.liked,
  //         comments: e.comments,
  //         createdAt: e.createdAt,
  //       });
  //     });
  //     setPosts([...posts]);
  //   }
  // }

  const handleFilter = (event) => {
    setFilter(event.target.value);
    const cat = event.target.value;
    if (cat === "none"){
      // fetchPost();
      setPosts([...posts]);
      // return;
    }
    else if(cat === "question"){
      const temp = posts;
      const res = temp.filter(checkCategory1)
      setPosts([...res]);
      console.log(res);
      return;
    }
    else if(cat === "discussion"){
      const temp = posts;
      console.log(temp)
      const res = temp.filter(checkCategory2)
      setPosts([...res]);
      return;
    }
    

    // let filteredPosts = posts.filter((e) => e.category == event.target.value);
    // setPosts([...filteredPosts]);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const handlePostClick = () => {
    setpostModal(true);
  };
 
  async function fetchData() {
    let token = localStorage.getItem("token");

    // console.warn(token);

    let response = await axios.post(
      domain + endPoints.fetchPosts,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      response.data.result.forEach((e) => {
        posts.push({
          id: e._id,
          category: e.category,
          title: e.title,
          user: e.user,
          content: e.content,
          likeCounts: e.likeCounts,
          liked: e.liked,
          comments: e.comments,
          createdAt: e.createdAt,
        });
      });
      setPosts([...posts]);
    }
  }
  React.useEffect(() => {

    // if (posts.length === 0) {
      fetchData();
    // }
  }, []);

  return (
    <div className="Community">
      <div className="CommunitySearchBar">
        <TextField
          style={{ width: "23rem" }}
          size="small"
          label="Search for Posts"
          id="outlined-size-sm  all"
          onChange={(e) => {
            if (e.target.value === "") setPosts([...posts]);
            // console.warn(e.target.value);
            let searchedPosts = posts.filter((pt) =>
              pt.title.includes(e.target.value)
            );
            setPosts([...searchedPosts]);
          }}
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
            <MenuItem value={"none"}>None</MenuItem>
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
        {posts.length === 0 &&
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>}
        {posts.map((item, key) => {
          key = item.id;
          return <Post {...{ ...item, deletePostFromPosts }} />;
        })}
      </div>
      <CreatePostModal
        postModalswitch={postModal}
        setPostModalSwitch={setpostModal}
        addNewPost={appendNewPost}
      />
    </div>
  );
}

export default Community;
