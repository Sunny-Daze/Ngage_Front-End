import * as React from "react";
import { Button, TextField, Divider, Box, InputAdornment } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";

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
  const [trainingTitle, setTrainingTitle] = React.useState(
    props.recreation.title
  );
  const [trainingBody, setTrainingBody] = React.useState(props.recreation.desc);

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

  async function editActivity() {
    let token = localStorage.getItem("token");
    let response = await axios.post(
      domain + endPoints.updateRecreation,
      {
        recreationId: props.recreation.id,
        title: trainingTitle,
        desc: trainingBody,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      props.updateActivites(response.data.result);
      handleClose();
    }
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
              value={trainingTitle}
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
              value={trainingBody}
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
                onClick={() => {
                  editActivity()
                }}
                size="small"
                variant="outlined"
                style={{ color: "green", borderColor: "green" }}
              >
              Edit Activity
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
