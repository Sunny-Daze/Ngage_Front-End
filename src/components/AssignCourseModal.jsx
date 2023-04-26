import * as React from "react";
import { Button, Divider, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { domain, endPoints } from "../services/endPoints";
import { fetchData } from "../services/request";
import { Mention, MentionsInput } from "react-mentions";
import mentionsInputStyle from "./mentionsInputStyle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius:2,
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
  const handleClose = () => props.setToggleAssignCourse(false);

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
        open={props.toggleAssignCourse}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Divider style={{ marginTop: "0.rem", marginBottom: "1rem" }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontSize: "1rem" }}
            >
              Assign Course
            </Typography>
          </Divider>

          <Box
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* mentions */}
            <MentionsInput
              placeholder="Add employees to assign course. Use '@' for mention"
              value={formState.comment}
              onChange={(e) =>
                setFormState({ ...formState, comment: e.target.value })
              }
              style={mentionsInputStyle}
            >
              <Mention style={{ background: "#cee4e5" }} data={users} />
            </MentionsInput>
            <Box style={{display:'flex', justifyContent:'spacebetween'}}>
            <input type="date" />

            <Button endIcon={<ChevronRightIcon />} variant='outlined' style={{borderColor:'#001f54', marginLeft:'0.8rem', color:'#001f54'}} >assign</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
