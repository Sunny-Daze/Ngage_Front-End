import * as React from "react";
import {
  Divider,
  Modal,
  Typography,
  Box,
  Chip,
  TextField,
  Button,
} from "@mui/material";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import AddIcon from "@mui/icons-material/Add";
import { domain, endPoints } from "../services/endPoints";
import axios from "axios";
import CustomizedSnackbar from '../widgets/CustomizedSnackbar'

let selectedtype = "";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 680,
  // height: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: "5px",
  overflowY: "scroll",
  overflowX: "scroll",
};

const activeButtonStyle = {
  background: "#001f54",
  color: "white",
  borderColor: "#001f54",
};

const inactiveButtonStyle = {};

export default function CreatePostModal(props) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  const [code, setCode] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [badge1ButtonStyle, setBadge1ButtonStyle] =
    React.useState(inactiveButtonStyle);
  const [badge2ButtonStyle, setBadge2ButtonStyle] =
    React.useState(inactiveButtonStyle);
  const [snackbar, setSnackbar] = React.useState(false);

  const handleProcedureContentChange = (content, delta, source, editor) => {
    setCode(content);
  };

  const handleClose = () => {
    props.setPostModalSwitch(false);
    setBadge1ButtonStyle(inactiveButtonStyle);
    setBadge2ButtonStyle(inactiveButtonStyle);
  };

  function handleEmail(e) {
    setTitle(e.target.value);
  }

  async function createPost() {
    // if (selectedtype == "") return;
    let token = localStorage.getItem("token");
    // console.log({
    //   content: code,
    //   category: selectedtype,
    //   title: title,
    // });
    let response = await axios.post(
      domain + endPoints.createPost,
      {
        content: code,
        category: selectedtype,
        title: title,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      // console.log(props);
      props.addNewPost(response.data.result);
    }

    handleClose();
    setCode("");
    setSnackbar(true);
  }

  return (
    <div>
      <Modal
        open={props.postModalswitch}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ fontSize: "1rem" }}
          >
            CREATE POST
          </Typography>
          <Divider style={{ marginTop: "0.1rem" }} />
          <Box
            className="chips"
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <Chip
              style={badge1ButtonStyle}
              // style={{
              //   backgroundColor:
              //     selectedtype === "Question" ? "#001f54" : "#ffffff",
              // }}
              label="Question"
              variant="outlined"
              // onClick={props.setModalSwitch}
              onClick={() => {
                setBadge2ButtonStyle(inactiveButtonStyle);
                badge1ButtonStyle === inactiveButtonStyle
                  ? setBadge1ButtonStyle(activeButtonStyle)
                  : setBadge1ButtonStyle(inactiveButtonStyle);
                badge1ButtonStyle === inactiveButtonStyle
                  ? (selectedtype = "Question")
                  : (selectedtype = "");
              }}
            />
            <Chip
              style={badge2ButtonStyle}
              label="Discussion"
              variant="outlined"
              onClick={() => {
                setBadge1ButtonStyle(inactiveButtonStyle);
                badge2ButtonStyle === inactiveButtonStyle
                  ? setBadge2ButtonStyle(activeButtonStyle)
                  : setBadge2ButtonStyle(inactiveButtonStyle);
                badge2ButtonStyle === inactiveButtonStyle
                  ? (selectedtype = "Discussion")
                  : (selectedtype = "");
              }}
            />
          </Box>
          <TextField
            onChange={(e) => {
              handleEmail(e);
            }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            required
            fullWidth
            size="normal"
          />
          <Box
            className="quillEditor"
            style={{
              width: 625,
              marginTop: "1rem",
              height: 200,
              marginBottom: "0.9rem",
            }}
          >
            {/* {console.log(code)} */}
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={code}
              onChange={handleProcedureContentChange}
              style={{ height: "150px" }}
            />
          </Box>

          <Button
            variant="contained"
            onClick={() => createPost()}
            style={{ marginTop: "1rem", width: "100%", background: "#001f54" }}
          >
            Create post{" "}
            <AddIcon style={{ marginLeft: "0.2rem", fontSize: "1.4rem" }} />
          </Button>
        </Box>
      </Modal>
      <CustomizedSnackbar snackbarSwitch={snackbar} handleSnackbar={setSnackbar} snackbarMessage="Post created successfully!"/>
    </div>
  );
}
