import React from 'react'
import './AdminControlProjects.css'
import ProjectAccordion from '../widgets/ProjectAccordion'
import {Button} from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import AddProjectModal from '../components/AddProjectModal';
import EditProjectModal from '../components/EditProjectModal';
import DeleteEssentialModal from '../components/DeleteEssentialModal'
import AddTaskModal from '../components/AddTaskModal' 
import EditTaskModal from '../components/EditTaskModal'


function AdminControlProject() {
  const [addProjectModal, setAddProjectModal] = React.useState(false)
  const [projects, setProjects] = React.useState([{title:'hello', body:'bello'}])
  const [editProjectModal, setEditProjectModal] = React.useState(false)
  const [editableData, setEditableData] = React.useState({})
  const [deleteModalSwitch, setDeleteModalSwitch] = React.useState(false)
  const [deleteProjectName, setDeleteProjectName] = React.useState("")
  const [addTaskModal, setAddTaskMoadl] = React.useState(false)
  const [tasks, setTasks] = React.useState([{
    title:"blah blah", 
    body:"blah blah" ,
    assignedBy:"blah blah",
    assignedTo:"blah blah",
    cost:"blah blah",
    deadline:"blah blah",
    internalNotes:"blah blah",
    priority:"low",
    status:"blah blah"
  }])
  const [editTaskModal, setEditTaskModal] = React.useState(false)
  const [editTaskData, setEditTaskData] = React.useState({})

  function addProject(projectData) {
    projects.push(projectData);
    setProjects([...projects]);
    setAddProjectModal(false);
  }

  function editProject(newProjectData) {
    console.log(newProjectData)
  }

  function deleteProduct(){
    console.log("delete functoin called")
  }

  function addTask(taskData){
    tasks.push(taskData);
    setTasks([...tasks])
  }

  function editTask(editTaskData) {
    console.log(editTaskData)
  }

  return (
    <div className='AdminControlStore'>
      <AddProjectModal open={addProjectModal} close={setAddProjectModal} addProject={addProject} />
      <EditProjectModal open={editProjectModal} close={setEditProjectModal} data={editableData} editProject={editProject} />
      <DeleteEssentialModal deleteModalSwitch={deleteModalSwitch} deletefunction={deleteProduct} thing={deleteProjectName} setDeleteModalSwitch={setDeleteModalSwitch} />
      <AddTaskModal open={addTaskModal} close={setAddTaskMoadl} addTask={addTask} />
      <EditTaskModal open={editTaskModal} close={setEditTaskModal} editTask={editTask} data={editTaskData} />


      <div className="AdminControlButton">
        <Button onClick={() => setAddProjectModal(true)} variant="contained" size="small" style={{background:'#157F1F'}}>Add Product <AddIcon style={{ fontSize:'1.2rem', marginBottom:'0.1rem', marginLeft:'0.1rem'}} /></Button>
      </div> 
      {
        projects.map((e) => (
          <ProjectAccordion 
          title={e.title} 
          body={e.body}
          data={e} 
          owner="alex" 
          setEditProjectModal={setEditProjectModal}
          setEditableData={setEditableData}
          setDeleteModalSwitch={setDeleteModalSwitch}
          setDeleteProjectName={setDeleteProjectName}
          setAddTaskMoadl={setAddTaskMoadl}
          tasks={tasks}
          setEditTaskModal={setEditTaskModal}
          setEditTaskData={setEditTaskData}
          />
        ))
      }
    </div>
  )
}

export default AdminControlProject