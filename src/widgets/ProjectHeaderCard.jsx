import React from "react";
import "./ProjectHeaderCard.css";
import { Typography, Box } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#001F54",
    color:'white',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(1),
    opacity:0.5,
  },
}));

function ProjectHeaderCard() {
  return (
    <>
      <div className="ProjectHeaderCardContatiner">
        <Typography variant="h5">Form Automation</Typography>
        <Typography variant="body2" style={{ marginTop: "0.4rem" }}>
          Standardized components pertaining to the Engage UI language
        </Typography>
      </div>
      <div className="projectCostContainer">
        <Typography variant="body2" style={{ marginBottom: "0.4rem" }}>
          Total Cost Rs: 110000
        </Typography>
        <Box style={{display:'flex'}}>
        <Typography variant="body2">Project Owner(s): </Typography>
        <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography style={{fontSize:'0.8rem'}} variant='body1' color="inherit">
                          Alex Yadav
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
        </Box>
      </div>
    </>
  );
}

export default ProjectHeaderCard;
