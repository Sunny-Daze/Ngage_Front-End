import React from "react";
import "./RecreationCard.css";
import { Typography, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";

function getTotatUserPoints(milestones) {
  let total = 0;
  milestones.forEach((e) => {
    total += e.userPoints;
  });
  return total;
}

function RecreationCard(props) {
  async function participate() {
    let token = localStorage.getItem("token");

    let response = await axios.post(
      domain + endPoints.joinRecreation,
      { recreationId: props.recreation._id },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      props.addActivity(props.recreation._id);
    }
  }

  return (
    <div className="RecreationCard">
      <div className="CardImage">
        <img
          src="https://thumbs.dreamstime.com/b/various-tiny-people-park-performing-leisure-outdoor-activities-cartoon-colorful-vector-illustration-various-tiny-people-park-170163118.jpg"
          alt=""
        />
      </div>

      <div className="RecreationCardBody">
        <div className="heading">
          <Typography
            variant="body2"
            style={{ marginRight: "0.5rem", color: "darkslategray" }}
          >
            Total Reward: {getTotatUserPoints(props.recreation.milestones)}
          </Typography>

          <div className="vertical-divider"></div>

          <Typography
            variant="body2"
            style={{ marginLeft: "0.5rem", color: "darkslategray" }}
          >
            2nd August 2022
          </Typography>
        </div>
        <div className="RecreationContent">
          <Typography
            onClick={() => props.addActivity()}
            style={{
              fontSize: "1.2rem",
              marginTop: "2rem",
              color: "darkslategray",
            }}
            variant="body1"
          >
            {props.recreation.title}
          </Typography>
          <Typography
            onClick={() => props.addActivity()}
            style={{
              marginTop: "0.5rem",
              marginRight: "20rem",
              color: "darkslategray",
            }}
            variant="body2"
          >
            {props.recreation.desc}
          </Typography>
          <Button
            onClick={() => participate()}
            style={{
              fontSize: "14px",
              background: "#001f54",
              height: "30px",
              width: "7.5rem",
              marginTop: "0.8rem",
              textTransform: "none",
            }}
            variant="contained"
          >
            Participate
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RecreationCard;
