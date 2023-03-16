import React from "react";
import "./Store.css";
import Card from "../widgets/CardWithPoints";
import ProductCard from "../widgets/ProductCard";
import { domain, endPoints } from "../services/endPoints";
import axios from "axios";

function UserControl() {

  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");
      let response = await axios.post(
        domain + endPoints.fetchShopProducts,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        let products = response.data.result;

        let arr = [];

        products.forEach((e) => {
          arr.push({
            id: e._id,
            productName: e.productName,
            productDesc: e.productDesc,
            productImage: e.productImage,
            userPoints: e.userPoints,
          });
        });

        setState(arr);
      }
    }

    if (state.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <div className="Store">
      <Card
        heading="Items Store"
        subheading="Welcome to the store, where you can cash in you hard-earned points!"
        coins="100"
      />

      <div className="Store-Products">
        {state.map((data) => (
          <ProductCard
            productName={data.productName}
            productDesc={data.productDesc}
            userPoints={data.userPoints}
            productImage={data.productImage}
            productId={data.id}
          />
        ))}
      </div>
    </div>
  );
}

export default UserControl;
