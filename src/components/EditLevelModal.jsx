import * as React from "react";
import { Button, TextField, Divider, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function EditLevelModal(props) {
  const[title, setTitle] = React.useState(props.data.title)
  const[body, setBody] = React.useState(props.data.body)
  const[reward, setReward] = React.useState(props.data.title)

  const handleClose = () => props.close(false);

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }
  
  const changeBody = (e) => {
    setBody(e.target.value)
  }

  const changeReward = (e) => {
    setReward(e.target.value)
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Divider style={{ marginTop: "0.8rem", marginBottom: "1rem" }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontSize: "1.5rem" }}
            >
              Edit Training Level
            </Typography>
          </Divider>

          <Box
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField
              name="title"
              // onChange={(e) => handleChange(e)}
              id="outlined-basic"
              multiline
              rows={2}
              label="Level Title"
              variant="outlined"
              onChange={(e) => changeTitle(e)}
              value={title}
            />
            <TextField
              name="body"
              // onChange={(e) => handleChange(e)}
              multiline
              rows={6}
              id="outlined-basic"
              label="Level Body"
              variant="outlined"
              onChange={(e) => changeBody(e)}
              value={body}
            />
            <TextField
              name="reward"
              // onChange={(e) => handleChange(e)}
              id="outlined-basic"
              label="Level Reward"
              variant="outlined"
              onChange={(e) => changeReward(e)}
              value={reward}
            />

            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button
                style={{
                  marginRight: "1rem",
                  color: "red",
                  borderColor: "red",
                }}
                onClick={() => handleClose()}
                variant="outlined"
              >
                Cancel{" "}
                <ClearIcon
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "0.2rem",
                    marginLeft: "0.2rem",
                  }}
                />
              </Button>
              <Button
                variant="outlined"
                style={{ color: "green", borderColor: "green" }}
                onClick={() => {
                  console.log(props.data)
                  // props.addLevel(userData)
                  handleClose()
                }}
              >
                Edit Level
                <AddIcon
                  style={{
                    fontSize: "1.4rem",
                    marginBottom: "0.2rem",
                    marginLeft: "0.2rem",
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
