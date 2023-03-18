import React from "react";
import "./AdminControlTraining.css";
import TrainingAccordion from "../widgets/TrainingAccordion";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddTrainingModal from "../components/AddTrainingModal";
import EditTrainingModal from "../components/EditTrainingModal";
import AddLevelModal from "../components/AddLevelModal";
import EditLevelModal from "../components/EditLevelModal";

function AdminControlTrainings() {
  const [createTrainingModal, setCreateTrainingModal] = React.useState(false);
  const [trainingCourses, setTrainingCourses] = React.useState([
    { id: "0123", title: "blah", body: "blah", creater: "blah" },
  ]);
  const [trainginEditModal, setTrainingEditModal] = React.useState(false);
  const [addLevelModal, setAddLevelModal] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [levels, setLevels] = React.useState([
    {
      title: "Code Structure",
      body: "Learn the code and directory structure",
      reward: "2000",
    },
  ]);
  const [editLevelToggle, setEditLevelToggle] = React.useState(false);
  const [editLevelData, setEditLevelData] = React.useState({});

  function addTrainingCourse(userData) {
    trainingCourses.push(userData);
    setTrainingCourses([...trainingCourses]);
    console.log(trainingCourses);
  }

  const editTraining = (newUserData) => {
    console.log(userData);
    // console.log(newUserData)
  };

  function addLevel(userData) {
    levels.push(userData);
    setLevels([...levels]);
  }

  return (
    <div>
      <EditLevelModal open={editLevelToggle} close={setEditLevelToggle} data={editLevelData} />
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
        addLevel={addLevel}
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
        <TrainingAccordion
          setEditLevelData={setEditLevelData}
          setEditLevelToggle={setEditLevelToggle}
          levels={levels}
          userData={setUserData}
          setAddLevelModal={setAddLevelModal}
          editModalSwitch={setTrainingEditModal}
          trainingTitle={e.title}
          trainingBody={e.body}
          trainingCreater={e.creater}
          data={e}
        />
      ))}
    </div>
  );
}

export default AdminControlTrainings;
