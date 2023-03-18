import React from "react";
import "./ActivityAccordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import TrainingLevelCard from '../widgets/TrainingLevelCard'

function TrainingAccordion(props) {
  const [levels, setLevels] = React.useState([{title:"Code Structure", body:"Learn the code and directory structure", reward:"2000"}])

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
              Training Title: {props.trainingTitle}
            </Typography>
            <Typography variant="body2">
              Training Body: {props.trainingBody}
            </Typography>
            <Typography variant="body2">
              Training Creater: {props.trainingCreater}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            style={{
              fontSize: "0.8rem",
              marginRight: "1rem",
              color: "green",
              borderColor: "green",
            }}
            variant="outlined"
            size="small"
            onClick={() => props.setAddLevelModal(true)}
          >
            Add Level
            <AddIcon style={{color:'green', fontSize:'1.3rem', marginBottom:'0.2rem', marginLeft:'0.2rem'}} />
          </Button>
          <Button
            style={{
              fontSize: "0.8rem",
              marginRight: "1rem",
              color: "#001f54",
              borderColor: "#001f54",
            }}
            variant="outlined"
            size="small"
            onClick={() => {
              props.editModalSwitch(true)
              props.userData(props.data)
            }}
          >
            Edit Training
            <EditIcon style={{color:'#001f54', fontSize:'1.1rem', marginBottom:'0.2rem', marginLeft:'0.5rem'}} />
          </Button>
          <Button
            style={{ fontSize: "0.8rem", color: "red", borderColor: "red" }}
            variant="outlined"
            size="small"
          >
            Delete Training
            <DeleteIcon style={{color:'red', fontSize:'1.1rem', marginBottom:'0.2rem', marginLeft:'0.4rem'}} />
          </Button>
          {levels.map((e) => (
            <TrainingLevelCard title={e.title} body={e.body} reward={e.reward} />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default TrainingAccordion;
