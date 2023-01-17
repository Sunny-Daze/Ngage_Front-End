import React from "react";
import "./Community.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import Modal from "@mui/material/Modal";
import RichTextEditor from "../widgets/quill-editor";
import PostComponent from "../widgets/post-components";


const modelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height:500,
  p: 4,
};

const currencies = [
  {
    value: "USD",
    label: "none",
  },
  {
    value: "EUR",
    label: "Question",
  },
  {
    value: "BTC",
    label: "Discussion",
  },
];

const currenciess = [
  {
    value: "USD",
    label: "Likes",
  },
  {
    value: "EUR",
    label: "Oldest",
  },
  {
    value: "BTC",
    label: "Newest",
  },
];

function Community() {
  const [currency, setCurrency] = React.useState("EUR");
  const [quillValue, quillSetValue] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="CommunityPage">
      <div className="header">
        <div className="input">
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Search for posts..."
              style={{ marginTop: "5px" }}
            />
          </Box>
        </div>
        <div className="filter">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-select-currency"
              select
              value={currency}
              label="FilterByTags"
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </div>
        <div className="sort">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="SortBy"
              value={currency}
              onChange={handleChange}
            >
              {currenciess.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </div>
      </div>
      <div className="line"></div>
      <Divider style={{ marginTop: "5px" }} />
      <div className="postButton">
        <Button onClick={handleOpen}>Add Post + </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modelStyle}>
            <RichTextEditor></RichTextEditor>

          </Box>
        </Modal>
      </div>
      <PostComponent></PostComponent>
    </div>
  );
}

export default Community;
