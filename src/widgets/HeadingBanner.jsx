import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function HeadingBanner(props) {
  return (
    <>
      <Box sx={{ minWidth: 800 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              {props.heading}
            </Typography>
            <Typography variant="body2">{props.subheading}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default HeadingBanner;
