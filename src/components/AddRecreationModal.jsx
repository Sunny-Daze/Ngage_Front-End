import * as React from "react";
import { Button, TextField, Divider, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 295,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const defaultValue = {
  title: "",
  body: "",
};

export default function AddRecreationModal(props) {
  const [userData, setUserData] = React.useState(defaultValue);

  const handleClose = () => props.close(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  async function addActivity() {
    let token = localStorage.getItem("token");
    let response = await axios.post(
      domain + endPoints.createRecreation,
      {
        title: userData.title,
        desc: userData.body,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      props.addNewActivity(response.data.result);
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
              style={{ fontSize: "0.8rem" }}
            >
              ADD NEW ACTIVITY
            </Typography>
          </Divider>

          <Box
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField
              name="title"
              onChange={(e) => handleChange(e)}
              size="small"
              id="outlined-basic"
              label="Title"
              variant="outlined"
            />
            <TextField
              name="body"
              onChange={(e) => handleChange(e)}
              size="small"
              multiline
              rows={2}
              id="outlined-basic"
              label="Body"
              variant="outlined"
            />

            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button
                style={{ marginRight: "1rem" }}
                onClick={() => handleClose()}
                size="small"
                variant="outlined"
                color="error"
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
                onClick={() => addActivity()}
                size="small"
                variant="outlined"
                color="success"
              >
                add activity
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
