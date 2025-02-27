import * as React from "react";
import { Button, TextField, Divider, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import { domain, endPoints } from "../services/endPoints";
import EditIcon from "@mui/icons-material/Edit";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { fetchData } from "../services/request";
import { Mention, MentionsInput } from "react-mentions";
import mentionsInputStyle from "./mentionsInputStyle";

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
  note: "",
  priority: "",
  status: "pending",
};

export default function EditTaskModal(props) {
  const [userData, setUserData] = React.useState(props.task);
  const [priority, setpriority] = React.useState(props.task.priority);

  const handlePriorityChange = (event) => {
    setpriority(event.target.value);
  };

  const handleClose = () => props.close(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  function validateField() {
    let isEmpty = Object.keys(userData).filter((val) => val === "");
    if (isEmpty.length === 0 && priority === "") return false;
    return true;
  }

  function editTask() {
    if (validateField()) {
      userData.priority = priority;
      userData.projectId = props.projectId;
      userData.taskId = props.task._id;

      fetchData(`${domain}${endPoints.editProjectTask}`, userData).then((e) => {
        if (e) {
          if (e.data.success) {
            props.editTask(e.data.result);
            handleClose();
          }
        }
      });
    }
  }

  // mentions
  const [formState, setFormState] = React.useState({
    username: "",
    comment: "",
  });

  const users = [
    {
      id: "isaac",
      display: "Isaac Newton",
    },
    {
      id: "sam",
      display: "Sam Victor",
    },
    {
      id: "emma",
      display: "emmanuel",
    },
  ];

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
              Edit Project Task
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
                defaultValue={userData.title}
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
              defaultValue={userData.desc}
            />
            <TextField
              name="note"
              onChange={(e) => handleChange(e)}
              multiline
              rows={2}
              size="small"
              id="outlined-basic"
              label="Internal Notes"
              variant="outlined"
              defaultValue={userData.note}
            />
            {/* mentions */}
            <MentionsInput
              placeholder="Add asignees. Use '@' for mention"
              value={formState.comment}
              onChange={(e) =>
                setFormState({ ...formState, comment: e.target.value })
              }
              style={mentionsInputStyle}
            >
              <Mention style={{ background: "#cee4e5" }} data={users} />
            </MentionsInput>
            <Box style={{display:'flex', paddingLeft:'0.5rem', paddingRight:'0.5rem', justifyContent:'spacebetween'}}>
            <input type="date" />
            <TextField
              name="cost"
              style={{width:'12rem', marginLeft:'3rem'}}
              onChange={(e) => handleChange(e)}
              id="outlined-basic"
              label="Cost"
              size="small"
              variant="outlined"
              defaultValue={userData.cost}
            />
            </Box>

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
                  editTask();
                }}
              >
                Edit Task
                <EditIcon
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
