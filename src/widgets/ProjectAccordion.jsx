import React from "react";
import "./ActivityAccordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

function ProjectAccordion() {
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
              Project title: Form Automation
            </Typography>
            <Typography variant="body2">
              Project body: This is an automation project for digitization of forms for the HR department
            </Typography>
            <Typography variant="body2">
              Project Owner: admin123
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

export default ProjectAccordion;
