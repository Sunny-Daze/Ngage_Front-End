import React from 'react'
import { Typography } from '@mui/material'
import './FeedbackCard.css'
import formatDate from "../utils/dateFormater";

function FeedbackCard(props) {
  return (
    <div className="feedbackCArd">
      <div className="row">
          <div className="username-and-date">
            <Typography
              variant="body2"
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                lineHeight: "1.5rem",
              }}
            >
              {props.userName}
            </Typography>
            <Typography
              variant="body2"
              style={{ fontSize: "0.75rem", marginBottom: "1rem" }}
            >
              {formatDate(new Date(props.createdAt))}
            </Typography>
          </div>
        </div>
        
          <Typography variant="body2" style={{ color: "black" }}>
          {props.feedback}
        </Typography>
    </div>
  )
}

export default FeedbackCard;