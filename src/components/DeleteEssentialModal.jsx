import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CustomizedSnackbar from "../widgets/CustomizedSnackbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  p: 2,
};

export default function DeleteEssentialModal(props) {
  const [snackSwitch, setsnackSwitch] = React.useState(false);
  const [projectName, setProjectName] = React.useState("");

  const handleClose = () => {
    props.setDeleteModalSwitch(false);
  };

  const handleYes = () => {
    props.deletefunction();
    handleClose();
    setsnackSwitch(true);
  };

  const handleChange = (e) => {
    setProjectName(e.target.value);
  };

  return (
    <div>
      <CustomizedSnackbar
        snackbarSwitch={snackSwitch}
        handleSnackbar={setsnackSwitch}
        snackbarMessage="Deleted successfully!"
      />
      <Modal
        open={props.deleteModalSwitch}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Project?
          </Typography>
          <Typography
            style={{ color: "darkslategray" }}
            variant="body2"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Are you absolutely sure? This action cannot be undone. This will
            permanently delete the <b>project name</b>.
          </Typography>
          <Typography
            style={{ color: "darkslategray" }}
            variant="body2"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Please type <b>project name</b> to confirm.
          </Typography>
          <TextField
            style={{ width: "100%", marginTop: "0.6rem" }}
            name="title"
            onChange={(e) => handleChange(e)}
            size="small"
            id="outlined-basic"
            variant="outlined"
          />
          {projectName === "project name" ? (
            <Button
              style={{
                textTransform: "none",
                marginTop: "0.6rem",
                borderColor: "red",
                color: "red",
              }}
              onClick={handleYes}
              color="error"
              variant="outlined"
            >
              I understand the consequences, delete this project
            </Button>
          ) : (
            <Button
              style={{
                textTransform: "none",
                marginTop: "0.6rem",
                color: "#f8a3a1",
                borderColor: "#f8a3a1",
              }}
              onClick={handleYes}
              color="error"
              disabled
              variant="outlined"
            >
              I understand the consequences, delete this project
            </Button>
          )}
        </Box>
      </Modal>
    </div>
  );
}
