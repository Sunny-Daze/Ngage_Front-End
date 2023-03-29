import React from "react";
import "./CourseContentBanner.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    // backgroundColor: "#f5f5f9",
    backgroundColor: "#001F54",
    // color: "rgba(0, 0, 0, 0.87)",
    color: "white",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(1),
    border: "1px solid #001F54",
  },
}));

function CourseContentBanner(props) {
  console.log(props);

  return (
    <>
      <Box sx={{ minWidth: 800 }}>
        <Card variant="outlined">
          <CardContent>
            <div className="CourseContentCardBody">
              <div className="left">
                <Typography
                  variant="h5"
                  style={{ fontSize: "1.7rem", marginTop: "1rem" }}
                  component="div"
                >
                  {props.data.title}
                </Typography>
                <Typography style={{ marginTop: "0.55rem" }} variant="body2">
                  {props.data.desc}
                </Typography>
                <Typography
                  style={{
                    marginTop: "0.45rem",
                    fontSize: "0.75rem",
                    marginBottom: "0.5rem",
                  }}
                  variant="body2"
                >
                  Total Levels: {props.data.tasks.length}
                </Typography>
              </div>
              <div className="right">
                <div className="Course-Content-right-container">
                  <Typography variant="body2">Created by: </Typography>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography
                          style={{ fontSize: "0.8rem" }}
                          variant="body1"
                          color="inherit"
                        >
                          {props.data.createdBy.userName}
                        </Typography>
                      </React.Fragment>
                    }
                  >
                    <Avatar
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        fontSize: "1rem",
                        marginLeft: "0.35rem",
                      }}
                    >
                      A
                    </Avatar>
                  </HtmlTooltip>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default CourseContentBanner;
