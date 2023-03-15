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
  cost: "",
};

export default function AddProductModal(props) {
  const [userData, setUserData] = React.useState(defaultValue);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleClose = () => props.close(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  async function addProduct() {
    let body = new FormData();
    let token = localStorage.getItem("token");
    body.append("productImage", selectedImage);
    body.append("productName", userData.body);
    body.append("userPoints", parseFloat(userData.cost));
    body.append("productDesc", userData.body);

    let response = await axios({
      method: "post",
      url: `${domain}${endPoints.createNewShopProduct}`,
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    console.warn(response);

    if (response.data.success) {
      props.close(false);
    } else {
      props.close(false);
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
              ADD NEW PRODUCT
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
            <TextField
              name="cost"
              onChange={(e) => handleChange(e)}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TollIcon
                      style={{ fontSize: "1.3rem", color: "goldenrod" }}
                    />
                  </InputAdornment>
                ),
              }}
              id="outlined-basic"
              label="cost"
              variant="outlined"
            />

            <Button
              variant="outlined"
              style={{ borderColor: "#001f54", color: "#001f54" }}
              component="label"
            >
              {selectedImage
                ? selectedImage.name.toString()
                : "upload product image"}

              <PhotoCamera
                style={{
                  fontSize: "1.2rem",
                  color: "#001f54",
                  marginLeft: "0.5rem",
                }}
              />
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={(event) => {
                  console.log(event.target.files);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </Button>

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
                onClick={addProduct}
                size="small"
                variant="outlined"
                color="success"
              >
                add product
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
