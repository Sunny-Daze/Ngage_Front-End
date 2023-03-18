import * as React from "react";
import { Button, TextField, Divider, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";
import AddIcon from "@mui/icons-material/Add";
import {FormControl} from '@mui/material'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius:1.5
};

export default function EditMilestoneModal(props) {
  const[levelEdittitle, setLevelEditTitle] = React.useState(props.data.title)
  const[levelEditbody, setLevelEditBody] = React.useState(props.data.body)
  const[levelEditreward, setLevelEditReward] = React.useState(props.data.title)

  const handleClose = () => props.close(false);

  const changeTitle = (e) => {
    setLevelEditTitle(e.target.value)
  }
  
  const changeBody = (e) => {
    setLevelEditBody(e.target.value)
  }

  const changeReward = (e) => {
    setLevelEditReward(e.target.value)
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
              Edit Activity Milestone
            </Typography>
          </Divider>

          <Box
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <FormControl>
            <TextField
              // onChange={(e) => handleChange(e)}
              name="title"
              id="outlined-basic"
              multiline
              rows={2}
              label="Milestone Title"
              variant="outlined"
              onChange={(e) => changeTitle(e)}
              // value={levelEdittitle}
            //   value={levelEdittitle}
            defaultValue={props.data.title}
            />
            </FormControl>
            <TextField
              name="body"
              // onChange={(e) => handleChange(e)}
              multiline
              rows={6}
              id="outlined-basic"
              label="Milestone Body"
              variant="outlined"
              onChange={(e) => changeBody(e)}
            //   value={levelEditbody}
            defaultValue={props.data.body}
            />
            <TextField
              name="reward"
              // onChange={(e) => handleChange(e)}
              id="outlined-basic"
              label="Milestone Reward"
              variant="outlined"
              onChange={(e) => changeReward(e)}
            //   value={levelEditreward}
            defaultValue={props.data.reward}
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
                  props.editMilestone({title:levelEdittitle, body:levelEditbody, reward:levelEditreward})
                  handleClose()
                }}
              >
                Edit Milstone
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
