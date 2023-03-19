import * as React from "react";
import { Button, TextField, Divider, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

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

const defaultValue = {
  title: "",
  body: "",
  assignedBy: "user name",
  assignedTo: "",
  cost: "",
  deadline: "",
  internalNotes: "",
  priority: "",
  status: "pending",
};

export default function AddTaskModal(props) {
  const [userData, setUserData] = React.useState(defaultValue);
  const [priority, setpriority] = React.useState("");

  const handlePriorityChange = (event) => {
    setpriority(event.target.value);
  };

  const handleClose = () => props.close(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

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
              style={{ fontSize: "1rem" }}
            >
              Add Project Task
            </Typography>
          </Divider>

          <Box
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Box style={{ display: "flex", width: "133%", gap: "0.5rem" }}>
              <TextField
                name="title"
                onChange={(e) => handleChange(e)}
                id="outlined-basic"
                size="small"
                label="Title"
                variant="outlined"
                style={{ width: "100%" }}
              />
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  size="small"
                  style={{ width: "50%" }}
                >
                  Priority
                </InputLabel>
                <Select
                  size="small"
                  name="priority"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={priority}
                  label="priority"
                  onChange={handlePriorityChange}
                  style={{ width: "50%" }}
                >
                  <MenuItem value={"low"}>Low</MenuItem>
                  <MenuItem value={"medium"}>Medium</MenuItem>
                  <MenuItem value={"high"}>High</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              name="body"
              onChange={(e) => handleChange(e)}
              multiline
              rows={2}
              size="small"
              id="outlined-basic"
              label="Body"
              variant="outlined"
            />
            <TextField
              name="internalNotes"
              onChange={(e) => handleChange(e)}
              multiline
              rows={2}
              size="small"
              id="outlined-basic"
              label="Internal Notes"
              variant="outlined"
            />
            <TextField
              name="assignedTo"
              onChange={(e) => handleChange(e)}
              multiline
              rows={2}
              size="small"
              id="outlined-basic"
              label="Asignees"
              variant="outlined"
            />
            <TextField
              name="cost"
              onChange={(e) => handleChange(e)}
              id="outlined-basic"
              label="Cost"
              size="small"
              variant="outlined"
            />

            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button
                size="small"
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
                size="small"
                style={{ color: "green", borderColor: "green" }}
                onClick={() => {
                  userData.priority = priority;
                  props.addTask(userData);
                  handleClose();
                }}
              >
                Add Task
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
