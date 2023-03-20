import * as React from "react";
import { Button, TextField, Divider, Box, InputAdornment } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TollIcon from "@mui/icons-material/Toll";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";
import { Edit } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 295,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 1.5,
};

export default function EditActivityModal(props) {
  const [trainingTitle, setTrainingTitle] = React.useState("");
  const [trainingBody, setTrainingBody] = React.useState("");

  const handleClose = () => props.close(false);

  const handleChange = (e, feild) => {
    switch (feild) {
      case "trainingName":
        setTrainingTitle(e.target.value);

        break;

      case "trainingDesc":
        setTrainingBody(e.target.value);

        break;

      default:
        break;
    }
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
              Edit Activity
            </Typography>
          </Divider>

          <Box
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField
              name="title"
              onChange={(e) => handleChange(e, "trainingName")}
              size="small"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              //   value={trainingTitle}
            />
            <TextField
              name="body"
              onChange={(e) => handleChange(e, "trainingDesc")}
              size="small"
              multiline
              rows={2}
              id="outlined-basic"
              label="Body"
              variant="outlined"
              // value={trainingBody}
            />

            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button
                style={{
                  marginRight: "1rem",
                  color: "red",
                  borderColor: "red",
                }}
                onClick={() => handleClose()}
                size="small"
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
                onClick={() =>{}
                  // props.editActivity({
                  //   id: props.data.id,
                  //   title: trainingTitle,
                  //   body: trainingBody,
                  // })
                }
                size="small"
                variant="outlined"
                style={{ color: "green", borderColor: "green" }}
              >
                edit Activity
                <Edit
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
