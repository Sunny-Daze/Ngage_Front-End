import React from "react";
import "./ActiveRecreationCard.css";
import { Typography, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function ActiveRecreationCard(props) {
  return (
    <div className="ActiveRecreationCard">
      <div className="ActiveReacreationCardimagebody">
        <img
          src="https://thumbs.dreamstime.com/b/various-tiny-people-park-performing-leisure-outdoor-activities-cartoon-colorful-vector-illustration-various-tiny-people-park-170163118.jpg"
          alt=""
        />
      </div>
      <div className="ActiveReacreationCarddescbody">
        <Typography
          variant="body1"
          style={{
            color: "darkslategray",
            fontSize: "1.3rem",
            marginBottom: "0.2rem",
            // marginTop:"0.5rem",
          }}
        >
          {props.title}
        </Typography>

        <Typography
          style={{
            color: "darkslategray",
            fontSize: "0.9rem",
            marginTop: "0.5rem",
            marginBottom: "1rem",
            lineHeight: "0.9rem",
          }}
        >
          {props.desc}
        </Typography>

        <Typography
          style={{
            color: "darkslategray",
            fontSize: "0.95rem",
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          Total reward: {props.reward}
        </Typography>

        <Button
          variant="outlined"
          size="small"
          style={{
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            fontSize: "0.8rem",
            borderColor: "#001f54",
            color: "#001f54",
            height:'1.7rem', 
            paddingLeft:'1rem'
          }}
        >
          joined
          <ChevronRightIcon
            style={{
              fontSize: "1.2rem",
              marginBottom: "0.2rem",
              marginLeft:'0.2rem',
              color: "#001f54",
            }}
          />
        </Button>
      </div>
    </div>
  );
}

export default ActiveRecreationCard;
