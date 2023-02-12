import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './CardWithPoints';

function CardWithPoints(props) {
  return (
    <>
      <Box sx={{ minWidth: 800 }}>
        <Card variant="outlined">
          <CardContent>
            <div className="cardBody">
            <div className="left">
            <Typography variant="h5" component="div">
              {props.heading}
            </Typography>
            <Typography variant="body2">{props.subheading}</Typography>
            </div>
            <div className="right">
                hello
            </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default CardWithPoints;
