import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomizedSnackbar from "../widgets/CustomizedSnackbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  p: 2,
};

export default function DeletePostConfirmModal(props) {
  const [snackSwitch, setsnackSwitch] = React.useState(false);

  const handleClose = () => {
    props.setDeleteModalSwitch(false);
  };

  const handleYes = () => {
    props.del(props.arg1, props.arg2, props.arg3);
    handleClose();
    setsnackSwitch(true);
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
            Delete Post?
          </Typography>
          <Typography
            style={{ color: "grey" }}
            variant="body2"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Are you sure you want to delete this {props.element}?
          </Typography>
          <Box
            style={{
              width: "100%",
              marginTop: "2rem",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={handleClose}
              color="error"
              style={{ marginRight: "0.5rem" }}
              variant="outlined"
              size="small"
            >
              no
            </Button>
            <Button
              onClick={handleYes}
              color="success"
              variant="outlined"
              size="small"
            >
              yes
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
