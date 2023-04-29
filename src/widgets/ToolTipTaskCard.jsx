import React from 'react'
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
  

function ToolTipTaskCard(props) {
  let {name } = props;
  return (
    <>
    <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography style={{fontSize:'0.8rem'}} variant='body1' color="inherit">
                          {name}
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
                        marginTop: '1rem'
                      }}
                    >
                      A
                    </Avatar>
        </HtmlTooltip>
    </>
  )
}

export default ToolTipTaskCard