import React from "react";
import "./AdminControlStoreProductCard.css";
import { Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteModal from "../components/DeleteModal";
import AddProductModal from "../components/AddProductModal";


function AdminControlStoreProductCard(props) {
  const [editModel, seteditModel] = React.useState(false);
  const [deleteModalSwitch, setDeleteModalSwitch] = React.useState(false);

  console.log(props);

  const handleProductDelete = () => {
    setDeleteModalSwitch(true);
  };

  const deleteProduct = () => {
    console.log("Post deleted successfully!");
  };

  async function editProduct() {
    seteditModel(true);
  }

  return (
    <>
      <AddProductModal data={props} open={editModel} close={seteditModel} />
      <div className="AdminControlStoreProductCard">
        <DeleteModal
          deleteModalSwitch={deleteModalSwitch}
          deletefunction={deleteProduct}
          thing="Food Coupon"
          setDeleteModalSwitch={setDeleteModalSwitch}
        />
        <div className="admin-control-store-left-container">
          <img src={props.productImage} alt="" srcset="" />
        </div>
        <div className="admin-control-store-right-container">
          <Typography variant="body2">
            Product title: {props.productName}
          </Typography>
          <Typography variant="body2">
            Product body: {props.productDesc}
          </Typography>
          <Typography variant="body2">
            Product cost: {props.userPoints}
          </Typography>
          <div className="admin-control-store-products-buttons">
            <Button
              onClick={() => editProduct()}
              size="small"
              variant="outlined"
              style={{
                marginRight: "1rem",
                color: "#001f54",
                borderColor: "#001f54",
              }}
            >
              Edit item
              <EditIcon
                style={{
                  color: "#001f54",
                  fontSize: "1.15rem",
                  marginLeft: "0.2rem",
                  marginBottom: "0.2rem",
                }}
              />
            </Button>
            <Button
              onClick={handleProductDelete}
              size="small"
              variant="outlined"
              style={{ borderColor: "red", color: "red" }}
            >
              remove item{" "}
              <DeleteIcon
                style={{
                  color: "red",
                  fontSize: "1.15rem",
                  marginLeft: "0.2rem",
                  marginBottom: "0.2rem",
                }}
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminControlStoreProductCard;
