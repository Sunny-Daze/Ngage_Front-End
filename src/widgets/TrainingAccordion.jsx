import React from "react";
import "./ActivityAccordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

function TrainingAccordion() {
  return (
    <div className="ActivityAccordion">
      <Accordion style={{ width: "48.5rem" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="AccordionTitle">
            <Typography variant="body2">
              Training title: ReactJS Course
            </Typography>
            <Typography variant="body2">
              Training body: Learn all about SPA development
            </Typography>
            <Typography variant="body2">
              Training creater: admin123
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default TrainingAccordion;
