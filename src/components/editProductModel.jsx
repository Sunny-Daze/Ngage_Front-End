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
};

export default function EditProductModal(props) {
  console.warn(props.data);
  const [productName, setproductName] = React.useState(props.data.productName);
  const [productDesc, setproductDesc] = React.useState(props.data.productDesc);
  const [userPoints, setuserPoints] = React.useState(props.data.userPoints);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedImageURL, setSelectedImageURL] = React.useState(
    props.data.productImage ?? ""
  );

  const handleClose = () => props.close(false);

  const handleChange = (e, feild) => {
    switch (feild) {
      case "productName":
        setproductName(e.target.value);

        break;

      case "productDesc":
        setproductDesc(e.target.value);

        break;

      case "userPoints":
        setuserPoints(e.target.value);

        break;
      default:
        break;
    }
  };

  async function editProduct() {
    let body = new FormData();
    let token = localStorage.getItem("token");
    if (selectedImageURL) {
      body.append("productImageURL", selectedImageURL);
    }
    body.append("productImage", selectedImage);
    body.append("productName", productName);
    body.append("userPoints", parseFloat(userPoints));
    body.append("productDesc", productDesc);
    body.append("productId", props.data.productId);

    let response = await axios({
      method: "post",
      url: `${domain}${endPoints.editShopProduct}`,
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    console.warn(response);

    if (response.data.success) {
      props.editProduct(response.data.result);
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
              style={{ fontSize: "1rem" }}
            >
              EDIT PRODUCT
            </Typography>
          </Divider>

          <Box
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField
              name="title"
              onChange={(e) => handleChange(e, "productName")}
              size="small"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={productName}
            />
            <TextField
              name="body"
              onChange={(e) => handleChange(e, "productDesc")}
              size="small"
              multiline
              rows={2}
              id="outlined-basic"
              label="Body"
              variant="outlined"
              value={productDesc}
            />
            <TextField
              name="cost"
              onChange={(e) => handleChange(e, "userPoints")}
              value={userPoints}
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
            <div style={{ overflow: "hidden" }}>
              <Button
                variant="outlined"
                style={{ borderColor: "#001f54", color: "#001f54", width:'100%' }}
                component="label"
              >
                {selectedImage
                  ? selectedImage.name.toString()
                  // : selectedImageURL
                  // ? selectedImageURL
                  : `${props.data.productName}'s Image`}

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
                    setSelectedImageURL("");
                  }}
                />
              </Button>
            </div>

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
                onClick={editProduct}
                size="small"
                variant="outlined"
                style={{ color: "green", borderColor: "green" }}
              >
                Edit Product
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
