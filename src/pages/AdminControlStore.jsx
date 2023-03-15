import React from "react";
import "./AdminControlStore.css";
import AdminControlStoreProductCard from "../widgets/AdminControlStoreProductCard";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddProductModal from "../components/AddProductModal";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";

function AdminControlStore() {
  const [createModal, setCreateModal] = React.useState(false);
  const [storeProducts, setStoreProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");

      // console.warn(token);

      let response = await axios.post(
        domain + endPoints.fetchShopProducts,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        response.data.result.forEach((e) => {
          storeProducts.push({
            productId: e._id,
            productDesc: e.productDesc,
            productImage: e.productImage,
            productName: e.productName,
            userPoints: e.userPoints,
          });
        });
        setStoreProducts([...storeProducts]);
      }
    }

    if (storeProducts.length == 0) {
      fetchData();
    }
  });

  return (
    <div className="AdminControlStore">
      <AddProductModal open={createModal} close={setCreateModal} />
      <div className="AdminControlButton">
        <Button
          onClick={() => setCreateModal(true)}
          variant="contained"
          size="small"
          style={{ background: "#157F1F" }}
        >
          Add Product{" "}
          <AddIcon
            style={{
              fontSize: "1.2rem",
              marginBottom: "0.1rem",
              marginLeft: "0.1rem",
            }}
          />
        </Button>
      </div>

      {storeProducts.map((e) => (
        <AdminControlStoreProductCard {...e} />
      ))}
    </div>
  );
}

export default AdminControlStore;
