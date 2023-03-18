import React from "react";
import "./AdminControlTraining.css";
import TrainingAccordion from "../widgets/TrainingAccordion";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddTrainingModal from "../components/AddTrainingModal";
import EditTrainingModal from '../components/EditTrainingModal'
import AddLevelModal from '../components/AddLevelModal'

function AdminControlTrainings() {
  const [createTrainingModal, setCreateTrainingModal] = React.useState(false);
  const [trainingCourses, setTrainingCourses] = React.useState([{id:'0123', title:'blah', body:'blah', creater:'blah'}]);
  const [trainginEditModal, setTrainingEditModal] = React.useState(false)
  const [addLevelModal, setAddLevelModal] = React.useState(false);
  const [userData, setUserData] = React.useState({})
  function addTrainingCourse(userData) {
    trainingCourses.push(userData);
    setTrainingCourses([...trainingCourses]);
    console.log(trainingCourses);
  }

  const editTraining = (newUserData) => {
    console.log(userData)
    // console.log(newUserData)
  }

  return (
    <div>
      <EditTrainingModal
        data={userData}
        open={trainginEditModal}
        close={setTrainingEditModal}
        editTrainingfunc={editTraining}
        // editProduct={editTraining}
      />
      <AddLevelModal 
        open={addLevelModal}
        close={setAddLevelModal}
      />
      <div className="AdminControlButton">
        <AddTrainingModal
          open={createTrainingModal}
          close={setCreateTrainingModal}
          addTrainingCourse={addTrainingCourse}
        />
        <Button
          onClick={() => setCreateTrainingModal(true)}
          variant="contained"
          size="small"
          style={{ background: "green" }}
        >
          Add Training{" "}
          <AddIcon
            style={{
              fontSize: "1.2rem",
              marginBottom: "0.1rem",
              marginLeft: "0.1rem",
            }}
          />
        </Button>
      </div>
      {trainingCourses.map((e) => (
        <TrainingAccordion userData={setUserData} setAddLevelModal={setAddLevelModal} editModalSwitch={setTrainingEditModal} trainingTitle={e.title} trainingBody={e.body} trainingCreater={e.creater} data={e} />
      ))}
    </div>
  );
}

export default AdminControlTrainings;
