import React from "react";
import "./ProductCard.css";
import { Button, Typography } from "@mui/material";
import TollIcon from "@mui/icons-material/Toll";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import couponImage from "../assets/couponImage.png";
import CustomizedSnackbar from '../widgets/CustomizedSnackbar'

function ProductCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  }

  return (
    <div className="Product-Card">
      <div className="product-photo">
        <img src={props.productImage} alt="decoy" />
      </div>
      <div className="product-descriptoin">
        <Typography
        
          variant="body1"
          style={{
            color: "darkslategray",
            fontSize: "1.3rem",
            marginBottom: "0.5rem",
          }}
        >
          {props.productName}
        </Typography>
        <Typography
          style={{
            color: "darkslategray",
            fontSize: "0.8rem",
            marginBottom: "0.2rem",
          }}
        >
          {props.productDesc}
        </Typography>
        <div className="price">
          <TollIcon style={{ marginRight: "6px", fontSize: "1.3rem" }} />
          <Typography style={{ fontSize: "0.9rem" }}>
            {props.userPoints} Points
          </Typography>
        </div>
        <Button
          variant="outlined"
          onClick={handleClick}
          style={{
            color: "#001f54",
            marginTop: "1rem",
            borderColor: "#001f54",
            height: "1.6rem",
            width: "7.5rem",
          }}
        >
          PURCHASE
          <ChevronRightIcon />
        </Button>
      </div>
      <CustomizedSnackbar snackbarSwitch={open} handleSnackbar={setOpen}/>
    </div>
  );
}

export default ProductCard;
