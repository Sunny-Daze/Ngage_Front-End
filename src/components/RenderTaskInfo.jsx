import React from 'react'
import SideBar from './SideBar'
import TaskInfo from '../pages/TaskInfo'
import './RenderTaskInfo.css';
import { useParams } from 'react-router-dom';

function RenderTaskInfo() {
  

  const { id } = useParams();


  useEffect(() => {
    fetchData(domain + endPoints.fetchProjectNames, {}).then((e) => {
      if (e.data.success) {
        for (const route of getUserRoutes()) {
          console.log(route);
          if (route.name === "Projects") {
            let arr = [];
            e.data.result.forEach((e) => {
              let obj = {
                path: "/project/" + e._id,
                name: e.title,
                icon: <AiOutlineStar />,
              };
              arr.push(obj);
            });

            route.subRoutes = arr;
          }
        }
      }
    });
  }, []);



  return (
    <div className='RenderTaskInfo'>
      <div className="navbar">
        <SideBar />
      </div>
      <div className="TaskInfoBody">
        <TaskInfo task={task}/>
      </div>
    </div>
  )
}

export default RenderTaskInfo


